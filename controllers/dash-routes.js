const router= require('express').Router()
const {Post, User,Comments}= require("../models");
const withAuth= require("../utils/auth")


router.get("/", withAuth, async (req,res) => {
    try {
        const postData = await Post.findAll({
          include:[User],
          where: {
            userId: req.session.userId,
          },
        });
    
        const posts = postData.map(post => post.get({ plain: true }));
      
    
        res.render('dashboard', {
          posts, userId:req.session.userId
        });
      } catch (err) {
        res.redirect('login');
      }
     
});

// get one post
//endpoit /dashboard/post/:id
router.get('/post/:id',withAuth, async (req,res)=>{
  console.log(req.params.id, "is this coming through?")
  try{
      const onePost= Post.findByPk(
          req.params.id ,
          {
        
          include:[User]
      })
      if(onePost){
          const post =(await onePost).get({plain:true})
          // console.log(post, 'does this work?')
         return res.render('single-post-dash',{post, userId:req.session.userId})
      }
      else{
          res.status(404).end();
      }
     
  }catch(err){
      console.log(err)
  }
})


module.exports= router;