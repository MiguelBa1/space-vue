<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/shared/logo.svg" alt="logo">
        </div>
        <div class="nav-btn" @click="toggleSidebar" v-if="collapsed">
            <img src="@/assets/shared/icon-hamburger.svg" alt="logo">
        </div>
    </div>
</template>

<script lang="ts">
import {collapsed, toggleSidebar } from './sidebar/state'
export default {
    name: "Header",
    setup() {
        return { toggleSidebar, collapsed }
    }
}
</script>

<style lang="scss">
.header {
    position: absolute;
    z-index: 50;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    padding: 1.5em 1.5em;
    div {
        align-self: center;
    }
}
.nav-btn {
    cursor: pointer;
}
</style>