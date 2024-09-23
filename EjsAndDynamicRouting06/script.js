const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());  // By using these two lines we can use the forms which is known as parsers
app.use(express.urlencoded({extended: true})); // By using these two lines we can use the forms which is known as parsers


app.use(express.static(path.join(__dirname, 'public')));  // this is for setting up public static files , static files are those files in which 
                                                          //  we set up css, vanilla js, images etc
                                                          
app.set('view engine', 'ejs'); // this line is used to render ejs files

app.get("/", (req, res)=>{
    res.render("index");
})

app.get('/profile/:username',(req,res)=>{   // This is dynamic routing
    
    res.send("Hello " + req.params.username)

});

app.listen(3000, ()=>{
    console.log("It is running");
    
});


