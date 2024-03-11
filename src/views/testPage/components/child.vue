<script setup lang="ts">

const post = defineModel<{id: number, title:string}>('post')
const emit = defineEmits(['selected'])

</script>

<template lang="pug">
q-card.q-ma-sm 
  q-card-section.flex.justify-between.items-center
    .text-body1 {{ post.id }}.
    .text-body1 {{ post.title }}
    q-btn(@click="emit('selected', post)" label="choose")

</template>

<style scoped>

</style>
