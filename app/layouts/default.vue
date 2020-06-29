<template>
  <div>
    <nuxt-link
      class="skip-main mono"
      :to="{ path: $route.path,hash:'main-content'}"
    >Skip to main content</nuxt-link>
    <v-header/>
    <transition name="fade">
      <nuxt id="main-content"/>
    </transition>
    <v-footer/>
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
export default {
  components: {
    "v-header": Header,
    "v-footer": Footer
  }
};
</script>


<style>
</style>
