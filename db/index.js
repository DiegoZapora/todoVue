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


app.post("/todos/add", async (req, res) => {
    try {
        const novoTodo = new Todos(req.body)
        const todoSava = await novoTodo.save()
        res.json(todoSava)
    } catch (err) {
        console.log(err)
    }
})

app.get("/todos", async (req, res) => {
    try {
        const getTodos = await Todos.find()
        res.json(getTodos)
    } catch (err) {
        console.log(err)
    }
}),

    app.delete("/todos/:id", async (req, res) => {
        try {
            const id = req.params.id
            const todoDeletada = await Todos.findByIdAndDelete(id)
            res.json()
        } catch (err) {
            console.log(err)
        }
    }),

    app.patch("/todos/feitas/:id", async (req, res) => {
        try {
            const id = req.params.id
            const novoCompleted = req.body.completed

            const todoFeita = await Todos.findByIdAndUpdate(
                id,
                {completed: novoCompleted},
                { new: true, runValidators: true }
            )

            res.json(todoFeita)

        } catch (err) {
            console.log(err)
        }
    })

app.listen("8085", () => {
    console.log("Estamos rodando!")
})