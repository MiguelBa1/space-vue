<template>
  <div class="crew">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Crew extends Vue {}
</script>

<style lang="scss">
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
</style>