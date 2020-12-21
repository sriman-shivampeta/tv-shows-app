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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #121212;
  color: #ffffff;
  height: 100%;
  min-height: 100vh;
}
.router-view {
  padding-top: 55px;
}
</style>
