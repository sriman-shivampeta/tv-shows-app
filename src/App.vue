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
@import url("https://fonts.googleapis.com/css?family=Lato:400,900");
#app {
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #121212;
  color: #ffffff;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.router-view {
  padding-top: 55px;
}

// Loader Style
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-shadow: 0 0 1px #c0c0c075;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  height: 100vh;
  width: 100%;
}

// VueCarousel Style
.VueCarousel {
  .VueCarousel-slide {
    transform: scale(0.9);
    transition: transform 0.2s linear;
    &:hover {
      transform: scale(0.95);
      transition: transform 0.2s linear;
    }
    .card {
      background-color: #292929;
      box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.06),
        0 3px 8px 1px rgba(0, 0, 0, 0.16);
      text-align: center;
      .card-text a {
        cursor: pointer;
        color: #fff;
      }
    }
  }
  .VueCarousel-navigation-button {
    color: #fff !important;
    font-size: 4em !important;
    &:focus {
      outline: none !important;
    }
  }
  .VueCarousel-pagination {
    .VueCarousel-dot {
      border: 1px solid #ffffff;
      margin: 0 3px;
    }
  }
}
</style>
