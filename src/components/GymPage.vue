<template>
  <section
    id="overview"
    class="bg-background mb-16 mb-md-12"
    style="height: auto; min-height: 90vh; width: 100vw"
  >
    <v-container>
      <v-row justify="center" no-gutters>
        <v-col sm="12"
          ><h1 class="mb-16 text-md-h2 text-sm-h4" style="text-align: center">
            24h/7 geöffnet
          </h1></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" md="4"
          ><div class="call">
            <a
              href="tel:+491777871717"
              style="text-decoration: none"
              class="mb-8"
            >
              <v-icon title="Phone" id="icon" size="100px"> mdi-phone </v-icon>
            </a>
            <span class="mb-8 text-primary text-lg-h4 text-sm-h6"
              >0177 7871717</span
            >
            <span class="calltext text-body-1">
              Jetzt
              <a
                href="tel:+491777871717"
                class="text-greylighter"
                style="text-decoration: none"
                >anrufen</a
              >
              oder per
              <a
                href="https://api.whatsapp.com/send?phone=491777871717&text=Guten Tag, ich interessiere mich für ein Probetraining."
                class="text-greylighter"
                style="text-decoration: none"
                target="_blank"
                >WhatsApp</a
              >
              schreiben
            </span>
          </div></v-col
        >
        <v-col cols="12" md="8" id="gymheader">
          <div id="header-container">
            <div id="header-background">Fitness</div>
            <h1 id="header">Du schaffst dein Ziel nur bei uns!</h1>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-10 scroll-trigger-gympage">
        <v-col
          cols="12"
          lg="4"
          align="center"
          justify="center"
          v-for="(card, index) in cards"
          :key="card.title"
          :data-index="index"
        >
          <div class="card scroll-reveal-left pa-6 pa-md-12">
            <div class="card-image">
              <img :src="card.image_url" alt="" class="overview-card" />
            </div>
            <div>
              <h1>{{ card.title }}</h1>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default {
  mounted: function () {
    this.scrollAnimation();

  },
  methods: {
    scrollAnimation() {
      const gs = gsap.timeline({
        scrollTrigger: {
          trigger: ".card",
          start: "-50% bottom",
          toggleActions: "restart none restart none",
        },
      });
      gs.fromTo(
        ".card",
        {
          y: innerWidth * 0.3,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        {
          y: innerWidth * -0.001,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
        }
      );

      return () => {
        gs.scrollTrigger.kill();
      };
    },

    get_right_path: (path) => {
      return process.env.NODE_ENV === "production" ? "./" + path : "../" + path;
    },
  },
  data() {
    return {
      cards: [
        {
          title: "Body Building",
          description: "Bringe dein Körper in Form",
          image_url: this.get_right_path("assets/images/icons/dumbell.png"),
        },
        {
          title: "Cardio Work",
          description: "Bringe deine Ausdauer in Schwung",
          image_url: this.get_right_path("assets/images/icons/supplement.png"),
        },
        {
          title: "Dynamo Fitness",
          description: "Bringe deine Kraft mit Ausdauer in Schwung",
          image_url: this.get_right_path("assets/images/icons/kettlebell.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.call {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.calltext {
  text-align: center;
}

/* Some styles must be scoped */
#icon {
  color: rgb(var(--v-theme-grey));
  font-size: 100px;
  transition: 0.5s ease-in-out;
  border: 2px solid transparent;
}

#icon:hover {
  color: rgb(var(--v-theme-primary)) !important;
}

#header-container {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

#header-background {
  height: 100%;
  font-size: 200px;
  -webkit-text-stroke: 1px rgb(var(--v-theme-grey));
  color: transparent;
  font-weight: 700;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}

#header {
  font-size: 50px;
  z-index: 1;
  text-transform: uppercase;
  transform: translateY(35%);
}

#gymheader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border: 3px solid rgb(var(--v-theme-textcolor)) !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.overview-card {
  max-width: 80%;
  max-height: 80%;
}

.card p {
  height: 50px;
}

@media screen and (max-width: 1280px) {
  #header-container {
    height: 200px;
    width: 100%;
  }

  #header-background {
    font-size: 150px;
  }

  #header {
    font-size: 35px;
    transform: translateY(40%);
  }
}

@media screen and (max-width: 800px) {
  #header-container {
    height: 200px;
    width: 100%;
  }

  #header-background {
    font-size: 125px;
  }

  #header {
    font-size: 30px;
    transform: translateY(40%);
  }
}

@media screen and (max-width: 480px) {
  #header-container {
    height: 200px;
    width: 100%;
  }

  #header-background {
    font-size: 75px;
  }

  #header {
    font-size: 22.5px;
    transform: translateY(42.5%);
  }
}

@media screen and (max-width: 380px) {
  #header-container {
    height: 200px;
    width: 100%;
  }

  #header-background {
    font-size: 75px;
  }

  #header {
    font-size: 16px;
    transform: translateY(45%);
  }
}
</style>
