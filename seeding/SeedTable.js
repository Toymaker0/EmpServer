import userModel from "../models/usersModel.js";


class SeedTable{
    createUserTable(){
        return userModel.sync({alter:true})
    }
}

export default SeedTable