<script setup>
const selectedZone = ref(null);

const zones = ref([
  { id: 1, name: "Zone 1", path: "M100,100 L200,100 L200,200 L100,200 Z", color: "#ccc" },
  { id: 2, name: "Zone 2", path: "M200,100 L300,100 L300,200 L200,200 Z", color: "#bbb" },
]);

const handleMouseEnter = (zone) => {
  zone.color = "orange";
};

const handleMouseLeave = (zone) => {
  zone.color = zone.id === selectedZone.value ? "red" : "#ccc";
};

const handleClick = (zone) => {
  selectedZone.value = zone.id;
  zones.value.forEach(z => {
    z.color = z.id === zone.id ? "red" : "#ccc";
  });
};
</script>

<template>
  <div class="map-container">
    <svg viewBox="0 0 800 600" width="100%" height="auto">
      <path
        v-for="zone in zones"
        :key="zone.id"
        :d="zone.path"
        :fill="zone.color"
        stroke="#333"
        stroke-width="2"
        @mouseenter="handleMouseEnter(zone)"
        @mouseleave="handleMouseLeave(zone)"
        @click="handleClick(zone)"
        class="zone"
      />
    </svg>
    <p v-if="selectedZone" class="info-text">Selected: Zone {{ selectedZone }}</p>
  </div>
</template>

<style scoped>
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: auto;
}

.zone {
  cursor: pointer;
  transition: fill 0.3s ease-in-out;
}

.info-text {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
