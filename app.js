const express=require("express")
const bodyParser=require("body-parser")
const path=require("path")

const adminRoutes=require('./Routes/admin')
const shopRoutes=require('./Routes/shop')

const ErrorController=require("./Controller/error")

const app=express();

app.set('view engine','ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(ErrorController.getError)

app.listen(9000)
