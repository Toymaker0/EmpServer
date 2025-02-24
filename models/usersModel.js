import { hash } from "bcrypt";
import sequelize from "../db/DbConnection.js";
import { Sequelize,DataTypes } from "sequelize";

const userModel=sequelize.define('users',{
    username: DataTypes.STRING,
    password: {
        type: DataTypes.STRING,
        // set(value) {
        //   // Storing passwords in plaintext in the database is terrible
        //   // Hashing the value with an appropriate cryptographic hash function is better.
        //   this.setDataValue('password', hash(value));
        // },
      }
})

export default userModel