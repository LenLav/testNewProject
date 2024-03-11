<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from "@/views/testPage/components/child.vue"


const posts = ref([
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ])

function selectedPost(post: {id: number, title:string}) {
  console.log(post)
}      

</script>

<template lang="pug">
div    
  h6 test page
  ChildComponent(v-for="post in posts" :post="post" @selected="selectedPost")


</template>

<style scoped>

</style>
