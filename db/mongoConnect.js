const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const Atlas = process.env.Atlas_URL

const connectDB = async () =>{
    try{
        await mongoose.connect(Atlas)
        console.log('YESS!! connect to Mongo DB..');
    }
    catch(error){
        console.log('Mongo Error',error);
    }
}

module.exports = {connectDB}