<script lang="ts">
import { collapsed, toggleSidebar, sidebarWidth} from './state'
import SidebarLink from './SidebarLink.vue'
export default {
    name: "Sidebar",
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>
<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <span class="collapse-icon">
            <img src="@/assets/shared/icon-close.svg" alt="logo" @click="toggleSidebar" style="cursor: pointer">
        </span>

        <div class="links">
            <SidebarLink to="/"><b>00</b><span>HOME</span></SidebarLink>
            <SidebarLink to="/destination"><b>01</b>DESTINATION</SidebarLink>
            <SidebarLink to="/crew"><b>02</b>CREW</SidebarLink>
            <SidebarLink to="/technology"><b>03</b>TECHNOLOGY</SidebarLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);

    float: left;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    user-select: none;

    transition:  0.3s ease;
    display: flex;
    flex-direction: column;
}
.collapse-icon {
    margin-top: 2.25em;
    text-align: end;
    padding-right: 1.5em;
}
.links {
    margin-top: 2em;
}
</style>