<script lang="ts">
import SideBar from '@/components/sidebar/Sidebar.vue'
import Header from '@/components/Header.vue'
import { sidebarWidth } from '@/components/sidebar/state'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  components: { Header, SideBar },
  setup() {
    let mobileView = ref(true)
    onMounted(() => {
      mobileView.value = window.innerWidth <= 768
      window.addEventListener('resize', () => {
        mobileView.value = window.innerWidth <= 768
      })
    })
    return {sidebarWidth, mobileView}
  },
}
</script>

<template>
  <Header :mobileView="mobileView" />
  <SideBar v-if="mobileView"/>
  <main :style="{ 'margin-right': sidebarWidth }">
    <router-view />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
