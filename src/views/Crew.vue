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
    height: 100vh;
    background-image: url("../assets/crew/background-crew-tablet.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}
</style>