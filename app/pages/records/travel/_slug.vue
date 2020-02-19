<template>
  <main>
    <div class="hero">
      <div class="text">
        <h1>A Month in Japan</h1>
        <span class="mono">Feb 18, 2020</span>
      </div>
      <div class="image">
        <img
          src="https://emilydelacruz.com/data/custom/uploads/2020/02/DSCF1740-2.jpg"
          alt="A park in Tokyo. People are looking at cherry blossoms while the setting sun casts long shadows."
          class="wp-image-353"
          srcset="https://emilydelacruz.com/data/custom/uploads/2020/02/DSCF1740-2.jpg 1024w, https://emilydelacruz.com/data/custom/uploads/2020/02/DSCF1740-2.jpg 300w, https://emilydelacruz.com/data/custom/uploads/2020/02/DSCF1740-2.jpg 768w, https://emilydelacruz.com/data/custom/uploads/2020/02/DSCF1740-2.jpg 1536w, https://emilydelacruz.com/data/custom/uploads/2020/02/DSCF1740-2.jpg 1678w"
          sizes="(max-width: 1024px) 100vw, 1024px"
        >
      </div>
    </div>
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
  min-height: 100vh;
}

h1 {
  font-family: serif;
}

.hero {
  height: 100vh;
  display: flex;
  > * {
    width: 50%;
  }
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  object-fit: none;
  object-position: -190% 0%;
  height: 100vh;
}
</style>
