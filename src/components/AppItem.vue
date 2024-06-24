<script setup>
import AppInfo from './AppInfo.vue';
defineProps(['appItem', 'index'])

</script>

<template>
<div class="app-view" :style="{backgroundColor: appItem.background}">
    <div class="app-view-column">
        <AppInfo v-if="index % 2 == 0" :appItem="appItem"></AppInfo>
        <img v-else class="app-view-preview" :src="appItem.preview"></img>
    </div>
    <div class="app-view-column">
        <AppInfo v-if="index % 2 == 1" :appItem="appItem"></AppInfo>
        <img v-else class="app-view-preview" :src="appItem.preview"></img>
    </div>
</div>
</template>

<style scoped>
.app-view {
    display: flex;
    height: 480px;
}
.app-view-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
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