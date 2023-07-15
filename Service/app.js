import express from "express";
import router from "../View/routes.js"
import modelSync from "../Model/model_synchronization/modelSync.js"
import createDatabase from "../Model/Database/create.js"

const app = express()

// express will read body with json
app.use(express.json())

// This creates the table and database if it doesn't exist (and does nothing if it already exists)
createDatabase()
modelSync()

//routes
app.use(router)

export default app