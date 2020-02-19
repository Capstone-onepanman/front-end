<template>
  <div class="profile">
      <v-container>
            <user-card class="card"/>
            <v-layout
                row
                wrap
                align-center
                justify-space-around
                fill-height>
            </v-layout>
            <user/>
            <v-layout
                row
                wrap
                align-center
                justify-space-around
                fill-height>
                <user-info/>
            </v-layout>
      </v-container>
  </div>
</template>

<script>
import User from "./components/User.vue"
import UserInfo from "./components/UserInfo.vue"
import UserCard from "./components/UserCard.vue"

export default {
    name: 'Profile',
    components: {
        User,
        UserInfo,
        UserCard
    }
}
</script>

<style>
.card{
    left: -500px;
    position: fixed;
}
</style>