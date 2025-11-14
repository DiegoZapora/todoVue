<template>
    <form class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-1-2 border-green-400 mb-3"
        @submit.prevent="handleSubmit">
        <InputForm v-model="newTodoTitle" type="text" name="newtitle" id="newtitle" placeholder="Digite um nova tarefa" autocomplete="off"
            class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3" />
        <Buttom type="submit" btn-text="Adicionar"
            class="text-green-400 text-xs font-semibold focus:outline-none cursor-pointer" :disable="store.loading" />
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTodos } from '../store/TodoStore';
import InputForm from './Form/InputForm.vue';
import Buttom from './Form/Buttom.vue';

const store = useTodos()
const submitError = ref(null)

const newTodoTitle = ref("")

const handleSubmit = async () => {
    submitError.value = null

    const todoData = {
        title: newTodoTitle.value
    }

    if (!newTodoTitle.value) {
        alert("ADICIONE UMA TAREFA VALIDA!")
        return
    } else {
        try {
            await store.addTodo(todoData)

            newTodoTitle.value = ""

        } catch (err) {
            submitError.value = `Erro ao savar ${err.message}`
        }
    }
}

</script>