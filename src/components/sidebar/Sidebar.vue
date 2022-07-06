<script lang="ts">
import { collapsed, toggleSidebar, sidebarWidth} from './state'

export default {
    name: "Sidebar",
    props: {},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>
<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <span
            class="collapse-icon"
            @click="toggleSidebar"
        >
            <img src="@/assets/shared/icon-close.svg" alt="logo">
        </span>
    </div>
</template>

<style scoped>
.sidebar {
    /* outline: 1px solid red; */
    color: white;
    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 1em;

    transition:  0.3s ease;
    display: flex;
    flex-direction: column;
}
</style>