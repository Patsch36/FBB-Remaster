<template>
  <div class="modal" ref="modal">
    <v-form class="pa-6 bg-red-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="8" md="10">
            <v-text-field
              label="Enter Location"
              variant="underlined"
              placeholder="Search by city name"
              v-model="city"
              color="red-darken-4"
              clearable
              clear-icon="mdi-delete"
              hide-details="auto"
              prepend-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="1" style="padding-inline: 0">
            <v-btn
              icon
              class="text-h6 text-sm-h5"
              fab
              dark
              large
              color="transparent"
              style="box-shadow: none"
              @click="addCity"
            >
              <v-icon class="text-red-darken-4">mdi-plus-circle</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="2" md="1" style="padding-inline: 0">
            <v-btn
              icon
              class="text-h6 text-sm-h5"
              @click="closeModal"
              fab
              dark
              large
              color="transparent"
              style="box-shadow: none"
            >
              <v-icon class="text-red-darken-4"
                >mdi-close-circle-outline</v-icon
              >
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import app from "../../firebase/firebase_init";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "modalComponent",
  props: {
    APIkey: String,
    cities: Object,
  },
  data() {
    return {
      city: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    async addCity() {
      if (this.city === "") {
        alert("Field can not be empty");
      } else if (
        this.cities.some((res) => res.city === this.city.toLowerCase())
      ) {
        alert(`${this.city} existiert bereits.`);
      } else {
        try {
          const response = await axios.get(
            `http://localhost:3000/?q=${this.city}&units=metric`
          );
          const data = await response.data;

          const db = getFirestore(app);

          setDoc(doc(db, "cities", uuidv4()), {
            city: this.city.toLowerCase(),
            currentWeather: data,
          }).then(() => {
            this.$emit("new-city", { city: this.city.toLowerCase(), currentWeather: data });
          });
        } catch {
          alert(
            `${this.city} existiert nicht. Bitte einen korrekten Namen eingeben.`
          );
        }
      }
    },
  },
};
</script>

<style>
</style>