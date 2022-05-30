<template>
  <article class="card">
    <img :src="img_src" class="background-img" />
    <div class="card_content text-black" @click="openNewTab">
      <span class="text-subtitle-1 text-sm-h6 card_title"> {{ news.title }} </span>
      <p class="card_description mt-5"> {{ news.description }} </p>
    </div>
  </article>
</template>

<script>
export default {
    props: ["news"],
    data() {
        return{
            img_src: null
        }
    },
  created(){
      if(this.news.img === undefined){
          this.img_src = "https://www.bierverlag-kessler.de/index_htm_files/57080@2x.png";
      } else{
          this.img_src = this.news.img
      }
  },
  methods: {
      openNewTab(){
          window.open(this.news.link)
      }
  }
};
</script>

<style>
.background-img {
  z-index: -2;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.card {
  position: relative;
  width: 350px;
  height: 350px;
  background-size: cover;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;
}

.card_description{
    font-size: 16px !important;
}

@media screen and (max-width:400px) {
.card {
  width: 250px;
  height: 250px;

}

.card_title{
    font-size: 14px !important;
}

.card_description{
    font-size: 10px;
}
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: calc(60% + 35px);
  background-color: #ffff;
  transition: transform 0.5s 0.25s ease-in;
  z-index: -1;
}

.card::before {
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
  transform: translateY(-100%);
}

.card::after {
  bottom: 0;
  clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
  transform: translateY(100%);
}

.card_content {
  opacity: 0;
  transform: opacity 0.25s;
  padding: 20px;
  cursor: pointer;
}

.card:hover::before,
.card:hover::after {
  transform: translateY(0%);
}

.card:hover .card_content {
  opacity: 1;
  transition-delay: 0.75s;
}
</style>