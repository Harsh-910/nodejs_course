const express=require("express")

const app=express();

app.use('/add-product',(req,res,next)=>{
    console.log('Product Page!')
    res.send('<h1>Product Page</h1>')
})

app.use('/',(req,res,next)=>{
    console.log('In the another middleware!')
    res.send('<h1>Hello From Express</h1>')
})

app.listen(9000)
