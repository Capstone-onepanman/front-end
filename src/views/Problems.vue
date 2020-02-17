<template>
  <div class="problems">
    <ul>
      <li
        v-for="(idx, i) in problemsSrc"
        :key="i"
        :to="`problems/problemIdx01`">
        <router-link
          :to="`problems/problemIdx${ idx.id }`">
          <img
            :src="idx.image"
            class="image">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      problemsSrc: [
        {
          id: '01',
          image: '/123.jpg'
        },
        {
          id: '02',
          image: '/12123646.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.problems {
  height: 550px;
}
.image{
  width: 300px;
  list-style-image: none;
}
</style>
