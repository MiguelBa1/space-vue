<template>
  <div class="destination">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Destination extends Vue {}
</script>

<style lang="scss" scoped>
  .destination {
      height: 100vh;
      background-image: url("../assets/destination/background-destination-tablet.jpg");
      background-repeat: no-repeat;
      background-size: contain;
  }
</style>