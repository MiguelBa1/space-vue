<template>
  <div class="technology">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Technology extends Vue {}
</script>

<style lang="scss" scoped>
.technology {
  padding-top: 7em;
  color: white;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-image: url("../assets/technology/background-technology-mobile.jpg");
  min-width: 100vw;
  min-width: -webkit-fill-available;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: center;
}
@media only screen and (min-width: 768px) {
  .technology{
    background-image: url("../assets/technology/background-technology-tablet.jpg");
  }
}
@media only screen and (min-width: 1024px) {
  .technology{
    background-image: url("../assets/technology/background-technology-desktop.jpg");
  }
}
</style>