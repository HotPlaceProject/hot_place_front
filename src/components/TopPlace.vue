<script setup lang="ts">
import TopPlaceItem from './TopPlaceItem.vue'

const sectionTitles = {
  crowded: '현재 서울에서 가장 혼잡한 곳',
  increased: '최근 1시간 동안 인구가 가장 많이 급증한 곳'
}

const currentCrowdedPlaces = [
  {
    type: '인구밀집지역',
    location: '서울역',
    density: '약간 붐빔',
    count: '30천명~28천명',
    gender: '남성 60%',
    age: '2030 45%'
  },
  {
    type: '인구밀집지역',
    location: '종정로역',
    density: '약간 붐빔',
    count: '20천명~18천명',
    gender: '여성 55%',
    age: '4050 52%'
  },
  {
    type: '인구밀집지역',
    location: '역삼역',
    density: '약간 붐빔',
    count: '38천명~36천명',
    gender: '남성 65%',
    age: '2030 62%'
  }
]

const recentIncreasedPlaces = [
  {
    type: '관광특구',
    location: '홍대 관광특구',
    density: '보통',
    count: '30천명~28천명',
    gender: '여성 58%',
    age: '2030 70%'
  },
  {
    type: '발달상권',
    location: '창동 신경제 중심지',
    density: '보통',
    count: '20천명~18천명',
    gender: '남성 52%',
    age: '4050 48%'
  },
  {
    type: '인구밀집지역',
    location: '오목교역 목동운동장',
    density: '여유',
    count: '38천명~36천명',
    gender: '여성 51%',
    age: '전연령'
  }
]
</script>

<template>
  <div>
    <!-- todo: 여기로 nav bar 옮겨주셈 -->
  </div>

  <div class="top-place-container">
    <div class="section">
      <h2>{{ sectionTitles.crowded }}</h2>
      <div class="places-grid">
        <TopPlaceItem v-for="(place, index) in currentCrowdedPlaces" :key="index">
          <template #heading>{{ place.type }}</template>
          <template #description>{{ place.location }}</template>
          <template #density>{{ place.density }}</template>
          <template #reason>실시간 인구: {{ place.count }}</template>
          <template #gender>{{ place.gender }}</template>
          <template #age>{{ place.age }}</template>
        </TopPlaceItem>
      </div>
    </div>

    <div class="section">
      <h2>{{ sectionTitles.increased }}</h2>
      <div class="places-grid">
        <TopPlaceItem v-for="(place, index) in recentIncreasedPlaces" :key="index">
          <template #heading>{{ place.type }}</template>
          <template #description>{{ place.location }}</template>
          <template #density>{{ place.density }}</template>
          <template #reason>실시간 인구: {{ place.count }}</template>
          <template #gender>{{ place.gender }}</template>
          <template #age>{{ place.age }}</template>
        </TopPlaceItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-place-container {
  padding: 1rem;
}

.section {
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
}

.places-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 768px) {
  .places-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .places-grid {
    grid-template-columns: 1fr;
  }
}
</style>
