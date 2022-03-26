const express = require('express')
const app = express()
const port = 3000

app.get('/hello',(req,res)=>{
    res.status(200).send({"status":"OKi"})
})

app.listen(port,()=>{
    console.log("Servidor del API REST esta funcionando...")
})