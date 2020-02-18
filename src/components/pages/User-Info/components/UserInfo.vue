<template>
  <div class="userInfo">
      <v-container>
          <v-layout
            row
            wrap
            align-center
            justify-space-around
            fill-height>
            
          </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data () {
        return {
            language: "python",
            heart: 3,
            isCodeOpen: false,
            group: 1,
            date: "2020-02-14"
        }
  }
}
</script>

<style>

</style>