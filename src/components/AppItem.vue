<script setup>
import AppInfo from './AppInfo.vue';
import { ref } from 'vue';
defineProps(['appItem', 'index'])

const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

const color1 = ref('red');
const color2 = ref('#1e90ff');

const getBackgroundStyle = (item) => {
  return {
    background: `radial-gradient(circle, ${item.background}, transparent)`
  };
};
</script>

<template>
    <!-- :style="{backgroundColor: appItem.background}" -->
    <!-- :style="index % 2 == 1 ? getBackgroundStyle(appItem) : null" -->
<div class="app-view">
    <div class="app-view-column">
        <AppInfo v-if="index % 2 == 0" :appItem="appItem"></AppInfo>
        <img v-else class="app-view-preview" :src="getImageUrl(appItem.preview)"></img>
    </div>
    <div class="app-view-column">
        <AppInfo v-if="index % 2 == 1" :appItem="appItem"></AppInfo>
        <img v-else class="app-view-preview" :src="getImageUrl(appItem.preview)"></img>
    </div>
</div>
<div style="height: 96px;"></div>
</template>

<style scoped>
.app-view {
    display: flex;
}
.app-view-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 8px;
}
.app-view-preview {
    max-height: 400px;
}
@media (max-width: 800px) {
  .app-view {
    flex-direction: column;
  }
}
</style>