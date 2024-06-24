<script setup>
import AppItem from './components/AppItem.vue';

import appItems from '@/assets/apps.json';
import todoPng from '@/assets/images/todo.png'

console.log('todoPng=', todoPng)

</script>

<template>
  <s-page id="app" theme="auto">
    <s-top-app-bar>
      <!--标题-->
      <div slot="headline">Apps Only</div>
      <!--右侧操作按钮-->
      <s-icon-button slot="action">
        <s-icon type="search"></s-icon>
      </s-icon-button>
    </s-top-app-bar>
    <AppItem v-for="(item, index) in appItems" :appItem="item" :index="index"></AppItem>
  </s-page>
</template>

<style scoped>
body,
s-page {
  margin: 0;
  padding: 0;
}

s-top-app-bar {
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
}

.container {
  display: flex;
  height: 480px;
}

.column {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
}
</style>
