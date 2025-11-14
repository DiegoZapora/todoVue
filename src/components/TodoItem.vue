<template>
    <div class="w-full" v-if="todosStore.loading">
        <Spinner />
        <p class="text-white font-bold text-center">Carregando...</p>
    </div>
    <div v-else-if="todosStore.todos.length == 0">
        <TodoEmpty />
    </div>
    <div v-else class="bg-gray-300 rounded-sm">
        <div class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0"
            v-for="todo in todosStore.todos">
            <div class="flex items-center justify-center mr-2">
                <button class="text-gray-400 cursor-pointer">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </button>
            </div>

            <div v-if="todosStore.error">
                Erro: {{ todosStore.error }}
            </div>

            <div class="w-full" v-else>
                <p>{{ todo.title }}</p>
                <p>{{ todo.completed }}</p>
            </div>
            <div class="ml-auto flex items-center justify-center">
                <button class="focus:outline-none cursor-pointer" @click="todoDelete(todo._id)">
                    <svg class="ml-3 h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L18.1327 19.1425C18.0579 
20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 
19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 
3 9 3.44772 9 4V7M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTodos } from '../store/TodoStore';
import Spinner from './TodoSpinner.vue';
import TodoEmpty from "./TodoEmpty.vue"

const todosStore = useTodos()



const todoDelete = (id) => {
    todosStore.deleteTarefa(id)
}

</script>