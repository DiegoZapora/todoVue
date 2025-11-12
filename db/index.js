import mongoose from "mongoose";
import express from "express"
import cors from "cors"

import { Todos } from "./Schemas/Todos.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost/todoVue")
    .then(() => {
        console.log("Conectado ao MongoDB")
    })

app.get("/todos", async (req, res) => {
    try {
        const getTodos = await Todos.find()
        res.json(getTodos)
    } catch (err) {
        console.log(err)
    }
})

app.listen("8085", () => {
    console.log("Estamos rodando!")
})