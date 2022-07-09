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
  padding-top: 7em;
  color: white;
  height: 100vh;
  height: -webkit-fill-available;
  background-image: url("../assets/technology/background-technology-mobile.jpg");
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: center;
}
</style>