const {User}= require('../models')

const userData=[
    {
        id:1,
        username:'Bob',
        password:'password123'
    },
    {
        id:2,
        username:'Charlie',
        password:'password123'
    },
    {
        id:3,
        username:'John',
        password:'password123'
    },
]

const seedUser= () => User.bulkCreate(userData,{
    individualHooks:true,
    returning:true
})

module.exports=seedUser;