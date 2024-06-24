<script setup>
defineProps(['link'])
function openUrl(url) {
    window.open(url, '_blank')
}
</script>

<template>
    <s-ripple @click="openUrl(link.url)" id="container">
        <s-icon v-if="link.icon.includes('svg')" id='icon' v-html="link.icon">
        </s-icon>
        <s-icon v-else type="link.icon" id="icon"></s-icon>
        <div id='text'>{{ link.name }}</div>
    </s-ripple>
</template>

<style scoped>
#container {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid var(--s-color-on-surface);
    border-radius: 8px;
    font-size: 1.2em;
}
#icon {
    color: var(--s-color-on-surface);
}
#text {
    margin-left: 8px;
    font-weight: bold;
}
</style>