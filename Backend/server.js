// create a servers.js file


const express=require ('express'); // create express instance
const app=express(); // and give that instance name app

app.listen(3000,()=>{
    console.log("server running on port 3000")
});

app.get  // define the get route
('/',(req,res)=>{
    res.send("Hello World");
});

app.get   // define the get route
('/about',(req,res)=>{
    res.send("This is about page");
}); 

 // to parse the incoming requests
const bodyParser = require('body-parser');  

// to use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// to use parser for json data and it add it to req body
app.use(bodyParser.json()); 

app.post   // define the post route
('/create',(req,res)=>{
    const {name,brand }=req.body;
    console.log(name);
    console.log(brand);   
    res.send("This is create page");
}); 