<template>
  <section
    id="training"
    class="bg-background mb-16 mb-md-12"
    style="height: auto; min-height: 90vh; width: 100vw"
  >
    <v-carousel
      height="400"
      style="width: 60%; margin: auto"
      hide-delimiter-background
      show-arrows="hover"
    >
      <template v-slot:prev="{ props }">
        <v-btn
          variant="plain"
          color="primary"
          @click="props.onClick"
          icon="mdi-chevron-left"
        ></v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          variant="plain"
          color="primary"
          @click="props.onClick"
          icon="mdi-chevron-right"
        ></v-btn>
      </template>
      <template v-for="(item, index) in comments">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1"
          :key="index"
        >
          <v-row class="flex-nowrap" style="height: 100%">
            <template v-for="(n, i) in columns">
              <template v-if="+index + i < comments.length">
                <v-col :key="i">
                  <v-sheet v-if="+index + i < comments.length" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="card-content">
                        <div class="user">
                          <div class="image">
                            <img :src="comments[index + n - 1][0]" alt="" class="profile-img" />
                          </div>

                          <div class="user-data">
                            <span class="name">{{ comments[index + n - 1][1] }}</span>

                            <div class="rating"></div>
                          </div>
                        </div>

                        <span>{{ comments[index + n - 1][2] }} </span>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        ["../assets/images/index/av4.jpg", "Alexander Milonakis", "Läuft"],
        ["../assets/images/index/av1.jpg", "Christina Heppchen", "Viel Platz zum trainieren. Top Trainingsplan bekommen :)"],
         ["../assets/images/index/ad9.jpg", "Marion Elster", "Hammer Cool hier. Fühle mich sehr wohl hier. Auch schon 3kg abgenommen"]
      ],
    };
  },
  computed: {
    columns() {
      if (window.screen.width > 1300) {
        return 2;
      }
      return 1;
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 80%;
  margin: auto;
}

.card-content {
  height: 90%;
  background: inherit;
  border-radius: 20px;
  margin: 20px 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid white;
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;
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
  justify-content: center;
  margin-top: 10px;
  color: var(--text-color);
}

.user-data .name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.card .rating {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
}

.card .rating i {
  font-size: 18px;
  margin: 0 2px;
  color: var(--accent-color);
}

.mdi-chevron-right,
.mdi-chevron-left {
  border: 1px solid rgb(var(--v-theme-primary)) !important;
}
</style>
