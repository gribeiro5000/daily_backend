import express from "express";
import router from "../View/routes.js"

const app = express()

// express will read body with json
app.use(express.json())

//routes
app.use(router)

export default app