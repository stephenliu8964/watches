var mongoose = require("mongoose");

var watchSchema = mongoose.Schema({
    brand:{type:String, required:true},
    model:{type:String, required:true},
    caliber:{type:String, required:false},
    createdAt:{type:Date, default:Date.now},
    image:{type:mongoose.Schema.Types.ObjectId, required:false, unique:false},
    userID:{type:mongoose.Schema.Types.ObjectId, required:false, unique:false},
    public:{type:Boolean, default:false, unique:false}
});

var Watch = mongoose.model("Watch", watchSchema);

module.exports = Watch;