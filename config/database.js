const mongoose = require('mongoose')

const ConfigDB = () =>{
    mongoose.connect(`mongodb+srv://abhi:<abhi>@database.lze2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>{
        console.log("connected to DB")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = ConfigDB

///'mongodb://localhost:27017/job'