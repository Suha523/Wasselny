const express = require('express')
const api = require('./server/Routes/api')
const  mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/wasselny", { useNewUrlParser: true });

const port = 4000
const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
  
    next();
  });
app.use('/', api)

app.listen(port, function () { 
   console.log(`the server is listen on port ${port}` );
})

