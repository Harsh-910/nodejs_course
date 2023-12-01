const express=require("express")

const app=express();

app.use((req,res,next)=>{
    console.log('In the middleware!')
    next()   // allow the request to continue to the next middleware
})

app.use((req,res,next)=>{
    console.log('In the another middleware!')
    res.send('<h1>Hello From Express</h1>')
})

app.listen(9000)
