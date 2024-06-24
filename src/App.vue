<script setup>
import AppItem from './components/AppItem.vue';

import appItems from '@/assets/apps.json';

function openUrl(url) {
  window.open(url, '_blank')
}

</script>

<template>

  <head>
    <link rel="icon" href="/favicon.ico">
  </head>

  <body>
    <s-page id="app" theme="auto">
      <s-top-app-bar>

        <s-icon-button slot="navigation">
          <s-icon>
            <svg t="1719235779585" class="icon" viewBox="0 0 1279 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="28921" width="200" height="200">
              <path
                d="M1037.14636 242.803063l223.988416 223.988415c24.998707 24.998707 24.998707 65.396618 0 90.395325l-223.988416 223.988416c-24.998707 24.998707-65.396618 24.998707-90.395325 0s-24.998707-65.396618 0-90.395325l178.590764-178.790753-178.590764-178.790754c-24.998707-24.998707-24.998707-65.396618 0-90.395324s65.396618-24.998707 90.395325 0z m-703.963592 90.395324L154.49201 511.989141l178.690758 178.790753c24.998707 24.998707 24.998707 65.396618 0 90.395325s-65.396618 24.998707-90.395325 0L18.743031 557.186803c-24.990708-24.998707-24.990708-65.396618 0-90.395325l224.044412-223.988415c24.998707-24.998707 65.396618-24.998707 90.395325 0s24.998707 65.396618 0 90.395324z"
                p-id="28922"></path>
              <path
                d="M829.557096 81.5914l-255.98676 895.973662c-9.799493 33.998242-45.197662 53.597228-79.195904 43.997724-33.998242-9.799493-53.597228-45.197662-43.997725-79.195904l255.986761-895.933663c9.799493-33.986242 45.197662-53.665225 79.195904-43.953727 33.998242 9.709498 53.597228 45.133666 43.997724 79.111908z"
                opacity=".4" p-id="28923"></path>
            </svg>
          </s-icon>
        </s-icon-button>

        <!--标题-->
        <div slot="headline" style="font-weight: bold;">Apps Only</div>
        <!--右侧操作按钮-->

        <s-icon-button slot="action">
          <s-icon>
            <svg t="1719235052681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="18061" width="200" height="200">
              <path
                d="M928 128h-32l-46.24-92.5C838.8 13.75 816.8 0 792.6 0H231.6C207.26 0 185.26 13.75 174.26 35.5L128 128H96C78.25 128 64 142.26 64 160v64c0 17.8 14.25 32 32 32h832c17.8 0 32-14.2 32-32V160c0-17.74-14.2-32-32-32zM202.64 832h618.8l26.66-320H174.2l28.44 320z"
                p-id="18062"></path>
              <path
                d="M213.76 965.2c2.74 33.4 30.5 58.8 63.84 58.8h469c33.24 0 61-25.5 63.76-58.76L821.4 832H202.64l11.12 133.2zM154.66 256l21.32 256h672l21.32-256H154.66z"
                opacity=".4" p-id="18063"></path>
            </svg>
          </s-icon>
        </s-icon-button>
        <s-icon-button slot="action" @click="openUrl('https://boybeak.github.io/')">
          <s-icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>newspaper</title>
              <path
                d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" />
            </svg>
          </s-icon>
        </s-icon-button>
        <s-icon-button slot="action" @click="openUrl('https://github.com/boybeak')">
          <s-icon>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </s-icon>
        </s-icon-button>
      </s-top-app-bar>
      <AppItem v-for="(item, index) in appItems" :appItem="item" :index="index"></AppItem>
    </s-page>
  </body>
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
    radial-gradient(circle at 75% 30%, rgb(135, 206, 250), rgba(135, 206, 250, 0.1), transparent),
    radial-gradient(circle at 25% 50%, rgb(143, 188, 143), rgba(143, 188, 143, 0.1), transparent),
    radial-gradient(circle at 75% 80%, rgb(222, 184, 135), rgb(222, 184, 135, 0.1), transparent);
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
