<template>
    <div class="space-y-2">
        <TodoItem />
    </div>
    <TodoEmpty />
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import TodoEmpty from "./TodoEmpty.vue"

</script>