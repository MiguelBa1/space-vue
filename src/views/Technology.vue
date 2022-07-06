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

<style lang="scss">
.technology {
    height: 100vh;
    background-image: url("../assets/technology/background-technology-tablet.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}
</style>