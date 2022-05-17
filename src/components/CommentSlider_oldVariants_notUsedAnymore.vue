<template>
  <section
    id="training"
    class="bg-background"
    style="height: auto; min-height: 90vh; width: 100vw; display: flex; flex-direction: column;"
  >

    <div id="header-container" class="mb-16">
      <div id="header-background">Kommentare</div>
      <h1 id="header">Was Mitglieder von uns denken</h1>
    </div>

    <!-- Original Slider -->
    <!-- 
    <v-carousel
      height="400"
      style="width: 80%; margin: auto"
      hide-delimiter-background
      show-arrows="hover"
    >
      <template v-slot:prev="{ props }">
        <v-btn
          variant="plain"
          color="primary"
          @click="props.onClick"
          icon="mdi-chevron-left"
          style="font-size: 5vh; transform: translateX(-65%)"
        ></v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          variant="plain"
          color="primary"
          @click="props.onClick"
          icon="mdi-chevron-right"
          style="font-size: 5vh; transform: translateX(65%)"
        ></v-btn>
      </template>
      <template v-for="(item, index) in comments">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1"
          :key="index"
        >
          <v-row
            class="flex-nowrap"
            style="height: 100%; width: 90%; margin: 0 auto"
          >
            <template v-for="(n, i) in columns">
              <template v-if="+index + i < comments.length">
                <v-col :key="i">
                  <v-sheet v-if="+index + i < comments.length" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="card-content">
                        <div class="user">
                          <div class="image">
                            <img
                              :src="comments[index + n - 1][0]"
                              alt=""
                              class="profile-img"
                            />
                          </div>

                          <div class="user-data">
                            <span class="name">{{
                              comments[index + n - 1][1]
                            }}</span>

                            <div class="rating"></div>
                            <v-icon
                              v-for="icon in comments[index + n - 1][2]"
                              :key="icon"
                              :icon="'mdi-' + icon"
                              class="rating-icon"
                            ></v-icon>
                          </div>
                        </div>

                        <span>{{ comments[index + n - 1][3] }} </span>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel> -->

    <!-- Swiper.js -->
    <!-- <swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="2"
      :space-between="30"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :speed="2000"
      :centered-slides="true"
    >
      <swiper-slide
        v-for="comment in comments"
        :key="comment"
        style="height: 90%;"
      >
        <div class="card-content">
          <div class="user">
            <div class="image">
              <img
                :src="comment[0]"
                alt=""
                class="profile-img"
              />
            </div>

            <div class="user-data">
              <span class="name">{{ comment[1] }}</span>

              <div class="rating"></div>
            </div>
          </div>

          <span>{{ comment[2] }} </span>
        </div>
      </swiper-slide>
    </swiper> -->

    <Carousel
      :wrapAround="true"
      :autoplay="3000"
      :transition="500"
      :breakpoints="breakpoints"
      style="height: 40vh; margin-inline: auto; margin-top: 5vh;"
    >
      <Slide v-for="slide in 3" :key="slide" style="height: 35vh;">
        <div class="carousel__item" style="height: 35vh;">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>


<script>
// import { Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/vue";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  name: "CommentSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      comments: [
        [
          "assets/images/index/av4.jpg",
          "Alexander Milonakis",
          ["star", "star", "star", "star", "star-half-full"],
          "Läuft",
        ],
        [
          "assets/images/index/av1.jpg",
          "Christina Heppchen",
          ["star", "star", "star", "star", "star"],
          "Viel Platz zum trainieren. Top Trainingsplan bekommen :)",
        ],
        [
          "assets/images/index/ad9.jpg",
          "Marion Elster",
          ["star", "star", "star", "star", "star-outline"],
          "Hammer Cool hier. Fühle mich sehr wohl hier. Auch schon 3kg abgenommen",
        ],
      ],
      breakpoints: {
      // 500px and up
      500: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 950 and up
      950: {
        itemsToShow: 2,
        snapAlign: "start",
      },
    },
    };
  },
  // computed: {
  //   columns() {
  //     if (window.screen.width > 1300) {
  //       return 2;
  //     }
  //     return 1;
  //   },
  // },
  methods: {
    get_right_path: (path) => {
      return process.env.NODE_ENV === "production" ? "./" + path : "../" + path;
    },
  },
};
</script>

<style>
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
  transform: translateY(40%);
}

#gymheader {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .carousel {
  width: 80%;
  margin: auto;
}

.card-content {
  height: 90%;
  background: inherit;
  border-radius: 20px;
  margin: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid white;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  position: relative;
  z-index: 100;
}

.card-content .user {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 25%;
}

.card-content > span {
  width: 50%;
  margin-inline-start: auto;
  color: white;
  opacity: 0.7;
}

.image {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(
    90deg,
    rgba(122, 122, 122, 1) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  font-size: 10§;
}

.profile-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid transparent;
}

.card .user-data {
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 10px;
  color: var(--text-color);
}

.user-data .name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.rating-icon {
  font-size: 18px;
  color: rgb(var(--v-theme-primary)) !important;
}

.mdi-chevron-right,
.mdi-chevron-left {
  border: 1px solid rgb(var(--v-theme-primary)) !important;
} */

#training{
  display: flex;
  justify-content: center;
}

#app {
  width: 80%;
}

.carousel {
  width: 80%;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  /* background-color: var(--vc-clr-primary); */
  /* color:  var(--vc-clr-white); */
  color: white !important;
  border: 1px solid white !important;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: white !important;
  background-color: black !important;
  border: 1px solid white !important;
}

.carousel__prev {
  transform: translate(-100%, 0);
}

.carousel__next {
  transform: translate(100%, -50%);
}

.carousel__pagination {
  gap: 2%;
  padding: 0;
}

.carousel__pagination-button {
  background-color: grey !important;
  width: 150% !important;
}

.carousel__pagination-button--active {
  background-color: white !important;
}

@media screen and (max-width: 1200px) {
  #header-container {
    height: 150px;
  }

  #header-background {
    font-size: 150px;
  }

  #header {
    font-size: 40px;
  }
}

@media screen and (max-width: 900px) {
  #header-container {
    height: 100px;
  }

  #header-background {
    font-size: 100px;
  }

  #header {
    font-size: 25px;
  }
}

@media screen and (max-width: 600px) {
  #header-container {
    height: 75px;
  }

  #header-background {
    font-size: 75px;
  }

  #header {
    font-size: 20px;
  }
  /* .carousel {
    width: 100vw;
  } */
  .card-content {
    width: 95%;
  }

  .image {
    width: 80px;
  }

  .user-data .name {
    font-size: 18px;
    font-weight: 500;
  }

  .rating-icon {
    font-size: 16px;
  }
}

@media screen and (max-width: 450px) {
  #header-container {
    height: 60px;
  }

  #header-background {
    font-size: 60px;
  }

  #header {
    font-size: 20px;
    transform: translateY(30%);
  }
}
</style>
