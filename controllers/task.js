const Task = require("../models/task")

async function createTask(req,res){
    const task = new Task();
    const params = req.body

    //console.log(req.body)

    task.title = params.title
    task.description = params.description

    try {
        const taskStore = await task.save()

        if(!taskStore){
            res.status(400).send({msg:"La tarea no se ha guardado"})
        }else{
            res.status(200).send({task:task})
        }

    } catch (error) {
        res.status(500).send(error)
    }
}



module.exports = {
    createTask
}