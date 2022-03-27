const express = require("express")
const app = express()

// Cargar rutas
const hello_routes = require("./routes/hello")

// Rutas base
app.use("/api",hello_routes)

module.exports = app


// mongodb+srv://usuario:<password>@ow-db.ly6qc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority