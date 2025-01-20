<script setup lang="ts">
import RecommendPlaceItem from './RecommendPlaceItem.vue'

const sectionTitle = '추천 핫플레이스'

const recommendPlaces = [
  {
    type: '인구밀집지역',
    location: '서울역',
    imageUrl: 'https://picsum.photos/id/1016/600/400',
    imageAlt: 'Image of Reco Place1',
    gender: '남성',
    age: '40대',
    density: '붐빔'
  },
  {
    type: '인구밀집지역',
    location: '충정로역',
    imageUrl: 'https://picsum.photos/id/1020/600/400',
    imageAlt: 'Image of Reco Place2',
    gender: '남성',
    age: '50대',
    density: '보통'
  },
  {
    type: '인구밀집지역',
    location: '선릉역',
    imageUrl: 'https://picsum.photos/id/1033/600/400',
    imageAlt: 'Image of Reco Place3',
    gender: '여성',
    age: '30대',
    density: '여유'
  },
  {
    type: '발달상권',
    location: 'DMC(디지털미디어시티)',
    imageUrl: 'https://picsum.photos/id/1037/600/400',
    imageAlt: 'Image of Reco Place4',
    gender: '남성',
    age: '30대',
    density: '약간 붐빔'
  },
  {
    type: '인구밀집지역',
    location: '역삼역',
    imageUrl: 'https://picsum.photos/id/1050/600/400',
    imageAlt: 'Image of Reco Place5',
    gender: '남성',
    age: '10대',
    density: '약간 붐빔'
  }
]
</script>

<template>
  <div>
    <!-- todo: 여기로 nav bar 옮겨주셈 -->
  </div>

  <div class="recommend-place-container">
    <div class="section">
      <h2>{{ sectionTitle }}</h2>
      <div class="places-grid">
        <RecommendPlaceItem v-for="(place, index) in recommendPlaces" :key="index">
          <template #heading>{{ place.type }}</template>
          <template #description>{{ place.location }}</template>
          <template #image>
            <img
              :src="place.imageUrl"
              :alt="place.imageAlt"
            />
          </template>
          <template #gender>{{ place.gender }}</template>
          <template #age>{{ place.age }}</template>
          <template #density>{{ place.density }}</template>
        </RecommendPlaceItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommend-place-container {
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
