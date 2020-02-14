<template>
  <div class="home">
    <game-info/>>
  </div>
</template>

<script>
import GameInfo from './components/GameInfo.vue'

export default {
  name: 'Home',
  components: {
    GameInfo
  }
}
</script>

<style lang="scss">
  .row-equal .flex {
    .va-card {
      height: 100%;
    }
  }
  .home {
    text-align: center;
    .va-card {
      margin-bottom: 0 !important;
      text-align: center;
    }
  }
</style>
