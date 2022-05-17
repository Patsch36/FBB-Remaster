<template>
  <header id="header" class="bg-background" style="transform: translateY(0);">
    <div class="header-training">
      <transition name="leftHeader" :key="animationTrigger" appear>
        <span class="header-text header-text-left">TR</span>
      </transition>
      <transition name="imageHeader" appear>
        <img :src="img_src" alt="" class="header-img" />
      </transition>
      <transition name="rightHeader" appear>
        <span class="header-text header-text-right">NG</span>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    img_src: () => {
      return process.env.NODE_ENV === "production"
        ? "./assets/images/index/bki9701.png"
        : "../assets/images/index/bki9701.png";
    },
  },
};
</script>

<style>
#header {
  width: 100%;
  height: 100%;
  background-color: var(--body-color);
  position: relative;
}

#header > .header-training {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  /* transform: translateY(-5%); */
}

.header-text {
  font-size: 259.7px; /* 1.733 is Proportionality factor of header to image*/
  font-style: italic;
  font-weight: bold;
  color: #fffd51;
  transform: translateY(2.5%);
  overflow: visible;
  width: auto;
  z-index: 4;
}
.header-text-left {
  text-align: right;
  width: auto;
}

.header-text-right {
  width: auto;
  transform: translate(-15%, 3%);
}

.header-img {
  height: 450px;
  z-index: 8;
}

.leftHeader-enter-active {
  animation: header-left-keyframe 1s ease-out;
}

.rightHeader-enter-active {
  animation: header-right-keyframe 1s ease-out;
}

.imageHeader-enter-active {
  animation: header-image-keyframe 1s ease-out;
}

@keyframes header-left-keyframe {
  0% {
    opacity: 0;
    transform: translate(-400px, 2.5%);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 2.5%);
  }
}

@keyframes header-right-keyframe {
  0% {
    opacity: 0;
    transform: translate(400px, 3%);
  }
  100% {
    opacity: 1;
    transform: translate(-15%, 3%);
  }
}

@keyframes header-image-keyframe {
  0% {
    opacity: 0;
    transform: translateY(400px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Nesthub and Tablets */
@media screen and (max-width: 1200px) {
  .header-text {
    font-size: 173.1px; /* 1.733 is Proportionality factor of header to image*/
    transform: translateY(2.5%);
    overflow: visible;
    width: auto;
  }

  .header-text-right {
    transform: translate(-10%, 3%);
    overflow: visible;
    width: auto;
  }

  .header-img {
    height: 300px;
    width: auto;
  }
}

/* Smaller Ipads */
@media screen and (max-width: 900px) {
  .header-text {
    font-size: 115.4px; /* 1.733 is Proportionality factor of header to image*/
    transform: translateY(2.5%);
    overflow: visible;
    width: auto;
  }

  .header-text-right {
    transform: translate(-10%, 3%);
    overflow: visible;
    width: auto;
  }

  .header-img {
    height: 200px;
  }
}

/* Smartphones */
@media screen and (max-width: 480px) {
  .header-text {
    font-size: 57.7px; /* 1.733 is Proportionality factor of header to image*/
    transform: translateY(2.5%);
    width: auto;
  }

  .header-text-right {
    transform: translate(-12%, 3%);
    width: auto;
  }

  .header-img {
    height: 100px;
  }
}

/* Smaller Smartphones (and the Galaxy Fold??) */
@media screen and (max-width: 280px) {
  .header-text {
    font-size: 40px; /* 1.733 is Proportionality factor of header to image*/
    transform: translateY(2.5%);
    width: auto;
  }

  .header-img {
    height: 75px;
    width: auto;
  }
}
</style>
