<script setup lang="ts">
import TopPlace from '../components/TopPlace.vue'
</script>

<template>
  <main>
    <TopPlace />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f5f5f5;
}

@media (max-width: 1200px) {
  main {
    padding: 0.5rem;
  }
}
</style>
