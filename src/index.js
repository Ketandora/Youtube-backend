// import mongoose from 'mongoose'
// import { DB_NAME } from './constants.js'
import dns from "node:dns";
import express from 'express'

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    
    app.on("error", (error) => {
        console.log("err ", error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`is running ${process.env.PORT}`)
    })
    
})
.catch((err) => {
    console.log("mongo connection failed ", err);
})







// import express from 'express'
// const app = express( )

// (async () => {

//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERR: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })

//     } catch(error){
//         console.log("Error", error)
//         throw error
//     }
// })()