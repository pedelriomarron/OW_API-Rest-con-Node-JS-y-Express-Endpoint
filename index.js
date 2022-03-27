const mongoose = require("mongoose")
const app = require("./app")
const port = 3000
const urlMongoDB = "mongodb+srv://user:user@ow-db.ly6qc.mongodb.net/mydb?retryWrites=true&w=majority"

mongoose.connect(urlMongoDB, (err,res)=>{
    try {
        if(err) throw err 
        
        console.log("La conexion a la BBDD es correcta")

        app.listen(port,()=>{
            console.log("Servidor del API REST esta funcionando...")
        })
        
    } catch (err) {
        console.log(err)
    }
})

