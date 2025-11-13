<template>
    <input v-bind="$attrs" v-model="valorInterno" />
</template>

<script  setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

const valorInterno = computed({
    get() {
        return props.modelValue
    },

    set(novoValor) {
        emit('update:modelValue', novoValor)
    }
})

</script>