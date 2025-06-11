const express = require('express')
const app = express();
const port = 5000;


//create server on port
app.listen(port,()=>{
    console.log('server started on $(port)');
})