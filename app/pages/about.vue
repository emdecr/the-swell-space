<template>
  <main class>
    <h1>About</h1>
    <div v-html="page.content.rendered"></div>
  </main>
</template>

<script>
export default {
  components: {},
  async fetch({ store }) {
    await store.dispatch("content/getPages");
  },
  head() {
    return {
      title: "The Swell Space | About"
    };
  },
  methods: {},
  computed: {
    page() {
      return this.$store.getters["content/getPages"]("about");
    },
    meta() {
      return this.page.meta_box;
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
