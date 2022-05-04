<template>
  <section
    id="overview"
    class="bg-background mb-16 mb-md-12"
    style="height: auto; min-height: 90vh; width: 100vw"
  >
    <v-container>
      <v-row>
        <v-col cols="6" class="counter-wrapper">
          <h3 class="text-h6 text-md-h4 font-weight-bold number-counter" id="memCounter">1682</h3>
          <span class="text-caption text-md-h5 counter-explanation" style="opacity: .8;">Mitglieder</span>
        </v-col>
        <v-col cols="6" class="counter-wrapper">
          <h3 class="text-h6 text-md-h4 font-weight-bold number-counter" id="goalCounter">1228</h3>
          <span class="text-caption text-md-h5 counter-explanation" style="opacity: .8;"
            >Körperliches Ziel erreicht</span
          >
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" md="7" xl="6">
          <div class="gym_descr">
            <div id="header-container">
              <div id="header-background">Fitness</div>
              <h1 id="header">Du schaffst dein Ziel nur bei uns!</h1>
            </div>
            <div class="mt-6 mt-lg-16pt-lg-16 px-2 px-md-16 px-md-0 gym-text">
              <p>
                Du bist auf der Suche nach einem Fitnessstudio in gehobenem Stil
                und einem kompetenten Trainer an deiner Seite, der genau deine
                Wünsche umsetzt?
              </p>
              <p>Du möchtest auch ein gutes Preisleistungsverhältnis?</p>
              <p>Dann sind wir für dich das ideale Fitnessstudio!</p>
              <p>
                Wir unterstützen unsere Kunden bei Gesundheitsbeschwerden,
                Gewichtsabnahme, Muskelaufbau, Beweglichkeit, Koordination,
                Ausdauer, Kraftaufbau, Selbstbewusstseinsaufbau und Stressabbau.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" xl="6">
          <div class="card-image">
            <img :src="gym_image" alt="" class="gym-image" />
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

    document.addEventListener("scroll", function () {
      // Test if element is on screen
      let element1 = document.getElementById("memCounter");
      let element2 = document.getElementById("goalCounter");
      //   Because of both elements being straight in a line, it's enough to check one element
      let posElement1 = element1.offsetTop;
      let currScreenPosY = window.scrollY;
      let viewportHeight = window.screen.height;

      var onScreen = false;

      if (
        posElement1 - viewportHeight < currScreenPosY &&
        currScreenPosY < posElement1
      ) {
        onScreen = true;
      }

      //   Test if element is already on screen (Then animation should not restart)
      if (!this.wasVisible && onScreen) {
        // Start animation
        var limit1 = parseInt(element1.innerHTML);
        var limit2 = parseInt(element2.innerHTML);
        var current1 = 0;
        var current2 = 0;
        var timer1 = setInterval(function () {
          current1 += 2;
          // Update the contents of the element
          element1.innerHTML = current1;

          if (current1 === limit1) {
            clearInterval(timer1);
          }
        }, 1);

        var timer2 = setInterval(function () {
          current2 += 2;
          // Update the contents of the element
          element2.innerHTML = current2;

          if (current2 === limit2) {
            clearInterval(timer2);
          }
        }, 1);
      }
      this.wasVisible = onScreen;
    });
  },
  methods: {
    scrollAnimation() {
      const training_gs = gsap.timeline({
        scrollTrigger: {
          trigger: ".image-wrapper",
          start: "20% bottom",
          toggleActions: "restart none restart none",
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
      gym_image: this.get_right_path("assets/images/index/our-gym.png"),
      wasVisible: false,
    };
  },
};
</script>

<style scoped>
.counter-wrapper{
  text-align: center;
  padding: none;
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
  font-size: 40px;
  z-index: 1;
  text-transform: uppercase;
  transform: translateY(40%);
}

#gymheader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gym-text {
  display: flex;
  flex-direction: column;
}

p {
  margin-top: 2%;
  opacity: 0.7;
}

.card-image {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gym-image {
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 50vh;
  transition: transform 10s ease;
}

.gym-image:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 1280px) {
  #header-container {
    height: 150px;
  }

  #header-background {
    font-size: 150px;
  }

  #header {
    font-size: 25px;
    transform: translateY(40%);
  }
}

@media screen and (max-width: 950px) {
  .gym-image {
    max-width: 80vh;
    padding: 10%;
  }
}

@media screen and (max-width: 500px) {
  #header-container {
    height: 125px;
  }

  #header-background {
    font-size: 125px;
  }

  #header {
    font-size: 25px;
    transform: translateY(40%);
  }

  p {
    margin-top: 5%;
    font-size: 16px;
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  #header-container {
    height: 100px;
  }

  #header-background {
    font-size: 100px;
  }

  #header {
    font-size: 20px;
    transform: translateY(40%);
  }

  .gym-image {
    padding: 5%;
  }
}
</style>
