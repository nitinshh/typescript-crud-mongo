import express from "express";
import mongoose from "mongoose";
import router from "./routes/EmployeeRoute";

const app = express()
const PORT = 3000

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/typescript')
.then(()=>{
    console.log('db connection is done')
})
.catch((err)=>{
    console.log('error while connecting to db', err)
})

app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
