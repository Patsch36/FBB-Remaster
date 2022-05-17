<template>
  <v-app class="grey lighten-4 bg-background" style="width:100vw">
    <NavBar />

    <v-content >
      <router-view></router-view>

    </v-content>
    <FooterBar />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'

export default {
  components: { NavBar, 
  FooterBar
   },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

<style>

:root{
  font-size: 20px;
  /* overflow: hidden; */
}

html{
  height: 100%;
}

body{
  overflow-y: visible;
}

</style>