export const state = () => ({
  posts: [],
  pages: []
});

export const mutations = {
  setPages(state, payload) {
    state.pages = payload;
  }
};

export const actions = {
  async getPages({ state, commit, dispatch }) {
    if (state.pages.length == 0) {
      await this.$axios
        .$get(process.env.CMS_API_URL + "/wp-json/wp/v2/pages?per_page=50")
        .then(function(response) {
          commit("setPages", response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};

export const getters = {
  getPages: state => slug => state.pages.filter(p => p.slug == slug)[0]
};
