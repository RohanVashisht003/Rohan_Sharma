const express = require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=80;

//for serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//endpoint
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views/index.html'));
});

app.get('/about',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views/about.html'));
});

app.get('/contact',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views/contact.html'));
});

app.post('/contact',(req,res)=>{
    Name=req.body.Name;
    age=req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    more=req.body.more;
    let outputToWrite=`Name: ${Name}, Age: ${age}, Gender: ${gender}, Address: ${address}, More: ${more} `;
    fs.writeFileSync('./database/contactPageFile.txt',outputToWrite);
    console.log("Your details has been submitted successfully");
    res.status(200).sendFile(path.join(__dirname,'views/contact.html'));
});

app.post('/',(req,res)=>{
    Name=req.body.Name;
    email=req.body.email;
    message=req.body.message;
    let outputToWrite1=`Name: ${Name}, E-mail: ${email}, Message: ${message}`;
    fs.writeFileSync('./database/homePageFile.txt',outputToWrite1);
    console.log("Your details has been submitted successfully");
    res.status(200).sendFile(path.join(__dirname,'views/index.html'));
});


//start the server
app.listen(port, ()=>{
    console.log(`Application is successfully started on port ${port}`);
});

