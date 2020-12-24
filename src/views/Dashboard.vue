<template>
  <div class="dashboard">
    <div class="loader" v-if="loading">
      <h2>Loading...</h2>
    </div>
    <template v-else>
      <!-- Popular Shows -->
      <shows-by-all-genres
        genre="Popular"
        hideViewBtn="false"
        :carouselOptions="popularShowCarouselOptions"
      ></shows-by-all-genres>
      <!-- All Genres -->
      <shows-by-all-genres
        v-for="genre in allGenres"
        :key="genre.id"
        :genre="genre"
        hideViewBtn="true"
        :carouselOptions="allGenreCarouselOptions"
      ></shows-by-all-genres>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShowsByAllGenres from "../components/ShowsByAllGenres.vue";
export default {
  name: "Dashboard",
  data() {
    return {
      popularShowCarouselOptions: {
        navigationEnabled: false,
        mouseDrag: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        paginationActiveColor: "#585858",
        paginationPadding: 2
      },
      allGenreCarouselOptions: {
        navigationEnabled: true,
        mouseDrag: false,
        paginationEnabled: false,
        navigationPrevLabel: "&#8249;",
        navigationNextLabel: "&#8250;"
      }
    };
  },
  components: {
    ShowsByAllGenres
  },
  computed: {
    ...mapGetters(["loading", "showsList"]),
    allGenres() {
      const getGenres = [];
      this.showsList.map(shows => {
        getGenres.push(...shows.genres);
      });
      return Array.from(new Set(getGenres)).sort();
    }
  }
};
</script>
