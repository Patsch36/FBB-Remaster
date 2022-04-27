<template>
  <div >
    <v-app-bar id="top-navbar" app>
      <div class="app-bar-content">
        <!-- v-show in container and the image, otherwise there would be one rendered an empty container which t -->
        <div class="top-menu-container" v-show="!drawer">
          <img
            :src="getImgUrl(page.logo_src)"
            alt=""
            class="nav-logo"
            v-show="!drawer"
          />
        </div>

        <v-btn id="menu-btn" class="top-menu-container" @click="toggleDrawer()">
          <v-icon v-if="!drawer" title="Menu">mdi-menu</v-icon>
          <v-icon v-else title="Menu">mdi-close</v-icon>

          <div v-if="!drawer">Menu</div>
          <div v-else>Close Menu</div>
        </v-btn>
        <ToggleButton class="top-menu-container, right-menu-item" />
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :temporary="false"
      disable-resize-watcher
      :mini-variant="!menuCompact.hidden"
      mini-variant-width="100"
      app
    >
      <div id="sidebar">
        <div class="sidebar-toggle">
          <div @click="changeToggleState()" id="btn-toggle">
            <v-icon id="btn-toggle-icon" x-large>mdi-chevron-left</v-icon>
          </div>
        </div>

        <div class="nav-image-wrapper" href="#">
          <img
            :src="getImgUrl(page.logo_src)"
            alt=""
            class="nav-logo nav-logo-big"
            @click.prevent="scrollToTop()"
            v-show="drawer"
          />
        </div>

        <div class="sidebar-links">
          <div class="sidebar-link-group">
            <small v-show="menuCompact.hidden">Landing-Page</small>
            <hr class="divider" />
            <div class="links">
              <a
                v-for="link in LandingMenuLinks"
                :key="link.title"
                :href="link.path"
              >
                <v-icon :title="link.title" class="icon" id="icon"
                  >mdi-{{ link.icon }}</v-icon
                >

                <v-slide-x-transition mode="in-out" leave-absolute>
                  <div class="link-title" v-show="menuCompact.hidden">
                    {{ link.title }}
                  </div>
                </v-slide-x-transition>
              </a>
            </div>
          </div>

          <div class="sidebar-link-group">
            <small v-show="menuCompact.hidden">Gallery-Page</small>
            <hr class="divider" />
            <div class="links">
              <a
                v-for="link in GalleryMenuLinks"
                :key="link.title"
                :href="link.path"
              >
                <v-icon :title="link.title" class="icon" id="icon"
                  >mdi-{{ link.icon }}</v-icon
                >

                <v-slide-x-transition mode="in-out" leave-absolute>
                  <div class="link-title" v-show="menuCompact.hidden">
                    {{ link.title }}
                  </div>
                </v-slide-x-transition>
              </a>
            </div>
          </div>

          <div class="sidebar-link-group">
            <small v-show="menuCompact.hidden">Contact-form</small>
            <hr class="divider" />
            <div class="links">
              <a
                v-for="link in ContactMenuLinks"
                :key="link.title"
                :href="link.path"
              >
                <v-icon :title="link.title" class="icon" id="icon"
                  >mdi-{{ link.icon }}</v-icon
                >

                <v-slide-x-transition mode="in-out" leave-absolute>
                  <div class="link-title" v-show="menuCompact.hidden">
                    {{ link.title }}
                  </div>
                </v-slide-x-transition>
              </a>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import "../../MainStyle.css";
import "./style.css";

import ToggleButton from "../ToggleButton/index.vue";

export default {
  name: "Sidebar",
  props: {
    page: Object,
  },
  components: {
    ToggleButton,
  },
  data: () => {
    return {
      drawer: false,
      menuCompact: {
        hidden: true,
      },
      memberActive: true,
      LandingMenuLinks: [
        { path: "#", title: "Overview", icon: "information-outline" },
        { path: "#", title: "Training", icon: "dumbbell" },
        { path: "#", title: "Gym", icon: "account-multiple" },
        { path: "#", title: "Kommentare", icon: "comment-text-multiple" },
        { path: "#", title: "Mitgliedschaft", icon: "passport-biometric" },
        { path: "#", title: "Kontakt", icon: "card-account-mail" },
      ],
      GalleryMenuLinks: [
        { path: "#", title: "Bilder", icon: "image-multiple" },
        { path: "#", title: "Instagram", icon: "instagram" },
        { path: "#", title: "Videos", icon: "youtube-tv" },
      ],
      ContactMenuLinks: [{ path: "#", title: "Kontakt", icon: "email" }],
    };
  },
  methods: {
    changeToggleState() {
      let btnToggleIcon = document.getElementById("btn-toggle-icon");
      this.menuCompact.hidden = !this.menuCompact.hidden;

      if (this.menuCompact.hidden) {
        return (btnToggleIcon.style.transform = "rotateY(0deg)");
      } else {
        return (btnToggleIcon.style.transform = "rotateY(180deg)");
      }
    },

    getImgUrl(pic) {
      return require("../../" + pic);
    },

    scrollToTop: function () {
      window.scroll(0, 0);
    },

    toggleDrawer() {
      let menu_toggle_container = document.getElementById("menu-btn");
      this.drawer = !this.drawer;

      if (this.drawer) {
        menu_toggle_container.style.paddingInlineStart = "10px";
      } else {
        menu_toggle_container.style.paddingInlineStart = "0px";
      }
    },
  },
};
</script>
