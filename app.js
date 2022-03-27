const express = require("express")
const app = express()

//Enviar JSON
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Cargar rutas
const task_routes = require("./routes/task")

// Rutas base
app.use("/api",task_routes)

module.exports = app


