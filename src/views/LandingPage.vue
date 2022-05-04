<template>
<div style="height: auto;"
    class="bg-background" >
  <HeaderTitle />
  <GymPage />
  <TrainingPage />
  <MyGym />
  <div style="height: 100vh;"></div>
</div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle'
import GymPage from '../components/GymPage'
import TrainingPage from '../components/TrainingPage'
import MyGym from '../components/MyGym'


export default {
 components: { HeaderTitle, GymPage, TrainingPage, MyGym },
}
</script>

<style>

</style>