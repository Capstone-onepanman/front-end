// https://vuex.vuejs.org/en/actions.html

export default {
  //
  FETCH_PROBLEM_IDX (context, idx) {
    context.commit('SET_PROBLEM_IDX', idx)
  }
}
