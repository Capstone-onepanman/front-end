<template>
  <div class="home">
    <home-page/>
  </div>
</template>

<script>
import HomePage from '../components/pages/Home/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  },
  created () {
    console.log('homehomehome sweet home')
  }
}
</script>
