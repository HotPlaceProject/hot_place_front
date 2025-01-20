<template>
  <div class="recommend-place-item">
    <!-- 상단 이미지 영역 -->
    <div class="image-container">
      <slot name="image"></slot>
    </div>

    <!-- 텍스트(heading, description, reason features 등) 영역 -->
    <div class="details">
      <div class="heading-density-container">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <div :class="['badge-slot', densityClass]">
          <slot name="density"></slot>
        </div>
      </div>
      <div class="description-features-container">
        <span class="hot-item-description">
          <slot name="description"></slot>
        </span>
        <div class="features">
          <div :class="['badge-slot', genderClass]">
            <slot name="gender"></slot>
          </div>
          <span>
            <slot name="age"></slot>
          </span>
        </div>
      </div>
      <span class="hot-item-reason">
        <slot name="reason"></slot>
      </span>
      <!-- 기본 슬롯(추가 텍스트 등) -->
      <slot></slot>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

const slots = useSlots();

const densityClass = computed(() => {
  const densityText = (slots.density && slots.density({})[0]?.children) || '';
  switch (densityText) {
    case '붐빔':
      return 'density-busy';
    case '약간 붐빔':
      return 'density-slightly-busy';
    case '보통':
      return 'density-normal';
    case '여유':
      return 'density-spare';
    default:
      return '';
  }
});

const genderClass = computed(() => {
  const genderText = (slots.gender && slots.gender({})[0]?.children) || '';
  if (genderText.includes('남성')) {
    return 'gender-male';
  } else if (genderText.includes('여성')) {
    return 'gender-female';
  } else {
    return '';
  }
});
</script>

<style scoped>
.recommend-place-item {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 8px; /* Reduce padding */
  margin: 8px; /* Add margin */
}

.image-container {
  width: 100%;
  height: 150px; /* Set a fixed height */
  overflow: hidden;
}

.image-container ::v-deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 2px; /* Reduce gap */
  padding: 8px; /* Reduce padding */
}

.heading-density-container {
  display: flex;
  justify-content: space-between; /* Align heading and badge horizontally */
  align-items: center; /* Vertically center the items */
}

.description-features-container {
  display: flex;
  justify-content: space-between; /* Align description and features horizontally */
  align-items: center; /* Vertically center the items */
}

/* 자식 RecommendPlaceItem.vue 안에서 */
.features {
  display: flex;       /* 가로나 열 형태, 원하는 대로 */
  flex-wrap: wrap;     /* 길면 다음 줄로 감싸기 */
  gap: 4px;            /* 태그 간 간격 */
  align-items: center;
}

.features span {
  background-color: #eee;  /* 태그 배경 */
  color: #333;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 500;
  display: inline-block;
}

.gender-male {
  background-color: #42a5f5; /* 남성 배경색 */
  color: #fff;
}

.gender-female {
  background-color: #ff6b6b; /* 여성 배경색 */
  color: #fff;
}

/* heading(인구밀집지역 등) */
.details h3 {
  font-size: 0.85rem; /* Reduce font size */
  font-weight: 600;
  margin: 0;
  color: #666;
}

/* description(예: 서울역 등) */
.hot-item-description {
  font-size: 0.75rem; /* Reduce font size */
  font-weight: 500;
  color: #222;
}

/* reason(추가 설명) */
.hot-item-reason {
  font-size: 0.65rem; /* Reduce font size */
  color: #555;
}

/* 아이콘 슬롯(좋아요/북마크 등)을 우측 하단에 배치 */
::v-deep(slot[name="features"]) {
  position: relative;
  margin-left: 8px; /* Add margin to separate from description */
}

/* 새로 추가한 badge 슬롯 스타일 */
.badge-slot {
  font-size: 0.65rem; /* Reduce font size */
  font-weight: 500;
  padding: 2px 4px; /* Reduce padding */
  border-radius: 4px;
}

/* Badge colors */
.density-busy {
  background-color: #ff6b6b; /* 붐빔 */
  color: #fff;
}

.density-slightly-busy {
  background-color: #ffa726; /* 약간 붐빔 */
  color: #fff;
}

.density-normal {
  background-color: #66bb6a; /* 보통 */
  color: #fff;
}

.density-spare {
  background-color: #42a5f5; /* 여유 */
  color: #fff;
}

/* 큰 화면에서 호버 효과 등 */
@media (min-width: 1024px) {
  .recommend-place-item {
    transition: transform 0.2s;
  }
  .recommend-place-item:hover {
    transform: translateY(-3px);
  }
}
</style>
