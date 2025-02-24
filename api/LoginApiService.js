import userModel from "../models/usersModel.js";
import bcrypt from "bcrypt"

class LoginApiService {
    async login(req) {
        const { userName, password } = req.body
        console.log(userName, password);
        let x = await userModel.findOne({ where: { userName: userName } })
        if (x != null) {
            // console.log(x.dataValues);
            //  const salt = bcrypt.genSaltSync(10);
            // // const hashedPassword = bcrypt.hashSync(password,salt)
            // // console.log(hashedPassword);
            // let z=  bcrypt.compareSync(x.dataValues.password,password,salt)
            // console.log(z);
           if( x.dataValues.password==password){
            return ('auth')
           }
           else{
            return('wrong')
           }

        }
        else {
            return ('User not exist')
        }
        console.log(x);

    }
}

export default LoginApiService