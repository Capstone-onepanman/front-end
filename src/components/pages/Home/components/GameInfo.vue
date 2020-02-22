<template>
  <div class="gameInfo">
    <v-container>
      <v-layout
        row
        wrap
        align-center
        justify-space-around
        fill-height>
        <v-btn
          :disabled="n <= 0"
          icon
          @click="n--">
          <v-icon
            large
            color="pink">mdi-arrow-left-drop-circle</v-icon>
        </v-btn>
        <h1> {{ gameInfo[n].title }} </h1>
        <router-link
          :to="`game/problems/problemIdx${ gameInfo[n].idx }`">
          <img
            :src="gameInfo[n].image"
            class="gameImage"
            @click="this.$store.state.problemIdx=gameInfo[n].idx">
        </router-link>
        <v-btn
          :disabled="n >= gameInfo.length - 1"
          icon
          @click="n++">
          <v-icon
            large
            color="pink">mdi-arrow-right-drop-circle</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'GameInfo',
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
.gameImage{
  height: 300px;
  width: 300px;
}
</style>
