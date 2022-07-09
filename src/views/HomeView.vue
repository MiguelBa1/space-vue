<template>
  <div class="home">
    <div class="text">
      <h5 class="subtitle">SO, YOU WANT TO TRAVEL TO</h5>
      <h1 class="title">SPACE</h1>
      <p class="content">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on
        the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div class="explore">
      EXPLORE
      <div class="circle"></div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');

.home {
  color: white;
  padding-top: 7em;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: center;
}

.subtitle {
  color: #D0D6F9;
  margin-top: .5em;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
}

.title {
  margin-top: .25em;
  font-family: 'Bellefair', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 100px;
}

.content {
  color: #D0D6F9;
  margin-top: 1em;
  padding: 0 3em;
  font-family: 'Barlow', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
}
.explore {
  cursor: pointer;
  color: #0B0D17;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;

  margin: auto;
  height: 150px;
  width: 150px;
  background: white;
  border-radius: 100%;

  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 1.25px;
  position: relative;

  box-shadow: 1px 1px 20px black;
  transition: all .1s ease-in;

  &:hover {
    box-shadow: 1px 1px 20px black;
  }
}

@media only screen and (min-width: 768px) {
  .home {
    background-image: url("../assets/home/background-home-tablet.jpg");
    padding-top: 14em;
  }
  .subtitle {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .title {
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 150px;
  }
  .content {
    padding: 0 12em;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .explore {
    width: 242px;
    height: 242px;
  }
}

@media only screen and (min-width: 1024px) {
  .home {
    background-image: url("../assets/home/background-home-desktop.jpg");
    padding-top: 12em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    text-align: start;
    width: 40em;
    padding: 10em 0 ;
    padding-left: 10.25em;
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
  .content {
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
  .circle{
    background: white;
    position: absolute;
    border-radius: 100%;
    opacity: 0;
    width: 274px;
    height: 274px;
    transition: opacity .1s ease-in;
    // transition: height .5s ease-in;
    &:hover{
    left:-22.5%;
      width: 400px;
      height: 400px;
      opacity: 0.1;
    }
  }
}
</style>
