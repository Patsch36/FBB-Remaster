<template>
  <div>
    <v-container v-if="cities.length === 0" class="ma-0 pa-6 bg-red-lighten-5 w-100" style="min-height: 100vh; min-width: 100%">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          Keine Stadt Verfügbar
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn color="secondary" @click="addCity"> Stadt hinzufügen </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container
    v-if="!loading"
      class="ma-0 pa-6 bg-red-lighten-5 w-100 h-100"
      style="min-height: 100vh; min-width: 100%"
    >
      <v-row no-gutters>
        <v-col cols="12" sm="6" v-for="(city, index) in cities" :key="index">
          <CityWidget
            :city="city"
            :edit="edit"
            @remove-city-from-array="removeCityFromArray"
            @cancel-add-city="cancelAddCity"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CityWidget from "@/components/weatherapp/CityWidget.vue";
export default {
  name: "AddCities",
  components: { CityWidget },
  props: ["cities", "edit", "loading"],
  created() {},
  methods: {
    removeCityFromArray(city) {
      this.$emit("remove-city-from-array", city);
    },
    addCity(){
      this.$emit("add-city")
    },
    cancelAddCity(){
      this.$emit("cancel-add-city")
    }
  },
};
</script>
