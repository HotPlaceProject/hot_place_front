<script setup lang="ts">
import TopPlaceItem from './TopPlaceItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <TopPlaceItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Top Place1</template>
  </TopPlaceItem>

  <TopPlaceItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Top Place2</template>
  </TopPlaceItem>

  <TopPlaceItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Top Place3</template>
  </TopPlaceItem>

</template>
