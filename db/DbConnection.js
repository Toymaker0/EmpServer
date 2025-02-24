import { Sequelize } from "sequelize";

const sequelize = new Sequelize('curd', 'root', 'swift', {
    host: '172.16.44.6',
    dialect: 'mysql' 
  });


  export default sequelize