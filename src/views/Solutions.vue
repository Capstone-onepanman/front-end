<template>
  <div
    id="codemirror"
    class="editor">
    <code-mirror/>
    {{ problemIdx }} editor
  </div>
</template>

<script>
import CodeMirror from '../components/pages/Game/components/CodeMirror.vue'

export default {
  name: 'Codemirror',
  components: {
    CodeMirror
  },
  computed: {
    problemIdx () {
      const problemIdx = this.$store.state.problemIdx
      console.log(`>>>>>>>>>>>>>>>>>${problemIdx}`)
      return problemIdx
    }
  },
  created () {
    const problemIdx = this.$route.params.idx
    this.$store.dispatch('FETCH_PROBLEM_IDX', problemIdx)
  }
}
</script>

<style>

</style>
