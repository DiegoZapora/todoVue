<template>
    <button :type="tipoBtn">{{ btnText }}</button>
</template>

<script setup>

const props = defineProps({
    tipoBtn: String,
    btnText: String
})

</script>