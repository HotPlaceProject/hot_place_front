<script setup lang="ts">
import { ref } from 'vue'
// import seoulMap from '../assets/seoulMap.svg'
import seoulMap from '../assets/seoulMap.svg'

const selectedZone = ref<string | null>(null)
const hoverZone = ref<string | null>(null)

const handleZoneClick = (event: MouseEvent) => {
  const target = event.target as SVGPathElement
  if (target.tagName === 'path') {
    selectedZone.value = target.id || null
  }
}

const handleZoneHover = (event: MouseEvent) => {
  const target = event.target as SVGPathElement
  if (target.tagName === 'path') {
    hoverZone.value = target.id || null
  }
}

const handleZoneLeave = () => {
  hoverZone.value = null
}
</script>

<template>
  <div class="map-container">
    <seoulMap 
      class="seoul-map"
      @click="handleZoneClick"
      @mouseover="handleZoneHover"
      @mouseleave="handleZoneLeave"
    />
    <p class="selected-text">선택한 지역: <strong>{{ selectedZone || '없음' }}</strong></p>
  </div>
</template>

<style scoped>
.map-container {
  text-align: center;
  width: 100%;
}
.seoul-map {
  width: 90%;
  max-width: 800px;
  height: auto;
}
:deep(path) {
  cursor: pointer;
  transition: fill 0.3s ease;
  fill: #D3D3D3;
  stroke: #333;
  stroke-width: 1;
}
:deep(path[id]:hover), :deep(path[id].hover) {
  fill: #3498db !important;
}
:deep(path[id].selected) {
  fill: #E74C3C !important;
}
.selected-text {
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}
</style>
