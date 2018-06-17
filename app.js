const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const hbs = require('hbs');
app.set("view engine",'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.send('Hello Express!!')
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        details:"detail will go be here"
    })
})

app.get('/bad',(req,res)=>{
    res.send({
        statusCode:"404",
        error : "bad request"
    })
})

app.listen(PORT,()=>{
    console.log(`app server running on : ${PORT}`)
});
console.log("express app running ...");


