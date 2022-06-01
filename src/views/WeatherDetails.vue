<template>
  <div class="main">
    <div
      class="w-100 background"
      :class="{ day: isDay, night: isNight }"
    >
      <ScaleLoader v-if="loading" class="loading" />
      <div v-else class="weather">
        <div class="weather-wrapper">
          <CurrentWeather
            :currentWeather="currentWeather"
            :isDay="isDay"
            :isNight="isNight"
          />
          <HourlyWeather :forecast="forecast" />
          <WeeklyForecast :forecast="forecast" />
          <AdditionalInformation :currentWeather="currentWeather" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import app from "../firebase/firebase_init";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import ScaleLoader from "@/components/weatherapp/ScaleLoading.vue";
import CurrentWeather from "@/components/weatherapp/CurrentWeather.vue";
import HourlyWeather from "@/components/weatherapp/HourlyWeather.vue";
import WeeklyForecast from "@/components/weatherapp/WeeklyForecast.vue";
import AdditionalInformation from "@/components/weatherapp/AdditionalInformation.vue";

export default {
  name: "WeatherView",
  components: {
    ScaleLoader,
    CurrentWeather,
    HourlyWeather,
    WeeklyForecast,
    AdditionalInformation,
  },
  data() {
    return {
      currentWeather: null,
      forecast: null,
      loading: true,
      currentTime: null,
      APIkey: "a147b21d6c970cd71652d200885616de",
    };
  },
  created() {
    this.getWeather();
  },
  beforeUnmount() {
    this.$store.commit("setNight", false);
    this.$store.commit("setDay", false);
  },
  computed: {
    isDay() {
      return this.$store.state.isDay;
    },
    isNight() {
      return this.$store.state.isNight;
    },
  },
  methods: {
    async getWeather() {
      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(app);

      const colRef = collection(db, "cities");

      const q = await query(
        colRef,
        where("city", "==", `${this.$route.params.city}`)
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (document) => {
        this.currentWeather = document.data().currentWeather;
        await axios
          .get(
            `http://localhost:3000/?lat=${
              document.data().currentWeather.coord.lat
            }&lon=${
              document.data().currentWeather.coord.lon
            }&exclude=current,minutley,alerts&units=metric&appid=${this.APIkey}`
          )
          .then((res) => {
            this.forecast = res.data;
          })
          .then(() => {
            this.loading = false;
            this.getCurrentTime();
          });
      });
    },
    getCurrentTime() {
      const dateObject = new Date();
      this.currentTime = dateObject.getHours();

      const sunrise = new Date(
        this.currentWeather.sys.sunrise * 1000
      ).getHours();
      const sunset = new Date(this.currentWeather.sys.sunset * 1000).getHours();

      if (this.currentTime > sunrise && this.currentTime < sunset) {
        let newstate = !this.isDay;
        this.$store.commit("setDay", newstate);
      } else {
        let newstate = !this.isNight;
        this.$store.commit("setNight", newstate);
      }
    },
  },
};
</script>

<style scoped>
.main {
  height: 1500px;
  position: relative;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
}

@media screen and (max-width: 960px){
  .main{
    height: 1720px;
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 75px;
  min-height: 100%;
  height: auto
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.weather {
  transition: 500ms ease;
  overflow-x: hidden;
}


.day {
  transition: 500ms ease all;
  background-color: rgba(59, 150, 249, 0.6);
}

.night {
  transition: 500ms ease all;
  background-color: rgba(20, 42, 95, 0.8);
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}
</style>