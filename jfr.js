const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/main.html");
});

app.post("/",(req,res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var op = req.body.operator;
    if(op==='+'){
        var result = num1+num2;
    }else if(op==='-'){
        var result = num1-num2;
    }else if(op==='*'){
        var result = num2*num3;
    }else if(op==='/'){
        var result = num1/num2;
    }else{
        res.send('you entered invalid operator');
    }
    res.send("your result:"+result);
});

app.listen(3005);