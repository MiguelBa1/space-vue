<template>
  <nav>
    <router-link to="/"><span class="num">00</span> <span>HOME</span></router-link>
    <router-link to="/destination"><span class="num">01</span> <span>DESTINATION</span></router-link>
    <router-link to="/crew"><span class="num">02</span> <span>CREW</span></router-link>
    <router-link to="/technology"><span class="num">03</span> <span>TECHNOLOGY</span></router-link>
  </nav>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">

nav {
  width: 55%;
  font-family: 'Barlow Condensed', sans-serif;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba($color: #FFFF, $alpha: 0.1);
  backdrop-filter: blur(10px);

  a {
    color: #FFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
    letter-spacing: 2.7;

    // transition: border-bottom .01s ease;
    &:hover {
      border-bottom: 2px solid rgba($color: #FFFF, $alpha: 0.5);
      margin-bottom: -2px;
    }
  }

  a.router-link-exact-active {
    border-bottom: 2px solid white;
    &:hover {
      margin-bottom: 0px;
    }
  }

}

.num {
  display: none;
}

.img-container {
  display: flex;
  align-items: center;
  img {
    padding-left: 2rem;
  }
}

@media only screen and (min-width: 1024px) {
  nav {
    padding-right: 10.3em;
    padding-left: 5em;
  }
  .num {
    display: inline;
    margin-right: 10px;
    font-weight: bold;
  }
}
</style>