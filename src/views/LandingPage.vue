<template>
<div style="height: auto;"
    class="bg-background" >
  <HeaderTitle />
  <GymPage />
  <TrainingPage />
  <MyGym />
  <CommentSlider />
  <PriceSection />
</div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle'
import GymPage from '../components/GymPage'
import TrainingPage from '../components/TrainingPage'
import MyGym from '../components/MyGym'
import CommentSlider from '../components/CommentSlider'
import PriceSection from '../components/PriceSection'


export default {
 components: { HeaderTitle, GymPage, TrainingPage, MyGym, CommentSlider, PriceSection },
}
</script>

<style>

</style>