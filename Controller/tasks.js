//controller
const {Task} = require('../models/Task.js') 

const getAllTasks = async(req,res) =>{
    try{
    const allTasks = await Task.find({})
    res.status(200).json({tasks:allTasks})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createTask = async(req,res) =>{
try{
    const mynewTask = new Task(req.body)
    await mynewTask.save()
    res.json(mynewTask)
}
catch(error){
    res.status(500).json({msg:error})
}
}

const getTask = async(req,res) =>{
    try{
        const thatTask = await Task.findOne({_id: req.params.id})
        res.status(200).json(thatTask)
    }
    catch(error){
        console.log('Error couldnt fetch the task',error);
        
    }

}

const updateTask = (req,res) =>{
    res.send('Update Task')
}

const deleteTask = (req,res) =>{
    res.send('Delete Task')
}


module.exports = {getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}