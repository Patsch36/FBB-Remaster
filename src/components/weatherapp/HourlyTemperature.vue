<template>
  <div class="hourly-temperature text-text_dark">
    <span class="d-flex justify-center">
      {{
        new Date(this.time.dt * 1000).toLocaleString("de-DE", {
          hour: "numeric",
        })
      }}
    </span>
    <span class="d-flex justify-center">
      <img
        :src="
          require(`../../../public/conditions/${this.time.weather[0].icon}.svg`)
        "
        alt=""
      />
    </span>
    <span class="d-flex justify-center">{{ Math.round(this.time.temp) }}&deg;</span>
  </div>
</template>

<script>
export default {
  name: "HourlyTemperature",
  props: ["time"],
};
</script>

<style scoped>
.hour {
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 45px;
  margin-right: 30px;
}
img {
  width: auto;
  height: 22px;
  display: block;
}
span {
  display: block;
  align-self: center;
}
span:nth-child(1) {
  font-weight: 300;
  margin-bottom: 12px;
}
span:nth-child(2) {
  margin-bottom: 12px;
}
span:nth-child(3) {
  font-weight: 500;
}
</style>