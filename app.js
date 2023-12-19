const express=require("express")
const bodyParser=require("body-parser")
const path=require("path")

const adminRoutes=require('./Routes/admin')
const shopRoutes=require('./Routes/shop')

const app=express();

app.set('view engine','ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page not found'})
})

app.listen(9000)
