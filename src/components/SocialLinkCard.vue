<template>
  <a :href="url" target="_blank" class="footer-card-cta">
    <div class="footer-card" :class="short">
      <h3 class="footer-card-title-large">{{ name }}</h3>
      <h5 class="footer-card-title-small text-textcolor text-h5">{{ name }}</h5>
    </div>
  </a>
</template>

<script>

export default {
  name: "social-link-card",
  props: {
    url: String,
    name: String,
    short: String,
  },
  setup(){

    //   Legacy Code, in non-vuetify projects, there mus be secured of this css-variables, in vuetify theres simply primary

    // Because we use the accent-colour lateron if card-type is phonecall (which has no specific color),
    // there should be testet if the variable exists (Neccessary if this component is copied in another project)
    // let docStyle = getComputedStyle(document.documentElement);

    // let accent_color_exists = docStyle.getPropertyValue("--accent-color");

    // if (!accent_color_exists) {
    //     docStyle.setProperty("--accent-color", "#33FFBD");
    // }

    // let installed_modules = Object.keys(require('../../package.json').dependencies)
     
    // if( installed_modules.find(e => e === 'vuetify') === 'vuetify'){
        
    // }else{
    //     // In native vue, we must create a css variable for phone
    //     let docStyle = getComputedStyle(document.documentElement);

    //     let accent_color_exists = docStyle.getPropertyValue("--accent-color");

    //     if (!accent_color_exists) {
    //     docStyle.setProperty("--accent-color", "#33FFBD");
    //     }
    // }

  },
  computed: {
    styleObject: function () {
      return {
        "--media_color": this.media_colour,
      };
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap');
.footer-card-cta {
  width: 15%;
  height: auto;
  text-decoration: none;
}

.footer-card {
  width: auto;
  height: inherit;
  font-family: sans-serif;
  background-color: #262525;
  color: var(--text-color);
  /* padding: 1.5rem; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.footer-card-title-large {
  /* font-family: fantasy; */ /* Font family looks in the content much nicer, but poorly, it's not supported on IOS/ IpPadOS*/
  font-family: 'Teko', sans-serif;
  font-size: 5rem;
  letter-spacing: 0.5rem;
  transform: translateX(55%);
  color: #1d1d1d;
  transition: transform 5s;
  text-decoration: none;
}

.footer-card-title-small {
  margin-bottom: 1rem;
  text-align: right;
  padding-right: 10%;
}

.footer-card:hover .footer-card-title-large {
  transform: translateX(-200%);
  color: #fff;
}

@media screen and (max-width: 600px) {
  .footer-card-cta {
    width: 150px;
    margin-top: 10%;
  }

  /* On some mobile phones. the original fantasy font does not work */
  .footer-card-title-large {
    font-family: Arial;
  }

  .footer-card-cta:nth-last-child(1):nth-child(odd) {
    width: 100%;
  }

  .footer-card:hover .footer-card-title-large {
    transform: translateX(-200%);
  }

  .footer-card-cta:nth-last-child(1):nth-child(odd)
    .footer-card:hover
    .footer-card-title-large {
    transform: translateX(-100%);
  }
}

/* Example of brand color, more can be added */

.footer-card.whatsapp:hover {
  background-color: #25d366;
}

.footer-card.instagram:hover {
  background-image: radial-gradient(
    at 20% 128%,
    #feda78 20%,
    #e23467 60%,
    #ac2bb3 90%
  );
}

.footer-card.facebook:hover {
  background-color: #4267b2;
}

.footer-card.youtube:hover {
  background-color: #ff074f;
}

.footer-card.phone:hover {
  /* background-color: var(--accent-color); */
  background-color: rgb(var(--v-theme-primary)) !important;
}

.footer-card.fiver:hover {
  background-color: #1dbf73;
}

.footer-card.telegram:hover {
  background-color: #0088cc;
}

.footer-card.github:hover {
  background-color: #333333;
}

.footer-card.snapchat:hover {
  background-color: #fffc00;
}

.footer-card.tinder:hover {
  background-image: linear-gradient(
    185deg,
    rgba(253, 38, 122, 1) 0%,
    rgba(255, 120, 84, 1) 100%
  );
}

.footer-card.spotify:hover {
  background-color: #1db954;
}

.footer-card.applemusic:hover {
  background-image: linear-gradient(
    0deg,
    rgba(252, 60, 68, 1) 0%,
    rgba(249, 76, 87, 1) 100%
  );
}

.footer-card.linkedin:hover {
  background-color: #0072b1;
}

.footer-card.tiktok:hover {
    background-image: radial-gradient(
        at 20% 128%,
        #ff0050 20%,
        #00f2ea 40%,
        #000000 90%
      );
}

.footer-card.reddit:hover {
  background-color: #FF5700;
}

.footer-card.fiver:hover {
    background-image: linear-gradient(
        90deg,
        #1de9b6 0%,
        #26a69a 100%
      );
}

</style>