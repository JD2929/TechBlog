const router= require('express').Router()
const {Post, User, Comments} =require('../models')

router.get('/', async (req, res)=>{
    try{
        const posts =await Post.findAll({
            include:[User]
        })

        const postData = posts.map((post)=> post.get({plain:true}))
        res.render('homepage', {postData})

    }catch(err){
        console.error(err)
    }
})

router.get('/post/:id', async (req, res)=>{
    try{
        const onePost =Post.findByPk(
            req.params.id,
            {
                include:[{model:User, attributes:{exclude:'password'}},
            {model:Comments, include:[{model:User, attributes:{exclude:'password'}}]}]
            }
        )
        const post= (await onePost).get({plain:true})
        res.render('singlePost', {post})

    }catch (err){
        console.error(err)
    }
})

router.get("/login", (req, res)=>{
    res.render("login")
})

router.get("/register", (req, res)=>{
    res.render("register")
})


module.exports=router