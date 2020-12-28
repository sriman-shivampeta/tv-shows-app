<template>
  <div class="shows-on-selected-genre">
    <div v-if="loading">
      Loading...
    </div>
    <template v-else-if="Object.keys(getShowsByGenre(genre)).length">
      <b-container fluid>
        <b-button class="back-btn" v-router-back>Go back</b-button>
        <div class="genre-heading">Showing "{{ genre }}" Tv shows</div>
        <b-row>
          <b-col
            lg="2"
            md="3"
            sm="4"
            cols="6"
            v-for="show in getShowsByGenre(genre)"
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
                  ><br />{{ show.language }} | {{ show.rating.average }}
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
import { mapGetters } from "vuex";
export default {
  name: "ShowsBySelectedGenre",
  data() {
    return {
      genre: this.$route.params.genre
    };
  },
  computed: {
    ...mapGetters(["loading", "getShowsByGenre"])
  }
};
</script>

<style lang="scss" scoped></style>
