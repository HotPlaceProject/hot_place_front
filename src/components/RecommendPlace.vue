<script setup lang="ts">
import RecommendPlaceItem from './RecommendPlaceItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <RecommendPlaceItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Reco Place1</template>
  </RecommendPlaceItem>

  <RecommendPlaceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Reco Place2</template>
  </RecommendPlaceItem>

  <RecommendPlaceItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Reco Place3</template>
  </RecommendPlaceItem>

</template>
