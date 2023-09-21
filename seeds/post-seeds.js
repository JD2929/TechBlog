const {Post} = require ("../models")

const postData=[{
    id:1,
    title:"This is my first one",
    text:"I always wanted to blog, this is my chance!",
    userId:3
    
},
{
    id:2,
    title:"This is my second one",
    text:"Blogging is fun!",
    userId:2
    
},
{
    id:3,
    title:"This is my third one",
    text:"I am serial blogger!",
    userId:1
    
},
]

const seedPost =() => Post.bulkCreate(postData)

module.exports= seedPost;