import express from "express"
import cors from "cors"
import sequelize from "./db/DbConnection.js"
import seed from "./seeding/Seed.js"
import LoginApiService from "./api/LoginApiService.js"
import { json } from "sequelize"

const app=express()
app.use(cors())
app.use(express.json())
const port=9000

setTimeout(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        seed()
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
},1000)

const loginApiService=new LoginApiService()

app.post('/login',async(req,res)=>{
    console.log(req.body);
    let response =await loginApiService.login(req)
    return res.json(response)
})

app.listen(port,()=>{
    console.log(port);
})