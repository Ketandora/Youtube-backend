import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//as an obj is returned
        console.log(`\n Mongodb connected.... host ${connectionInstance.connection.host}`);///see its use
    }catch(error){
        console.log("MONGODB connection error ", error);
        process.exit(1)
    }
}

export default connectDB;