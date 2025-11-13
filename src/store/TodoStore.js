import { defineStore } from "pinia";

export const useTodos = defineStore('main', {
    state: () => ({
        todos: [],
        loading: false,
        error: null
    }),

    actions: {
        async fetchTodos() {
            this.loading = true
            this.error = null

            try {
                const res = await fetch("http://localhost:8085/todos")

                if (!res.ok) {
                    throw new Error("Filha ao buscar To Do")
                }

                const data = await res.json()

                this.todos = data

            } catch (e) {
                this.error = e.message
            } finally {
                setTimeout(() => {
                    this.loadingTimer()
                }, 2000);
            }
        },

        async addTodo(newTodoData) {
            this.loading = true
            this.error = null

            try {
                const res = await fetch("http://localhost:8085/todos/add", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newTodoData)
                })

                if (!res.ok) {
                    throw new Error("Filha ao criar Todo")
                }

                const todoCriada = await res.json()

                this.todos.push(todoCriada)

            } catch (e) {
                this.error = e.message
                throw e
            } finally {
                this.loadingTimer()
            }
        },

        async deleteTarefa(id) {
            try {
                const res = await fetch(`http://localhost:8085/todos/${id}`, {
                    method: "DELETE"
                })

                this.todos = this.todos.filter(todo => todo._id != id)
            } catch(err) {
                console.log(err)
            }
        },

        loadingTimer() {
            setTimeout(() => {
                this.loading = false
            }, 1)
        }
    }
})