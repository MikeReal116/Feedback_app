const mongoose = require("mongoose");
const checkLogin = require("../middlewares/checkLogin");
const checkCredit = require("../middlewares/checkCredit");
const emailTemplate = require("../services/emailTemplate");
const keys = require("../config/keys");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(keys.sendGridKey);

const Survey = mongoose.model("surveys");
module.exports = (app) =>{
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
            html: emailTemplate(body)
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