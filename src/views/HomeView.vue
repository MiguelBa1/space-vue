<template>
  <div class="home">
    <div class="content">
      <div class="text">
        <h5 class="subtitle">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 class="title">SPACE</h1>
        <p class="welcome-msg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <router-link to="/destination/" class="explore">
        EXPLORE
        <div class="circle"></div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");

.home {
  color: white;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  width: 100vw;
  // min-width: -webkit-fill-available;
  background-image: url("../assets/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.content {
  // border: 1px solid red;
  flex: 2;
  padding-top: 7em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.subtitle {
  color: #d0d6f9;
  margin-top: 0.5em;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
}

.title {
  margin-top: 0.25em;
  font-family: "Bellefair", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 100px;
}

.welcome-msg {
  color: #d0d6f9;
  margin-top: 1em;
  padding: 0 3em;
  font-family: "Barlow", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
}
.explore {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;

  margin: auto;
  height: 150px;
  width: 150px;
  background: white;
  border-radius: 100%;

  color: #0b0d17;
  font-family: "Bellefair";
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 1.25px;
  position: relative;

  box-shadow: 1px 1px 20px black;
  transition: all 0.1s ease-in;

  &:hover {
    box-shadow: 1px 1px 20px black;
  }
}

@media only screen and (min-width: 768px) {
  .home {
    background-image: url("../assets/home/background-home-tablet.jpg");
  }
  .content {
    padding-top: 14em;
  }
  .subtitle {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .title {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 150px;
  }
  .welcome-msg {
    padding: 0 12em;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .explore {
    width: 242px;
    height: 242px;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2x;
  }
}

@media only screen and (min-width: 1024px) {
  .home {
    background-image: url("../assets/home/background-home-desktop.jpg");
  }
  .content {
    margin: auto;
    width: 80%;
    padding-top: 12em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .text {
    height: 50%;
    display: grid;
    align-self: center;
    text-align: start;
    width: 40em;
  }
  .subtitle {
    margin: 0;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
  }
  .title {
    margin: 0;
    font-size: 150px;
    line-height: 172px;
  }
  .welcome-msg {
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 32px;
  }
  .explore {
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    width: 274px;
    height: 274px;
  }
  .circle {
    background: white;
    position: absolute;
    border-radius: 100%;
    opacity: 0;
    width: 274px;
    height: 274px;
    transition: opacity 0.1s ease-in;
    // transition: height .5s ease-in;
    &:hover {
      left: -22.5%;
      width: 400px;
      height: 400px;
      opacity: 0.1;
    }
  }
}
</style>
