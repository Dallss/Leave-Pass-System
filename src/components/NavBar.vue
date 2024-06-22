<script setup>
defineProps({
  links: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav class="nav">
    <div v-for="link in links" :key="link.id" class="nav-link active">
      <a href="link.url">{{ link.name }}</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: rgba(9, 46, 72, 1);
}
a {
  color: white;
  text-decoration: none;
}
</style>
