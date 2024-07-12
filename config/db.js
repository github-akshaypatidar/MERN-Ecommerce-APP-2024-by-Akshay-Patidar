// const mongoose=require('mongoose')
// const colors=require('colors')
import mongoose from 'mongoose';
import colors from 'colors';


const connectDB = async ()=>{
try{
    const con = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connected to MongoDB succesfully on host ${con.connection.host}`.bgMagenta)

}
catch(error){
 console.log(`Error in MongoDB ${error}`.bgRed.white);
}


}
export default connectDB;

//module.exports={connectDB:connectDB}  commonjs export
//const {connectDB}=require('./config/db.js')