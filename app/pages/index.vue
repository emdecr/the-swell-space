<template>
  <main class="flex-all flex--ai-c flex--jc-c">
    <section class="mono">
      <p>Expand and contract</p>source:
      <a href="https://emilydelacruz.com">emilydelacruz.com</a>
      <br>email:
      <a href="mailto:hello@emilydelacruz.com">hello@emilydelacruz.com</a>
      <br>twitter:
      <a href="https://twitter.com/emdecr" target="_blank">@emdecr</a>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  async fetch({ store }) {}
};
</script>

<style lang="scss" scoped>
main {
  min-height: 80vh;
  font-size: 0.8rem;
}

p {
  margin-bottom: 1rem;
}
</style>
