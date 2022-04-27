<template>
  <v-app id="app">
    <Sidebar :page=nav_page />
    <v-main class="body">
      <v-container fluid class="main-container">
        <v-card id="header">
          <v-card-title></v-card-title>
          <v-card-subtitle></v-card-subtitle>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/sidebar/index.vue";

export default {
  name: "App",

  components: {
    Sidebar,
  },

  data: () => ({
    nav_page: {
      logo_src: "assets/images/icons/logo_small.png",
    },
  }),
};
</script>
