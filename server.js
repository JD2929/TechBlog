const express =require("express")
const session=require("express-session")
const exphbs=require("express-handlebars")
const sequelize=require("./config/connection")
const routes =require('./controllers')

const app=express()
const PORT= process.env.PORT || 3001

const SequelizeStore=require("connect-session-sequelize")(session.Store)

const sess ={
    secret: 'super super secret',
    cookie:{},
    resave:false,
    saveUnintialized:true,
    store: new SequelizeStore({
        db:sequelize
    })

}

app.use(session(sess))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.use(routes)

const hbs =exphbs.create({})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")


sequelize.sync().then(()=>{
    app.listen(PORT, function(){
        console.log(`App running on port ${PORT} .. http://localhost:${PORT}`)
    })
})