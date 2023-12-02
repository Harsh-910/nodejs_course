const express=require("express")

const app=express();

// app.use('/',(req,res,next)=>{
//     console.log('First Middleware')
//     next()
// })

// app.use('/',(req,res,next)=>{
//     console.log('Second Middleware')
// })

app.use('/user',(req,res,next)=>{
    console.log('Product Page!')
    res.send('<h1>User Page</h1>')
})

app.use('/',(req,res,next)=>{
    console.log('In the another middleware!')
    res.send('<h1>Hello From Express</h1>')
})

app.listen(9000)
