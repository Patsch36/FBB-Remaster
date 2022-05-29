<template>
  <div style="height: auto" class="bg-background mt-16">
    <div v-if="isLoading" style="height: 100vh">
      <ScaleLoader class="loader" />
    </div>
    <div class="weather-wrapper" v-else>
      <NavBar
        @add-city="toggleModal"
        @edit-cities="editCities"
        :addCityActive="addCityActive"
        :isDay="isDay"
        :isNight="isNight"
      />
      <Modal
        v-if="modalOpen"
        v-on:close-modal="toggleModal"
        @new-city="newCity"
        v-bind:APIkey="APIkey"
        v-bind:cities="cities"
      />
      <AddCity
        :loading="isLoading"
        :cities="cities"
        :edit="edit"
        @remove-city-from-array="removeCityFromArray"
        @cancel-add-city="cancelAddCity"
        @add-city="toggleModal"
      />
    </div>
  </div>
</template>

<script>
import ScaleLoader from "@/components/weatherapp/ScaleLoading.vue";
import NavBar from "@/components/weatherapp/Navigation.vue";
import Modal from "@/components/weatherapp/Modal.vue";
import AddCity from "@/components/weatherapp/AddCity.vue";

import axios from "axios";
import app from "@/firebase/firebase_init";
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default {
  name: "App",
  components: { ScaleLoader, NavBar, Modal, AddCity },
  data() {
    return {
      APIkey: "a147b21d6c970cd71652d200885616de",
      modalOpen: null,
      edit: null,
      addCityActive: null,
      cities: [],
      isLoading: true,
    };
  },
  computed: {
    isDay() {
      return this.$store.state.isDay;
    },
    isNight() {
      return this.$store.state.isNight;
    },
  },
  created() {
    this.getCityWeather();
    this.checkRoute();

    // setTimeout( () => {
    //   console.log(this.cities[0].city);
    // }, 2000)
  },
  methods: {
    async getCityWeather() {
      // Clear city array so data is not doubled
      this.cities = [];

      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(app);

      const colRef = collection(db, "cities");

      const querySnapshot = await getDocs(colRef);
      console.log(querySnapshot);
      if (querySnapshot.empty) {
        this.isLoading = false;
      }
      querySnapshot.forEach(async (document) => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            document.data().city
          }&units=metric&APPID=${this.APIkey}`
        );

        const data = response.data;
        this.cities.push({ city: document.data().city, currentWeather: data });
        this.isLoading = false;
        updateDoc(doc(db, "cities", document.id), { currentWeather: data });
      });
    },
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    newCity(data) {
      this.cities.push(data);
      this.toggleModal();
    },
    editCities() {
      this.edit = !this.edit;
    },
    removeCityFromArray(city) {
      this.cities = this.cities.filter((loopcity) => {
        return loopcity.city !== city;
      });
    },
    checkRoute() {
      if (this.$route.name === "Wetter") {
        this.addCityActive = true;
      } else {
        this.addCityActive = false;
      }
    },
    dayTime() {
      let newstate = !this.isDay;
      alert(this.isDay, "=>", newstate);
      this.$store.commit("setDay", newstate);
    },
    nightTime() {
      let newstate = !this.isNight;
      this.$store.commit("setNight", newstate);
    },
    resetDays() {
      this.$store.commit("setNight", false);
      this.$store.commit("setDay", false);
    },
    cancelAddCity() {
      this.modalOpen = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.day {
  transition: 500ms ease all;
  background-color: rgb(59, 150, 249);
}

.night {
  transition: 500ms ease all;
  background-color: rgb(20, 42, 95);
}

.loader {
  z-index: 20;
  position: absolute;
  left: calc(50% - 19px);
  top: 30vh;
}

.weather-wrapper{
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
}
</style>