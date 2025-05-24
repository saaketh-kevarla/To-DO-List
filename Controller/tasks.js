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
        if(!thatTask){
            return res.status(404).json({msg:`This id ${req.params.id} doesnt exist`});
        }
        res.status(200).json(thatTask)
    }
    catch(error){
        res.status(500).json({msg : error}); 
    }

}

const updateTask = async (req,res) =>{
    try {
        const {id:TaskID} = req.params;
        const thatTask  = await Task.findByIdAndUpdate(TaskID,req.body,{
            new : true,
            runValidators : true
        });
        if(!thatTask){
            res.status(404).json({msg : error})
        }
        //const allTasks = await Task.find({});
        res.status(201).json(thatTask);

    } catch (error) {
        res.status(500).json({msg : error})
    }
}

const deleteTask = async (req,res) =>{
    try {
        const {id:TaskID} = req.params
        const delTask = await Task.deleteOne({_id : TaskID})
        const allTasks = await Task.find({});
        if(!delTask){
            return res.status(404).json({msg : `cannot find the task with id ${TaskID}`})
        }
        res.status(201).json(allTasks);
    } catch (error) {
        res.status(500).json({msg : error});    
    }
}


module.exports = {getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}