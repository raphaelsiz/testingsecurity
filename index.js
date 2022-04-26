const express = require('express');
require('dotenv').config();

const app = express();

app.get('/',(req,res)=>{
  res.send(process.env.KEY)
});

app.listen(3000);