<script lang="ts">
import SideBar from '@/components/sidebar/Sidebar.vue'
export default {
  components: { SideBar }
}
</script>
<template>
  <SideBar />
  <!-- <header>
    <div class="img-container">
      <img src="./assets/shared/logo.svg" alt="logo">
    </div>
    <nav>
      <router-link to="/"><span>HOME</span></router-link>
      <router-link to="/destination"><span>DESTINATION</span></router-link>
      <router-link to="/crew"><span>CREW</span></router-link>
      <router-link to="/technology"><span>TECHNOLOGY</span></router-link>
    </nav>
  </header> -->
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: absolute;
//   width: 100vw;
//   img {
//     max-height: fit-content;
//     max-height: fit-content;
//   }
//   height: 8rem;
//   // border: 1px solid red;
// }

// nav {
//   width: 60%;
//   font-family: 'Barlow Condensed', sans-serif;

//   a {
//     font-weight: bold;
//     color: #FFFF;
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//     height: 100%;
//     letter-spacing: 2.7;
//   }

//   a.router-link-exact-active {
//     border-bottom: 2px solid white;
//   }

//   height: 100%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background: rgba($color: #FFFF, $alpha: 0.1);
//   backdrop-filter: blur(10px);
// }

// .img-container {
//   display: flex;
//   align-items: center;
//   img {
//     padding-left: 2rem;
//   }
// }
</style>
