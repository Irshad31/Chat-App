// const express = require("express")  //  "type": "module", in package lock json for  using import instead of require
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
const app = express()
const PORT = process.env.PORT || 4000;

dotenv.config()
app.use(express.json())
app.use("/api/auth", authRoutes)
 //parses incoming requests with JSON payloads.
// app.get("/", (req, res) => {
//     res.send("hello world")

// })
app.listen(PORT,
    () => {
        connectToMongoDB()
        console.log(`server running on port ${PORT}`)
    }




)