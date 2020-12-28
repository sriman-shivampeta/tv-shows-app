<template>
  <div id="app">
    <Header />
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: var(--font-family-lato);
  background-color: #121212;
  color: var(--white);
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.router-view {
  padding-top: 55px;
}

// VueCarousel Style
.VueCarousel {
  .VueCarousel-navigation-button {
    color: var(--white) !important;
    font-size: 4em !important;
    &:focus {
      outline: none !important;
    }
  }
  .VueCarousel-pagination {
    .VueCarousel-dot {
      border: 1px solid var(--white);
      margin: 0 3px;
    }
  }
}
</style>
