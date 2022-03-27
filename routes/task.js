const express = require("express")
const TaskController = require ("../controllers/task")

const api = express.Router();

api.post("/task",TaskController.createTask)
api.get("/task",TaskController.getTasks)
api.get("/task/:id",TaskController.getTask)

module.exports = api