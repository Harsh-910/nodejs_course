const express=require("express")
const bodyParser=require("body-parser")
const path=require("path")

const adminRoutes=require('./Routes/admin')
const shopRoutes=require('./Routes/shop')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
})

app.listen(9000)
