<template>
  <nav>
    <v-toolbar flat app>

      <v-toolbar-title class="text-uppercase" >
        <span class="font-weight-light red-text">Fitness</span>
        <span class="text-primary">Barock</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        flat color="grey"
        @click.stop="drawer = !drawer"
      >
        Toggle Menu
      </v-btn>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

      <v-navigation-drawer
        v-model="drawer"
        temporary
      >


        <v-list density="compact" class="ma-5" nav>
             <v-list-item
          v-for="link in links"
          :key="link.text"
          :value="item"
          active-color="primary"
        >
          <router-link :to="link.route" id="link" class="pa-">
            <v-list-item-avatar>
              <v-icon :icon="link.icon"></v-icon>
            </v-list-item-avatar>

            <v-list-item-title class="grey--text" v-text="link.text"></v-list-item-title>
          </router-link>
          
        </v-list-item>
        </v-list>
      </v-navigation-drawer>    

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

<style>
#link {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: grey;
}
</style>
