<template>
  <div class="userInfo">
    <user-info/>
  </div>
</template>

<script>
import UserInfo from '../components/pages/User-Info/UserInfo.vue'

export default {
  name: 'UserProfile',
  components: {
    UserInfo
  }
}
</script>
