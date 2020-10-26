export default {
  addPost({ commit }, text) {
    commit('addPost', {
      text,
      done: false
    });
  }
}