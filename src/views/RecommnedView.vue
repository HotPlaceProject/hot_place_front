<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
import RecommendPlace from '../components/RecommendPlace.vue'
</script>

<template>
  <main>
    <RecommendPlace />
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
