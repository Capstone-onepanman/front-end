<template>
  <div class="home">
    <v-container class="homeBox">
      <v-layout
        row
        wrap
        align-center
        justify-space-between
        fill-height>
        <game-info/>
      </v-layout>
      <v-layout
        row
        wrap
        align-center
        justify-space-between
        fill-height>
        <small-notice/>
        <small-profile/>
      </v-layout>
      <v-layout
        row
        wrap
        align-center
        justify-space-between
        fill-height>
        <best-group/>
        <anything/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import GameInfo from './components/GameInfo.vue'
import SmallNotice from './components/SmallNotice.vue'
import SmallProfile from './components/SmallProfile.vue'
import BestGroup from './components/BestGroup.vue'
import Anything from './components/Anything.vue'

export default {
  name: 'Home',
  components: {
    GameInfo,
    SmallNotice,
    SmallProfile,
    BestGroup,
    Anything
  }
}
</script>

<style lang="scss">
  .row-equal .flex {
    .va-card {
      height: 100%;
    }
  }
  .homeBox{
    width: 1200px;
  }
</style>
