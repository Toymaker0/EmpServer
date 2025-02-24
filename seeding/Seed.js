import userModel from "../models/usersModel.js"
import SeedTable from "./SeedTable.js"

const seed=async()=>{
    const seedTable= new SeedTable()

    //user Table
    seedTable.createUserTable()
    let res=await userModel.findAll()
 
    if(res.length==0){
      await  userModel.create({username:'admin',password:'123'})
    }
}

export default seed