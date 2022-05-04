<template>
  <nav>
    <v-app-bar flat app class="bg-grey">
      <v-app-title class="text-uppercase">
        <span class="font-weight-light red-text">Fitness</span>
        <span class="text-primary">Barock</span>
      </v-app-title>

      <v-spacer></v-spacer>

      <v-btn @click="this.drawer = !this.drawer"
        ><v-icon v-if="!drawer">mdi-menu</v-icon>
        <v-icon v-if="drawer">mdi-close</v-icon>Menu</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="this.drawer" temporary>
      <v-list density="compact" class="ma-5" nav v-if="this.mode">
        <v-list-item
          v-for="link in links_prod"
          :key="link.text"
          :value="item"
          active-color="primary"
        >
          <router-link :to="link.route" id="link" class="pa-">
            <v-list-item-avatar>
              <v-icon :icon="link.icon"></v-icon>
            </v-list-item-avatar>

            <v-list-item-title
              class="grey--text"
              v-text="link.text"
            ></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>

      <v-list density="compact" class="ma-5" nav v-else>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :value="item"
          active-color="primary"
        >
          <router-link :to="link.route" id="link" class="nav-link-anchor">
            <div class="nav-link">
              <v-list-item-avatar>
                <v-icon
                class="nav-icon"
                  :icon="link.icon"
                ></v-icon>
              </v-list-item-avatar>

              <v-list-item-title
                class="grey--text nav-icon-title"
                v-text="link.text"
              ></v-list-item-title>
            </div>
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
      mode: process.env.NODE_ENV === "production",
      links: [
        { icon: "mdi-home", text: "Titelseite", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
      links_prod: [
        { icon: "mdi-home", text: "Titelseite", route: "/fbb/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
    };
  },
};

// console.log(this.mode)
</script>

<style>
#link {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: grey;
  width: 100%;
}

.nav-link{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.nav-icon-title, .nav-icon{
  transition: .5s ease;
}
.nav-icon-title{
  width: 60%;
}

.nav-link:hover .nav-icon-title{
  color: rgb(var(--v-theme-primary)) !important;
}

.nav-link:hover .nav-icon{
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
