<template>
  <div class="header">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand>Tv Shows</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">All Shows</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned Search items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search for show...!"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() {
    this.$store.dispatch("getAllTvShows");
  }
};
</script>

<style lang="scss" scoped></style>
