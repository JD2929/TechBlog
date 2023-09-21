const sequelize=require('../config/connection');
const seedUser = require('./user-seeds');
const seedPost= require("./post-seeds")
const seedComments= require("./comments-seeds")

const seedAll =async () =>{
    await sequelize.sync({force:true})
    console.log("--------DATABASE SYNCED--------");
    await seedUser();
    console.log("-------USER SEEDED-----");
    await seedPost();
    console.log("-------POST SEEDED-----");
    await seedComments()
    console.log("-------COMMENTS SEEDED-----");
    process.exit(0)
}

seedAll()