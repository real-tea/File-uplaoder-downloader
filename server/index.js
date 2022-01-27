const express = require('express');
const path = require('path');
const fileRoute = require('./routes/file');
const mongoose = require('mongoose');
const cors = require('cors');
// require('./db/db');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}


mongoose.connect('mongodb://127.0.0.1:27017/template',
  {useNewUrlParser :true
  ,useUnifiedTopology: true
  }).then(()=> {
    console.log("database connected");
  }).catch((error)=>{console.log(error)})

const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);
app.use(cors(corsOptions)) 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(3030, () => {
  console.log('server started on port 3030');
});
