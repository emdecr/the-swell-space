export const state = () => ({
  japan: [],
  pages: []
});

export const mutations = {
  setJapan(state, payload) {
    state.japan = payload;
  }
};

export const actions = {
  async getJapan({ commit, dispatch }) {
    await this.$axios
      .$get(process.env.CMS_API_URL + "/wp-json/records/v1/tag/3")
      .then(function(response) {
        commit("setJapan", response.posts);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export const getters = {
  contentJapan(state) {
    //   Sort posts by menu_order inputted in cms
    let sorted = [...state.japan].sort((a, b) =>
      a.menu_order > b.menu_order ? 1 : -1
    );
    return sorted;
  }
};
