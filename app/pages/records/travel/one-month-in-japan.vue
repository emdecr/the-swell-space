<template>
  <main class="japan main">
    <nav>
      <ul class="mono">
        <li>
          <nuxt-link to="#intro">Intro</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#kyoto">Kyoto</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#hiroshima">Hiroshima</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#kanazawa">Kanazawa</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#toyko">Tokyo</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#osaka">Osaka</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#outro">Outro</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="hero">
      <div class="text" data-aos="fade-in" data-aos-duration="1000">
        <h1>A Month in Japan</h1>
        <!-- <p>The Swell Space</p> -->
        <span class="mono">April 10, 2019</span>
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
    <div id="intro" class="content" v-html="intro.post_content"></div>
    <h2 class="container">{{prep.post_title}}</h2>
    <div class="content" v-html="prep.post_content"></div>
    <img
      src="https://theswell.space/data/custom/uploads/2020/02/IMG_E5897.jpg"
      alt="Black and white photo of an airport. The view is from the inside. The viewer is looking at an airplane parked at the gate."
      class="full-width"
    >
    <h2 class="container">{{kyoto.post_title}}</h2>
    <div id="kyoto" class="content" v-html="kyoto.post_content"></div>
    <video
      ref="video"
      src="http://emilydelacruz.com/files/test.mp4"
      playsinline
      muted
      loop
      autoplay
    ></video>
    <h2 class="container">{{hiroshima.post_title}}</h2>
    <div id="hiroshima" class="content" v-html="hiroshima.post_content"></div>
    <video
      ref="video"
      src="http://emilydelacruz.com/files/test.mp4"
      playsinline
      muted
      loop
      autoplay
    ></video>
    <h2 class="container">{{kanazawa.post_title}}</h2>
    <div id="kanazawa" class="content" v-html="kanazawa.post_content"></div>
    <video
      ref="video"
      src="http://emilydelacruz.com/files/test.mp4"
      playsinline
      muted
      loop
      autoplay
    ></video>
    <h2 class="container">{{tokyo.post_title}}</h2>
    <div id="tokyo" class="content" v-html="tokyo.post_content"></div>
    <video
      ref="video"
      src="http://emilydelacruz.com/files/test.mp4"
      playsinline
      muted
      loop
      autoplay
    ></video>
    <h2 class="container">{{osaka.post_title}}</h2>
    <div id="osaka" class="content" v-html="osaka.post_content"></div>
    <video
      ref="video"
      src="http://emilydelacruz.com/files/test.mp4"
      playsinline
      muted
      loop
      autoplay
    ></video>
    <h2 class="container">{{outro.post_title}}</h2>
    <div id="end" class="content" v-html="outro.post_content"></div>
  </main>
</template>

<script>
export default {
  components: {},
  async fetch({ store }) {
    await store.dispatch("uniqueContent/getJapan");
  },
  computed: {
    intro() {
      return this.content[0];
    },
    prep() {
      return this.content[1];
    },
    kyoto() {
      return this.content[2];
    },
    hiroshima() {
      return this.content[3];
    },
    kanazawa() {
      return this.content[4];
    },
    tokyo() {
      return this.content[5];
    },
    osaka() {
      return this.content[6];
    },
    outro() {
      return this.content[7];
    },
    content() {
      return this.$store.getters["uniqueContent/contentJapan"];
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}

h1 {
  font-family: serif;
  font-size: 90px;
  line-height: 1;
  font-family: miller-banner, serif;
}

p {
  font-family: miller-banner, serif;
}

.hero {
  height: 70vh;
  display: flex;
  > * {
    width: 50%;
  }
}

.text {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  background-image: url("https://emilydelacruz.com/files/topography-edit.svg");
  .mono {
    font-size: 0.8rem;
  }
}

.hero img {
  //   object-fit: none;
  //   object-position: -190% 0%;
  object-fit: cover;
  width: 100%;
  height: 70vh;
}

.content {
  max-width: 650px;
  margin: 0 auto;
  padding: 4rem 0;
}

video {
  width: 100vw;
}

nav {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100vw;
  background: white;
  border-top: 1px solid #e3e3e3;
  ul {
    margin: 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    li {
      width: 16%;
      text-align: center;
      font-size: 0.8rem;
    }
  }
}

.full-width {
  width: 100vw;
  height: 70vh;
  object-fit: cover;
}
</style>
