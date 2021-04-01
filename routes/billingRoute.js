const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const checkLogin = require("../middlewares/checkLogin");

module.exports = (app) =>{
    app.post("/api/stripe",  checkLogin, async (req, res)=>{
       await stripe.charges.create({
            amount: 500,
            currency: "eur",
            source : req.body.id
        });
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    })
}