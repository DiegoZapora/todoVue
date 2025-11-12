<template>
    <input :type="tipo" :name="Fname" :id="Fid" :placeholder="Fplaceholder" />
</template>

<script  setup>

const props = defineProps({
    tipo: String,
    Fname: String,
    Fid: String || Number,
    Fplaceholder: String
})

</script>