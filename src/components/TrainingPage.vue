<template>
  <section
    id="training"
    class="bg-background mb-16 mb-md-12"
    style="height: auto; min-height: 90vh; width: 100vw"
  >
    <v-container class="mt-8 mt-md-16">
      <v-row>
        <v-col cols="12">
          <div id="header-container">
            <div id="header-background">Training</div>
            <h1 id="header">The best thing in training</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4" md="6" class="image-wrapper">
          <img
            :src="training_motivation_image"
            alt="Strong-Man-Image"
            class="training-motivation-image"
          />
        </v-col>
        <v-col cols="12" sm="8" md="6" class="d-flex align-center">
          <ul class="ml-16 training-list">
            <div
              v-for="(item, i) in training_motivation"
              :key="i"
              :value="item"
              class="my-3 list-item-wrapper"
            >
              <v-icon class="lightningBolt text-primary">
                mdi-lightning-bolt
              </v-icon>
              <li class="text-md-h6 ml-4">{{ item }}</li>
            </div>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function () {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      const training_gs = gsap.timeline({
        scrollTrigger: {
          trigger: ".image-wrapper",
          start: "20% bottom",
          toggleActions: "restart none restart none"
        },
      });
      training_gs.fromTo(
        ".training-motivation-image",
        {
          x: innerWidth * -0.2,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        {
          x: innerWidth * -0.001,
          opacity: 1,
          duration: 0.8,
        },
        "start"
      );

      training_gs.fromTo(
        ".training-list",
        {
          x: innerWidth * 0.2,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        {
          x: innerWidth * -0.001,
          opacity: 1,
          duration: 0.8,
        },
        "start"
      );

      return () => {
        training_gs.scrollTrigger.kill();
      };
    },

    get_right_path: (path) => {
      return process.env.NODE_ENV === "production" ? "./" + path : "../" + path;
    },
  },
  data() {
    return {
      training_motivation: [
        "Gesundheit",
        "mehr Vitalität",
        "Koordination",
        "Freunde kennenlernen",
        "Selbstbewusstsein",
        "Muskeln",
      ],
      training_motivation_image: this.get_right_path('assets/images/index/strong1.jpg')
    };
  },
};
</script>

<style scoped>
#header-container {
  position: relative;
  height: 250px;
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
  font-size: 70px;
  z-index: 1;
  text-transform: uppercase;
  transform: translateY(35%);
}

#gymheader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.training-motivation-image {
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 50vh;
}

.list-item-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

.training-list {
  list-style: none;
}

.lightningBolt {
  transform: rotate(15deg);
}

@media screen and (max-width: 1300px) {
  #header {
    font-size: 50px;
    transform: translateY(40%);
  }
}

@media screen and (max-width: 800px) {
  #header-container {
    height: 175px;
  }

  #header-background {
    font-size: 150px;
  }

  #header {
    font-size: 40px;
    transform: translateY(40%);
  }
}

@media screen and (max-width: 800px) {
  #header-container {
    height: 150px;
  }

  #header-background {
    font-size: 100px;
  }

  #header {
    font-size: 30px;
    transform: translateY(40%);
  }
}

@media screen and (max-width: 450px) {
  #header-container {
    height: 125px;
  }

  #header-background {
    font-size: 80px;
  }

  #header {
    font-size: 22px;
    transform: translateY(40%);
  }
}

@media screen and (max-width: 350px) {
  #header-container {
    height: 100px;
  }

  #header-background {
    font-size: 60px;
  }

  #header {
    font-size: 18px;
    transform: translateY(40%);
  }
}
</style>
