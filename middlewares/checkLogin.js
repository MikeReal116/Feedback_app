module.exports = (req, res, next) =>{
    if(!req.body){
        return res.status(401).send({error:"You should login to buy credit"});   
    }
    next();
}