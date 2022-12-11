//server stuff
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
//












app.use(express.static('public')) // forces external files to be inside /public


app.get('/',function(req,res)
{
	res.render('home')
})


app.get('/hello-world', function(req,res){
    res.sendFile('data/hello_world.json',{root: __dirname })
})
