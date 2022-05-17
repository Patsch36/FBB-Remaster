<template>
  <section
    id="training"
    class="bg-background"
    style="
      height: auto;
      min-height: 90vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
    "
  >
    <div id="header-container" class="mb-16">
      <div id="header-background">Kommentare</div>
      <h1 id="header">Was Mitglieder von uns denken</h1>
    </div>

    <Carousel
      :wrapAround="true"
      :breakpoints="breakpoints"
      :autoplay="3000"
      :transition="500"
      style="
        height: 45vh;
        margin-inline: auto;
        margin-top: 5vh;
        margin-bottom: 15vh;
      "
    >
      <Slide v-for="comment in comments" :key="comment" style="height: 35vh">
        <div class="carousel__item" style="height: 35vh; width: 100%">
          <div class="user">
            <div class="image">
              <img :src="comment.img_src" alt="" />
            </div>

            <div class="user-data">
              <span class="name">{{ comment.name }}</span>

              <div class="rating">
                <v-icon
                  v-for="icon in comment.rating"
                  :key="icon"
                  :icon="icon"
                  class="rating-icon"
                  color="primary"
                ></v-icon>
              </div>
            </div>
          </div>

          <span>{{ comment.text }}</span>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>


<script>
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
        {
          img_src: "assets/images/index/av4.jpg",
          name: "Alexander Milonakis",
          rating: [
            "mdi-star",
            "mdi-star",
            "mdi-star",
            "mdi-star",
            "mdi-star-half-full",
          ],
          text: "Läuft",
        },
        {
          img_src: "assets/images/index/av1.jpg",
          name: "Christina Heppchen",
          rating: ["mdi-star", "mdi-star", "mdi-star", "mdi-star", "mdi-star"],
          text: "Viel Platz zum trainieren. Top Trainingsplan bekommen :)",
        },
        {
          img_src: "assets/images/index/ad9.jpg",
          name: "Marion Elster",
          rating: [
            "mdi-star",
            "mdi-star",
            "mdi-star",
            "mdi-star",
            "mdi-star-outline",
          ],
          text: "Hammer Cool hier. Fühle mich sehr wohl hier. Auch schon 3kg abgenommen",
        },
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

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;
}

.carousel__item > span {
  width: 50%;
  margin-inline-start: 5%;
  color: white;
  opacity: 0.7;
  font-size: 125%;
}

.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(
    90deg,
    rgba(122, 122, 122, 1) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  width: 95%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin-block: 15%;
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
  margin-top: 150%;
  font-size: 125%;
  font-weight: 600;
  text-align: center;
}

.rating-icon {
  font-size: 125%;
}

#training {
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
  height: 90%;
  width: 100%;
  background: inherit;
  border-radius: 20px;
  margin: none;
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

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  font-size: 16rem;
  color: white !important;
  background-color: black !important;
  border: 1px solid white !important;
  transition: all 0.5s;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: rgb(var(--v-theme-primary)) !important;
  border-color: rgb(var(--v-theme-primary)) !important;
}

.carousel__prev {
  transform: translate(-100%, -150%);
}

.carousel__next {
  transform: translate(100%, -150%);
}

.carousel__pagination {
  margin-top: 2%;
  gap: 3%;
  padding: 0;
}

.carousel__pagination-button {
  background-color: grey !important;
  height: 30%;
  width: 300%;
}

.carousel__pagination-button--active {
  background-color: rgb(var(--v-theme-primary)) !important;
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

  .carousel__item > span {
    font-size: 100%;
  }

  .user-data .name {
    font-size: 100%;
  }

  .rating-icon {
    font-size: 90%;
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

  .user {
    width: 40%;
  }

  .image {
    width: 150px;
    height: 150px;
    margin-bottom: 15%;
  }

  .user-data .name {
    font-size: 125%;
    font-weight: 500;
  }

  .rating-icon {
    font-size: 150%;
    margin-top: 5%;
  }

  .carousel__item span {
    font-size: 150%;
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

  .carousel__pagination {
    gap: 7%;
  }

  .carousel__pagination-button {
    height: 20%;
    width: 200%;
  }

  .card-content {
    width: 95%;
  }

  .carousel__item span,
  .rating-icon  {
    font-size: 125%;
  }

    .image {
    width: 125px;
    height: 125px;
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
    font-size: 15px;
  }

    .image {
    width: 75px;
    height: 75px;
  }

    .user-data .name {
    font-size: 100%;
  }

    .carousel__item span,
  .rating-icon  {
    font-size: 90%;
  }
}
</style>
