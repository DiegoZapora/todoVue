import mongoose from "mongoose";
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todos = mongoose.model("Todos", TodoSchema)

export {Todos}