<template>
  <div class="page-not-found">
    Didn't find the url your searching.
    <router-link to="/">Goto Dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  flex-flow: column;
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
</style>
