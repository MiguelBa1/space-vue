<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/shared/logo.svg" alt="logo">
        </div>
        <span class="line"></span>
        <div class="nav-btn" @click="toggleSidebar" v-if="collapsed && mobileView">
            <img src="@/assets/shared/icon-hamburger.svg" alt="logo">
        </div>
        <Navigation v-if="!mobileView" />
    </div>
</template>

<script lang="ts">
import {collapsed, toggleSidebar } from './sidebar/state'
import Navigation from '@/components/Navigation.vue'

export default {
    name: "Header",
    components: { Navigation },
    props: {
        mobileView: Boolean
    },
    setup() {
        return { toggleSidebar, collapsed }
    }
}
</script>

<style lang="scss">
.header {
    user-select: none;
    position: absolute;
    z-index: 50;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    // padding: 1.5em 1.5em;
    div {
        align-self: center;
    }
}
.line {
    display: none;
}
.logo {
    padding: 1.5em 2.5em;
}

.nav-btn {
    cursor: pointer;
    padding: 1.5em 1.5em;
}

@media only screen and (min-width: 1024px) {
    .header {
        padding-top: 4em;
    }
    .logo {
        // padding-top: 0;
        padding-left: 3.4em;
    }
    .line {
        z-index: 50;
        position: absolute;
        align-self: center;
        left: 10em;
        display: inline;
        width: 37%;
        max-width: 40%;
        height: 1.1px;
        background: white;
        opacity: 0.5;
    }
}
</style>