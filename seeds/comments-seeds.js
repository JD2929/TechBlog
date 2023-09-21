const {Comments} = require ("../models")

const commentsData =[

    {
        id:1,
        text:"Awesome!!",
        userId:1,
        postId:1
    },
    {
        id:2,
        text:"How much do you blog?",
        userId:3,
        postId:2
    },
    {
        id:3,
        text:"Welcome to the fun!!",
        userId:3,
        postId:3
    },

]

const seedComments= () => Comments.bulkCreate(commentsData)

module.exports=seedComments;