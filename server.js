const express = require('express');
const { log } = require('node:console');
const router = require('./Routes/tasks.js');
const {connectDB}  = require('./db/mongoConnect.js')




const app  = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))




//Route Handler 
app.use('/api/v1/tasks',router)

const port = 3000;

const startServer = async () =>{
    try {
        await connectDB() ;
        app.listen(port,console.log(`The app is running on port ${port}...`));
    } catch (error) {
        console.log('Unable to Start Server error',error);
    }
}

startServer()




