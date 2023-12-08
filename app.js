const express=require("express")
const bodyParser=require("body-parser")
const path=require("path")
const rootDir=require("./util/path")

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.get('/user',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./','Views','user.html'))
})

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./','Views','home.html'))
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(9000)
