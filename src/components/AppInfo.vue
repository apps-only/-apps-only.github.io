<script setup>
defineProps(['appItem'])
</script>

<template>
    <div class="app-container">
        <div style="display: flex; align-items: center;">
            <img class="app-logo" id="app-logo" :src="appItem.logo"></img>
            <div class="app-info-header">
                <div class="app-name" id="app-name">{{ appItem.name }}</div>
                <div class="app-developer" id="app-developer">{{ appItem.developer }}</div>
            </div>
        </div>
        <div class="app-description" id="app-description">
            <p>{{ appItem.description }}</p>
        </div>
        <div class="app-downloads"></div>
    </div>
</template>

<style scoped>
.app-container {
    display: grid;
    grid-template-areas: 
        "logo name"
        "logo developer"
        "logo ."
        "description description"
        "downloads downloads";
    grid-template-rows: auto auto auto 1fr auto;
    grid-template-columns: auto 1fr;
    max-width: 600px;
    margin: 0 auto;
    align-items: center; /* Ensures all items in the row are centered */
}
.app-logo {
    grid-area: logo;
    width: 72px;
    height: 72px;
    background-size: cover;
    background-position: center;
}
.app-info-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
}
.app-name {
    font-size: 1.5em;
    font-weight: bold;
}
.app-developer {
    font-size: 1em;
    margin-top: 4px;
}
.app-description {
    grid-area: description;
    font-size: 1em;
    line-height: 1.5em;
    padding: 10px;
    overflow: auto;
}
.app-downloads {
    grid-area: downloads;
    display: flex;
    padding-left: 8px;
    padding-right: 8px;
    gap: 10px;
}
.app-downloads div {
    flex: 1;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
}
</style>