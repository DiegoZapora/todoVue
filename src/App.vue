<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <Spinner />
      <TodoForm />
      <TodoItems />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Spinner from './components/TodoSpinner.vue';
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';

let todos = []

const getTodos = async () => {
  try {
    const res = await fetch("http://localhost:8085/todos")
    const data = await res.json()

    todos = data

  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getTodos()
})

</script>