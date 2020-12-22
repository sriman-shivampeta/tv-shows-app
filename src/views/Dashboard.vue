<template>
  <div class="dashboard">
    <div class="loader" v-if="loading">
      <h2>Loading...</h2>
    </div>
    <template v-else>
      <all-shows-by-genres
        v-for="genre in allGenres"
        :key="genre.id"
        :genre="genre"
      ></all-shows-by-genres>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AllShowsByGenres from "../components/AllShowsByGenres.vue";
export default {
  name: "Dashboard",
  components: {
    AllShowsByGenres
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
