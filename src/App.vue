<script setup>
import { ref } from 'vue'
import MyHeader from './components/MyHeader.vue'
import NavBar from './components/NavBar.vue'

const links = ref([
  { id: 1, name: 'Home', url: 'https://www.google.com' },
  { id: 2, name: 'Link', url: 'https://www.facebook.com' },
  { id: 3, name: 'Twitter', url: 'https://www.twitter.com' }
])
console.log(links)
</script>

<template>
  <MyHeader></MyHeader>
  <NavBar :links="links"></NavBar>
  <div class="content"></div>
</template>

<style>
.content {
  background-color: rgba(235, 232, 232, 1);
}
body {
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
