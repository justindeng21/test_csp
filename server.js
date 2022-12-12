const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));





app.use(express.static('public')) // forces external files to be inside /public

app.get('/', function(req,res){
    res.sendFile('data/hello_world.json',{root: __dirname })
})

app.get('/a',function(req,res){
    res.sendFile('data/nothing.json',{root: __dirname })
})

app.get('/close',function(req,res){
    res.send('closing');
    server.close()

})

var server = app.listen(port)
console.log('Server is being hosted on port 3000')