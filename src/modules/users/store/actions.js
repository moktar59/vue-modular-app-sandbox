export default {
  addUser({ commit }, text) {
    commit("addUser", {
      text,
      done: false
    });
  }
};
