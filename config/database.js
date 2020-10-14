const mongoose = require('mongoose')

const ConfigDB = () =>{
    mongoose.connect('mongodb://localhost:27017/job',{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>{
        console.log("connected to DB")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = ConfigDB