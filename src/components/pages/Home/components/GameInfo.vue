<template>
  <div class="gameInfo">
    <button
      :disabled="n <= 0"
      @click="n--">
      <i class="fas fa-heart"/>
    </button>
    <h1> {{ gameInfo[n].title }} </h1>
    <router-link
      :to="`game/problems/problemIdx${ gameInfo[n].idx }`">
      <img
        :src="gameInfo[n].image"
        class="gameImage"
        @click="this.$store.state.problemIdx=gameInfo[n].idx">
    </router-link>
    <button
      :disabled="n >= gameInfo.length - 1"
      @click="n++"
    > right </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      n: 0,
      gameInfo: [
        {
          idx: '01',
          title: 'game Title 01',
          image: '/123.jpg'
        },
        {
          idx: '02',
          title: 'game Title 02',
          image: '/12123646.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
