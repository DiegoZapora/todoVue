<template>
    <form class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-1-2 border-green-400 mb-3">
        <InputForm tipo="text" -fname="newitem" -fid="newitem" -fplaceholder="Adicione uma nova tarefa"
            class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3" />
        <Buttom tipo-btn="submit" btn-text="Adicionar"
            class="text-green-400 text-xs font-semibold focus:outline-none cursor-pointer" />
    </form>
</template>

<script setup>
import InputForm from './Form/InputForm.vue';
import Buttom from './Form/Buttom.vue';

</script>