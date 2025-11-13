<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoForm />
      <TodoItems />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTodos } from "./store/TodoStore"
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';

const todosStore = useTodos()

onMounted(() => {
  todosStore.fetchTodos()
})

</script>