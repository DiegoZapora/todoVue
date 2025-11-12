import { defineStore } from "pinia";

const useTodos = defineStore('main', {
    state: () => {
        todos: [

        ]
    },
    
    actions: {
        storeTodos(status, payload) {
            status.todos = payload
        }
    }
})