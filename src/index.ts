import express, { Application } from "express";
import dotenv from "dotenv"

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 42969

app.listen(port, () => {
    console.log(`Liseting on port: ${port}`)
})
