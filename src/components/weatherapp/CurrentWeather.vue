<template>
  <div class="current-weather">
    <v-container class="wrapper">
      <v-row>
        <v-col cols="12" md="10" style="height: 350px; max-height: 45vh">
          <v-container style="height: 100%">
            <v-row class="d-flex flex-colum align-content-space-between" style="height: 100%">
              <v-col cols="12" class="d-flex flex-column">
                <span class="text-text_dark text-h4 text-md-h2 font-weight-medium">
                  {{ this.currentWeather.name }}
                </span>
                <span class="text-text_dark text-h3 font-weight-thin">
                  {{ Math.round(this.currentWeather.main.temp) }}&deg;C
                </span>
              </v-col>

              <v-col cols="12">
                <div class="high-low-temperatures d-flex">
                  <div class="text-text_dark">
                    <v-icon> mdi-chevron-up</v-icon>
                    <span class="text-text_dark ml-1">
                      {{ Math.round(this.currentWeather.main.temp_max) }}&deg;
                    </span>
                  </div>
                  <div class="text-text_dark ml-6">
                    <v-icon> mdi-chevron-down</v-icon>
                    <span class="text-text_dark ml-1"
                      >{{ Math.round(this.currentWeather.main.temp_min) }}&deg;
                    </span>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" class="d-flex flex-column">
                <span class="text-text_dark text-capitalize" style="font-size: 200%">
                  {{ this.currentWeather.weather[0].description }}
                </span>
                <span class="text-text_dark font-weight-light">
                  Gefühlt
                  {{ Math.round(this.currentWeather.main.feels_like) }}&deg;
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <v-col cols="12" md="2" style="height: 350px; max-height: 45vh">
          <img v-if="isDay" src="/sun.png" alt="Sun-Image" class="icon-img"/>
          <img v-if="isNight" src="/moon.png" alt="Moon-image" class="icon-img"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "currentWeather",
  props: ["currentWeather", "isDay", "isNight"],
};
</script>

<style scoped>
.current-weather {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 90px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}

.wrapper {
  width: 100%;
  margin-bottom: 100px;
}


.icon-img{
  height: 100%;
}

@media screen and (max-width: 600px){
  .icon-img{
    margin-top: 30px;
    margin-inline: auto;
  }
}
</style>