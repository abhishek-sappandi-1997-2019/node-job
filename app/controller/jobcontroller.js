const Job = require('../model/Job')
const jobcontroller = {}

jobcontroller.list = (req,res) =>{
    Job.find()
    .then((job)=>{ 
        res.json(job)
    })
    .catch((err)=>{
        res.json(err)
    })
}

jobcontroller.create = (req,res) =>{
    const body = req.body
    const job = new Job(body)
    job.save()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })
}
jobcontroller.edit = (req,res) =>{
    const _id = req.params.id
    const body = req.body
    Job.findByIdAndUpdate(_id, body, { new: true })
    .then((uppdatedData)=>{
        res.json(uppdatedData)
    })
    .catch((err)=>{
        res.json(err)
    })

}

jobcontroller.remove = (req,res) =>{
    const id = req.params.id
    Job.findByIdAndDelete(id)
    .then((job)=>{
        res.json(job)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = jobcontroller