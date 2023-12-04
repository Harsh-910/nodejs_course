const express=require("express")
const bodyParser=require("body-parser")

const adminRoutes=require('./Routes/admin')
const shopRoutes=require('./Routes/shop')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRoutes)


app.listen(9000)
