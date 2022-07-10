<template>
  <div class="crew">
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
.crew {
  padding-top: 7em;
  color: white;
  height: 100vh;
  height: -webkit-fill-available;
  background-image: url("../assets/crew/background-crew-mobile.jpg");
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: center;
}
@media only screen and (min-width: 768px) {
  .crew{
    background-image: url("../assets/crew/background-crew-tablet.jpg");
  }
}
@media only screen and (min-width: 1024px) {
  .crew{
    background-image: url("../assets/crew/background-crew-desktop.jpg");
  }
}
</style>