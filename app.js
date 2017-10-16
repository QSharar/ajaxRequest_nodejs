var express  = require("express");
var bp = require("body-parser");

var app = express();
app.use(bp.urlencoded({extended : false}));
app.use(bp.json());

app.use(( req, res, next ) => {
    console.log(`${req.url} --> ${req.method}`);
    next();
});


app.get("/" , (req, res) => {
    
    res.sendFile( __dirname + '/form.html')
});


app.post("/aj", (req, res) => {
    
    console.log("found");
    console.log(req.body);
    res.send(req.body);
    
})

app.listen(9000);
