<template>
  <div class="shows-by-userQuery">
    <div v-if="loading">
      Loading...
    </div>
    <template v-else-if="Object.keys(searchedShows).length">
      <b-container fluid>
        <div class="genre-heading">
          Tv shows based on search "{{ searchTVShowVal }}"
        </div>
        <b-row>
          <b-col
            lg="2"
            md="3"
            sm="4"
            cols="6"
            v-for="show in getSearchedShows"
            :key="show.id"
          >
            <b-card v-if="show.image" :img-src="show.image.medium" img-top>
              <b-card-text>
                <router-link
                  :to="{
                    name: 'ShowDetails',
                    params: { id: show.id, name: show.name }
                  }"
                >
                  <span>{{ show.name }}</span
                  ><br />{{ show.language }} |
                  {{ show.rating.average | rating }}
                </router-link>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ShowsByUserQuery",
  data() {
    return {
      searchTVShowVal: this.$route.params.searchTVShowVal
    };
  },
  filters: {
    rating: function(value) {
      return value === null ? "NA" : value;
    }
  },
  methods: {
    ...mapActions(["getTvShowsByName"])
  },
  computed: {
    ...mapGetters(["loading", "searchedShows"]),
    getSearchedShows() {
      return this.searchedShows
        .map(getShow => getShow.show)
        .filter(show => show.image !== null)
        .sort((showA, showB) => {
          var ratingA = showA.rating.average;
          var ratingB = showB.rating.average;
          return ratingB - ratingA;
        });
    }
  },
  created() {
    this.getTvShowsByName(this.searchTVShowVal);
  },
  watch: {
    "$route.params.searchTVShowVal"(newValue) {
      this.searchTVShowVal = newValue;
      this.getTvShowsByName(newValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.genre-heading {
  font-size: 24px;
  padding: 10px;
  text-align: left;
  font-weight: 600;
}
.card {
  background-color: #292929;
  box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.06),
    0 3px 8px 1px rgba(0, 0, 0, 0.16);
  text-align: center;
  transform: scale(0.9);
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(0.95);
    transition: transform 0.2s linear;
  }
  .card-text a {
    cursor: pointer;
    color: #fff;
  }
}
</style>
