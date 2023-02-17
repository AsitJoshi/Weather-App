const path = require("path");
const hbs = require("hbs")
const express = require("express");
const app = express();

const port = 80;

// Paths
const staticPath= path.join(__dirname,"../public");
const tempPath = path.join(__dirname,"../temp/views");
const partialsPath = path.join(__dirname,"../temp/partials");


// static folder Declaration
app.use(express.static(staticPath));


//Dynamic folder setup
app.set("view engine","hbs");
app.set("views",tempPath);
hbs.registerPartials(partialsPath);

//Routing
app.get("/",(req,res)=>{
    res.render('index.hbs');
});

app.get("/about",(req,res)=>{
    res.render('about.hbs');
});

app.get("/weather",(req,res)=>{
    res.render('weather.hbs');
});

// 404 error page routing
app.get("*",(req,res)=>{
    res.status(404).render('404error.hbs');
});

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});

//nodemon app.js -e js,hbs,html //in terminal to declare extions