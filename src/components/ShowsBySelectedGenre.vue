<template>
  <div class="shows-on-selected-genre">
    <div v-if="loading">
      Loading...
    </div>
    <template v-else-if="Object.keys(getListsByGenre(genre)).length">
      <b-container fluid>
        <div class="genre-heading">Showing "{{ genre }}" Tv shows</div>
        <b-row>
          <b-col
            lg="2"
            md="3"
            sm="4"
            cols="6"
            v-for="show in getListsByGenre(genre)"
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
    ...mapGetters(["loading", "getListsByGenre"])
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
