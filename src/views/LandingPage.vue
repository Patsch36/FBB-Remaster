<template>
<div style="height: auto;"
    class="bg-background" >
  <HeaderTitle />
  <GymPage />
  <TrainingPage />
  <MyGym />
  <CommentSlider />
</div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle'
import GymPage from '../components/GymPage'
import TrainingPage from '../components/TrainingPage'
import MyGym from '../components/MyGym'
import CommentSlider from '../components/CommentSlider'


export default {
 components: { HeaderTitle, GymPage, TrainingPage, MyGym, CommentSlider },
}
</script>

<style>

</style>