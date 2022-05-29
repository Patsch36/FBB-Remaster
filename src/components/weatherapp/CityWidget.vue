<template>
  <v-container style="position: relative" @click="gotoWeather">
    <v-icon ref="edit" class="edit" v-if="edit" @click="removeCity"
      >mdi-delete</v-icon
    >
    <v-row class="my-6 mx-3" style="aspect-ratio: 4/3">
      <v-col
        cols="12"
        class="text-h4 text-sm-h3 text-left text-white"
        style="z-index: 1"
        >{{ this.city.city.toUpperCase() }}
      </v-col>
      <v-col
        cols="12"
        class="text-h4 text-sm-h3 text-right d-flex justify-end text-white"
        style="z-index: 1; height: 25px; margin-block: auto 40px"
      >
        {{ Math.round(this.city.currentWeather.main.temp) }}&deg;
        <img
          class="weather-icon"
          :src="
            require(`../../../public/conditions/${this.city.currentWeather.weather[0].icon}.svg`)
          "
        />
      </v-col>
      <div class="video">
        <video
          autoplay
          loop
          muted
          :src="
            require(`../../../public/videos/${this.city.currentWeather.weather[0].icon}.mp4`)
          "
        ></video>
        <div class="bg-overlay"></div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import app from "@/firebase/firebase_init";
import {
  doc,
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  updateDoc,
  deleteField
} from "firebase/firestore";

export default {
  name: "CityWidget",
  props: ["city", "edit"],
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async removeCity() {
      const db = getFirestore(app);

      const colRef = collection(db, "cities");

      const q = await query(colRef, where("city", "==", `${this.city.city}`));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (document) => {
        const cityRef = await doc(db, "cities", `${document.id}`);

        // Firebase does not delete field, only the document. 
        // Somehow, fields can still accessed with the deleted reference, so it's better to delete the fields first.
        // The function for deleting collection, however, is not activated for the net (Why, Google?!)
        await updateDoc(cityRef, {
          city: deleteField(),
        });
         
        await deleteDoc(cityRef).then(() => {
          // console.log(this.city.city)
          this.$emit("remove-city-from-array", this.city.city)
        })

      });
    },
    gotoWeather(){

        if(!this.edit){
        this.$emit('cancel-add-city')
        this.$router.push({name: "WetterDetails", params: {city: this.city.city}} )
      }
    }
  },
};
</script>

<style scoped>
.weather-icon {
  height: 45px;
  width: 45px;
  margin: auto 5px;
}

.video {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: fill;
}

video {
  height: 100%;
}

@media screen and (min-width: 900px) {
  video {
    height: 100%;
    width: auto;
  }
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
}

.edit {
  border-radius: 0px 15px 0 0;
  border: 10px solid rgb(77, 77, 77);
  background-color: rgb(77, 77, 77);
  z-index: 10;
  font-size: 35px;
  padding: 15px 15px 12px 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: lightgray;
}
</style>