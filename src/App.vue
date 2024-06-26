<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import MyHeader from './components/MyHeader.vue'
import NavBar from './components/NavBar.vue'

import LandingView from './views/LandingView.vue'

const links = ref([])
console.log(links)
</script>

<template>
  <MyHeader></MyHeader>
  <NavBar :links="links"></NavBar>

  <div class="content">
    <RouterView />
  </div>
</template>

<style>
body {
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: rgba(235, 232, 232);
}
</style>
