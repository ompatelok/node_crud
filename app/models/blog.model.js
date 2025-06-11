const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    title:{
        type:String,
        requierd:true
    },
    description:{
        type:String,
        required:true
    }

},
{
    timestamps:true
}
);
var blog = new mongoose.model('Blog', schema);
module.export = blog;