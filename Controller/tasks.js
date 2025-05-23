//controller

const getAllTasks = (req,res) =>{
    res.send('get all Tasks');
}

const createTask = (req,res) =>{
    res.send(req.body)
}

const getTask = (req,res) =>{
    res.send(req.params.id)
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