const express = require("express")
const TaskController = require ("../controllers/task")

const api = express.Router();

api.post("/task",TaskController.createTask)


module.exports = api