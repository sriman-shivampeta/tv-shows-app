<template>
  <div class="header">
    <b-navbar fixed="top" toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand>Tv Shows</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">All Shows</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned Search items -->
        <b-navbar-nav class="ml-auto">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search for show...!"
            v-model="searchTVShows"
            @keypress.enter="searchShowsFunc"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" @click="searchShowsFunc"
            >Search</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      searchTVShows: ""
    };
  },
  methods: {
    ...mapActions(["getAllTvShows"]),
    searchShowsFunc() {
      this.$router.push({
        name: "ShowsByUserQuery",
        params: { searchTVShowVal: this.searchTVShows }
      });
      this.searchTVShows = "";
    }
  },
  created() {
    this.getAllTvShows();
  }
};
</script>

<style lang="scss" scoped></style>
