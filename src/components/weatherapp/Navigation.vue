<template>
  <div>
    <v-toolbar color="red-darken-4 text-text_dark" dense v-if="addCityActive">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <span class="font-weight-thin" style="font-size: 26px">Add</span>
        <span class="font-weight-black" style="font-size: 26px">City</span>
      </v-toolbar-title>

      <!-- <v-spacer></v-spacer> -->

      <v-btn icon class="text-h6 text-sm-h5" @click="editCities">
        <v-icon>mdi-circle-edit-outline</v-icon>
      </v-btn>

      <v-btn icon class="ml-6 text-h6 text-sm-h5" @click="reloadApp">
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>

      <v-btn icon class="ml-2 text-h6 text-sm-h5" @click="addCity">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-toolbar
      :class="{ day: isDay, night: isNight }"
      color="text-text_dark"
      style="z-index: 5"
      dense
      v-else
    >
      <router-link class="router-link" :to="{ name: 'AddCity' }">
        <v-icon>mdi-arrow-left-thick</v-icon>
      </router-link>

      <v-spacer></v-spacer>

      <span class="text-text_dark">
        {{ new Date().toLocaleString("de-DE", { weekday: "short" }) }},
        {{ new Date().toLocaleString("de-DE", { day: "2-digit" }) }}.
        {{ new Date().toLocaleString("de-DE", { month: "short" }) }}
      </span>

      <v-spacer></v-spacer>

      <span class="text-text_dark">&deg;C</span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: ["addCityActive", "isDay", "isNight"],
  methods: {
    addCity() {
      this.$emit("add-city");
    },
    reloadApp() {
      location.reload();
    },
    editCities() {
      this.$emit("edit-cities");
    },
  },
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
  color: rgb(var(--v-theme-text_dark));
}
</style>