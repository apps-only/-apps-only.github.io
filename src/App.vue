<script setup>
import AppItem from './components/AppItem.vue';

import appItems from '@/assets/apps.json';

</script>

<template>
  <s-page id="app" theme="auto">
    <s-top-app-bar>
      <!--标题-->
      <div slot="headline" style="font-weight: bold;">Apps Only</div>
      <!--右侧操作按钮-->
      <s-icon-button slot="action">
        <s-icon >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
          </svg>
        </s-icon>
      </s-icon-button>
    </s-top-app-bar>
    <AppItem v-for="(item, index) in appItems" :appItem="item" :index="index"></AppItem>
  </s-page>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
s-page {
  margin: 0;
  padding: 0;
  background: 
  radial-gradient(circle at 75% 30%, lightskyblue, transparent),
  radial-gradient(circle at 25% 50%, darkseagreen, transparent),
  radial-gradient(circle at 75% 80%, burlywood, transparent);
}

s-top-app-bar {
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  background: null;
  background-color: transparent;
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
