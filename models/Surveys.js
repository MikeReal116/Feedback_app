const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientSchema = require("./Recipients");


const surveySchema = new Schema({
    title : String,
    subject:String,
    body:String,
    recipient:[recipientSchema],
    _creator : {type:Schema.Types.ObjectId,  ref:"users"},
    date: {type:Date, default:Date.now},
    yes:{type:Number, default:0},
    no:{type:Number, default:0}
});
 
mongoose.model("surveys", surveySchema);