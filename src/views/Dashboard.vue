<template>
  <div class="dashboard">
    <div class="loader" v-if="loading">
      <h2>Loading...</h2>
    </div>
    <template v-else>
      <shows-by-all-genres
        v-for="genre in allGenres"
        :key="genre.id"
        :genre="genre"
      ></shows-by-all-genres>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShowsByAllGenres from "../components/ShowsByAllGenres.vue";
export default {
  name: "Dashboard",
  components: {
    ShowsByAllGenres
  },
  computed: {
    ...mapGetters(["loading", "showsList"]),
    allGenres() {
      let getGenres = [];
      this.showsList.map(shows => {
        getGenres.push(...shows.genres);
      });
      getGenres.sort();
      return Array.from(new Set(getGenres));
    }
  }
};
</script>
