<template>
  <div class="destination">
    <h5>
      <span style="font-weight: 700; opacity: 0.25;">01</span> PICK YOUR DESTINATION
    </h5>
    <div class="content">
      <div class="planet">
        <img :src="planetImg" :alt="currentPlanet">
      </div>
      <div class="information">
        <div class="submenu">
          <div v-for="(name, index) in ['MOON', 'MARS', 'EUROPA', 'TITAN']" :key="index"
            @click="changePlanet(name)"
            :class="{ active: isActive(name) }">
            {{ name }}
          </div>
        </div>
        <h1 class="planet-name">{{ currentPlanet.toUpperCase() }}</h1>
        <p class="description">{{ description }}</p>
        <div class="line"></div>
        <div class="info">
          <div class="subtitle">
            AVG. DISTANCE
          </div>
          <div class="travel-info">{{ distance }}</div>
        </div>
        <div class="info">
          <div class="subtitle">
            EST. TRAVEL TIME
          </div>
          <div class="travel-info">{{ travelTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { destinations } from '../assets/data.json'
import { watch } from '@vue/runtime-core'
export default {
  name: "Destination",
  setup() {
    const currentPlanet = ref("moon")
    const planetImg = ref(require("@/assets/destination/image-" + currentPlanet.value + ".png"))

    const description = ref("")
    const distance = ref("")
    const travelTime = ref("")

    const getInfoPlanets = () => {
      destinations.forEach(planet => {
        if (planet.name.toLocaleLowerCase() == currentPlanet.value) {
          description.value = planet.description
          distance.value = planet.distance
          travelTime.value = planet.travel
        }
      })
    }

    //Initial load of information
    getInfoPlanets()

    const isActive = (name: String) => {
      return name.toLocaleLowerCase() === currentPlanet.value
    }

    const changePlanet = (name: string) => {
      currentPlanet.value = name.toLocaleLowerCase()
    }

    watch(
      () => currentPlanet.value,
      () => {
        getInfoPlanets()
        planetImg.value = require("@/assets/destination/image-" + currentPlanet.value + ".png")
      }
    )
    return { currentPlanet, planetImg, isActive, description, distance, travelTime, changePlanet }
  }
}
</script>

<style lang="scss" scoped>
.destination {
  padding-top: 7em;
  color: white;
  height: 100vh;
  height: -webkit-fill-available;
  width: 100vw;
  background-image: url("../assets/destination/background-destination-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: center;
}

h5 {
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

  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 2.3625px;
  color: #D0D6F9;

  .active {
    color: white;
    border-bottom: 1px solid white;
  }

  div {
    cursor: pointer;
  }
}

.planet-name {
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-align: center;
}

.description {
  width: 80%;
  margin: auto;
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #D0D6F9;
}

.line {
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 1px;
  background: #383B4B;
}

.subtitle {
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  color: #D0D6F9;
}

.travel-info {
  margin-top: 0.75em;
  font-family: 'Bellefair';
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
  }

}

@media only screen and (min-width: 1024px) {
  .destination {
    background-image: url("../assets/destination/background-destination-desktop.jpg");
  }

}
</style>