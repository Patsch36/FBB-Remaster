<template>
  <div class="weekly-forecast mt-6">
      <div class="container"  v-for="(day, index) in filteredList" :key="index">
          <DailyForecast :day="day" />
      </div>
  </div>
</template>

<script>
import DailyForecast from "@/components/weatherapp/DailyForecast.vue"
export default {
    name: "WeeklyForecast",
    props: ["forecast"],
    components: {DailyForecast},
    computed: {
        filteredList() {
            return this.forecast.daily.slice(1, 8)
        }
    }
}
</script>

<style>
.weekly-forecast{
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}
</style>