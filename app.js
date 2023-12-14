const express=require("express")
const bodyParser=require("body-parser")
const path=require("path")
const hbs=require("express-handlebars")

const adminData=require('./Routes/admin')
const shopRoutes=require('./Routes/shop')

const app=express();

app.engine('hbs',hbs({layoutsDir:'views/layouts',defaultLayout:'main-layout',extname:'hbs'}))
app.set('view engine','hbs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page not found'})
})

app.listen(9000)
