<template>
    <button v-bind="$attrs">{{ btnText }}</button>
</template>

<script setup>

const props = defineProps({
    btnText: String
})

</script>