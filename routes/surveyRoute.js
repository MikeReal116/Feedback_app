const mongoose = require("mongoose");
const { Path } = require("path-parser");
const _ = require("lodash");
const { URL } = require("url");
const checkLogin = require("../middlewares/checkLogin");
const checkCredit = require("../middlewares/checkCredit");
const emailTemplate = require("../services/emailTemplate");
const keys = require("../config/keys");
const sgMail = require("@sendgrid/mail");
const { rest } = require("lodash");
sgMail.setApiKey(keys.sendGridKey);

const Survey = mongoose.model("surveys");
module.exports = (app) =>{

    app.get("/api/surveys/:surveyId/:choice", (req,res)=>{
        res.send("Thanks for sharing your feedback");
    }) ;

    app.post("/api/surveys/webhook", (req, res) => {
        const path = new Path("/api/surveys/:surveyId/:choice");

        _.chain(req.body)
        .map(({email, url}) => {
            const match = path.test( new URL(url).pathname);

            if(match){
                return{email, surveyId:match.surveyId, choice: match.choice}
            }
        })
        .compact()
        .uniqBy("email", "surveyId")
        .each(({email, surveyId, choice}) =>{
            Survey.updateOne(
                {
                    _id : surveyId,
                    recipient : {
                        $elemMatch : {email:email, responded:false}
                    }
                },
                {
                    $inc : { [choice] : 1 },
                    $set : {"recipient.$.responded":true}
                }
            ).exec();
        })
        .value()
        rest.send({});
    });

    app.post("/api/surveys", checkLogin, checkCredit, async (req, res) =>{
        const {title, subject, body, recipient} = req.body;
        const surveyrecipients = recipient.split(",");

        const survey = new Survey({
            title,
            subject,
            body,
            recipient : surveyrecipients.map(email=>({email}))
        });

        const msg = {
            to: surveyrecipients,
            from : "dazzleyeahme@gmail.com",
            subject: subject,
            html: emailTemplate(survey)
        };

        try{
            await sgMail.send(msg);
            await survey.save();
            req.user.credits -= 1;
            const user =  await req.user.save();
            res.send(user);
        } catch(error){
            res.status(417).send(error);
        }
            
    })

}