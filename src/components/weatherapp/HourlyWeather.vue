<template>
  <div class="hourly-weather">
    <div class="container">
      <div
        class="hourly-temp mx-2"
        style="min-width: 60px"
        v-for="(time, index) in filteredList"
        :key="index"
      >
        <HourlyTemperature :time="time" />
      </div>
    </div>
  </div>
</template>

<script>
import HourlyTemperature from "@/components/weatherapp/HourlyTemperature.vue";
export default {
  name: "HourlyWeather",
  props: ["forecast"],
  components: { HourlyTemperature },
  created() {
    console.log(this.forecast);
  },
  computed: {
    filteredList() {
      return this.forecast.hourly.slice(0, 23);
    },
  },
};
</script>

<style>
.hourly-weather {
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}

.container {
  display: flex;
  max-width: 100vw;
  overflow-x: scroll;
  padding: 0;
  margin: 0 20px;
  padding-bottom: 20px;
}

/* width */
::-webkit-scrollbar {
  height: 3px;
  margin-top: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: aliceblue;
  border-radius: 2px;
  animation:all .5s ease;
}

::-webkit-scrollbar-thumb:hover {
  background-color:gainsboro;
}

@media screen and (max-width: 1100px) {
    
    ::-webkit-scrollbar {
      display: none;
    }
}
</style>