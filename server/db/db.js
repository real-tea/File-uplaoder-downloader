const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/file_upload', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

mongoose.connect('mongodb://127.0.0.1:27017/Social-Media',
{ useNewUrlParser: true}).then(()=>{
    console.log("database connection established");
}).catch((err)=>{
    console.log(err)
})