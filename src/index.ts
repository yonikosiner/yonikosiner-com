import express, { Application, Request, Response } from "express";
import dotenv from "dotenv"
import mailRoute from "./email";

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 42969

app.listen(port, () => {
    console.log(`Liseting on port: ${port}`)
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
    req;
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/contact", mailRoute)
