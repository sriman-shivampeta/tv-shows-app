<template>
  <div class="dashboard">
    <all-shows-by-genres
      v-for="genre in allGenres"
      :key="genre.id"
      :genre="genre"
    ></all-shows-by-genres>
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
    ...mapGetters(["showsList"]),
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
