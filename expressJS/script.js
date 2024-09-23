const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {   // This is a middleware 
    console.log("Runnig middleware"); 
    next();
});
app.use(function(req, res, next) {   // This is a middleware 
    console.log("Runnig 2nd middleware"); 
    next();
});

app.get("/", function(req, res){
    res.send("This is the main page");
});

app.get("/profile", function(req, res, next){
    return next(new Error("Not implemented"));
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!')
});

app.listen(3000);