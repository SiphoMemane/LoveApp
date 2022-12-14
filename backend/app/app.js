const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require("body-parser");
const port = 3000


app.use(bodyParser.json());

app.use(cors());

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();    
  });
  app.get(``, (req, res) => { 

    res.json({info:'Node.js,Express, and Postgres API'})
 });
const login = require('../controller/login')
const register = require('../controller/register')
const userDetails = require('../controller/userDetails')
const uploadImg = require('../controller/uploadimage');
const getimage  = require('../controller/getimages');
const updatedetails  = require('../controller/updatedetails');



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
 })

 app.get('/userDetails/:id',userDetails.getDetails)



app.get('/getimages',getimage.getImg )
 app.post('/uploadimage/:id',uploadImg.image)


app.post('/login',login.login)
app.post('/register',register.createUser)
app.post('/updatedetails',updatedetails.details)