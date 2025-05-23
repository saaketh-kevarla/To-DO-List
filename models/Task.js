const mongoose = require('mongoose')

const mySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'must provide name'],
        trim : true,
        maxlength : [20,'must be less than 20 characters']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

const Task = mongoose.model('Task',mySchema)


module.exports = {Task}