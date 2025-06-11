const express = require('express')
const app = express();
const port = 5000;

const dbConfig = require('./app/config/db.config')

const mongoose = require("mongoose")

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true,
    useUnifiedtopology:true
}).then(()=>{
    console.log('connection done with database');

}).catch((err)=>{
    console.log("error in db connection",err);
    process.exit()

})

//create server on port
app.listen(port,()=>{
    console.log(`server started on ${port}`);
})