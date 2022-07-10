<template>
  <div class="destination">
    <h5 class="pick-destination">
      <span style="font-weight: 700; opacity: 0.25">01</span> PICK YOUR
      DESTINATION
    </h5>
    <div class="content">
      <div class="planet">
        <img :src="planetImg" :alt="currentPlanet" />
      </div>
      <div class="planet-information">
        <div class="submenu">
          <div
            v-for="(name, index) in ['MOON', 'MARS', 'EUROPA', 'TITAN']"
            :key="index"
            @click="changePlanet(name)"
            :class="{ active: isActive(name) }"
          >
            {{ name }}
          </div>
        </div>
        <h1 class="planet-name">{{ currentPlanet.toUpperCase() }}</h1>
        <p class="description">{{ description }}</p>
        <div class="line"></div>
        <div class="travel-description">
          <div class="info">
            <div class="subtitle">AVG. DISTANCE</div>
            <div class="travel-info">{{ distance }}</div>
          </div>
          <div class="info">
            <div class="subtitle">EST. TRAVEL TIME</div>
            <div class="travel-info">{{ travelTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { destinations } from "../assets/data.json";
import { watch } from "@vue/runtime-core";
export default {
  name: "Destination",
  setup() {
    const currentPlanet = ref("moon");
    const planetImg = ref(
      require("@/assets/destination/image-" + currentPlanet.value + ".png")
    );

    const description = ref("");
    const distance = ref("");
    const travelTime = ref("");

    const getInfoPlanets = () => {
      destinations.forEach((planet) => {
        if (planet.name.toLocaleLowerCase() == currentPlanet.value) {
          description.value = planet.description;
          distance.value = planet.distance;
          travelTime.value = planet.travel;
        }
      });
    };

    //Initial load of information
    getInfoPlanets();

    const isActive = (name: String) => {
      return name.toLocaleLowerCase() === currentPlanet.value;
    };

    const changePlanet = (name: string) => {
      currentPlanet.value = name.toLocaleLowerCase();
    };

    watch(
      () => currentPlanet.value,
      () => {
        getInfoPlanets();
        planetImg.value = require("@/assets/destination/image-" +
          currentPlanet.value +
          ".png");
      }
    );
    return {
      currentPlanet,
      planetImg,
      isActive,
      description,
      distance,
      travelTime,
      changePlanet,
    };
  },
};
</script>

<style lang="scss" scoped>
.destination {
  padding-top: 7em;
  color: white;
  min-height: -webkit-fill-available;
  min-height: 100vh;
  min-width: 100vw;
  min-width: -webkit-fill-available;
  background-image: url("../assets/destination/background-destination-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.content {
  // border: 1px solid red;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.pick-destination {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
}

.planet img {
  margin-top: 2em;
  width: 170px;
  height: 170px;
}

.submenu {
  margin: 1.625em auto;
  width: 60%;
  height: 1.75em;
  display: flex;
  justify-content: space-between;

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 2.3625px;
  color: #d0d6f9;

  .active {
    color: white;
    border-bottom: 1px solid white;
  }

  div {
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid rgba(#fff, 0.5);
      transition: border-bottom 0.5s ease;
    }
  }
}

.planet-name {
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-align: center;
}

.description {
  width: 80%;
  margin: auto;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #d0d6f9;
}

.line {
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 1px;
  background: #383b4b;
}

.subtitle {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  color: #d0d6f9;
}

.travel-info {
  margin-top: 0.75em;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
}

.info {
  margin-top: 2em;
}
@media only screen and (min-width: 768px) {
  .destination {
    background-image: url("../assets/destination/background-destination-tablet.jpg");
    padding-top: 8.5em;
    display: flex;
    flex-direction: column;
  }

  .pick-destination {
    font-size: 20px;
    line-height: 24px;
    text-align: start;
    letter-spacing: 3.375px;
    margin-left: 3em;
  }

  .planet {
    img {
      width: 300px;
      height: 300px;
    }
  }

  .submenu {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

  .planet-name {
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 92px;
    text-align: center;
  }

  .description {
    width: 70%;
    font-size: 16px;
    line-height: 28px;
  }
  .line {
    width: 70%;
  }

  .travel-description {
    display: flex;
    justify-content: space-evenly;
  }
  .submenu {
    width: 40%;
  }
}

@media only screen and (min-width: 1024px) {
  .destination {
    background-image: url("../assets/destination/background-destination-desktop.jpg");
    padding-top: 13.25em;
  }
  .content {
    // border: 1px solid red;
    width: 90%;
    margin: auto;
    flex: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // flex-direction: row;
    // justify-content: space-around;
    // align-items: center;
  }
  .pick-destination {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
  }
  .planet {
    align-self: center;
    img {
      width: 445px;
      height: 445px;
    }
  }

  .planet-information {
    // border: 1px solid red;
    align-self: center;
    width: 70%;
  }
  .planet-information * {
    margin: 0;
    text-align: start;
  }

  .planet-name {
    font-size: 100px;
    line-height: 115px;
  }
  .description {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }

  .planet-name,
  .description,
  .submenu,
  .submenu {
    margin-top: 0.5em;
    width: 100%;
  }
  .line {
    margin: 2em 0;
    width: 100%;
  }
  .travel-description {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // justify-content: space-around;
    // text-align: start;
  }
  .travel-info {
    margin-top: 1em;
  }
}
</style>