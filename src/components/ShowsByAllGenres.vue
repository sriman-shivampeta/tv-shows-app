<template>
  <div class="all-shows-by-genre">
    <div class="genre-heading">
      <span>{{ genre }}</span>
      <router-link
        v-if="hideViewBtn === 'true'"
        :to="{
          name: 'Selected Genre',
          params: { genre: genre }
        }"
        >View more...</router-link
      >
    </div>
    <carousel
      v-bind="carouselOptions"
      :perPageCustom="[
        [320, 2],
        [420, 2],
        [768, 3],
        [1024, 5],
        [1200, 7]
      ]"
    >
      <slide
        v-for="(show, index) in getShowsByGenre(genre).slice(0, 15)"
        :key="index"
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
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapGetters } from "vuex";

export default {
  name: "ShowsByAllGenres",
  props: {
    genre: {
      type: String
    },
    hideViewBtn: {
      type: String
    },
    carouselOptions: {
      type: Object
    }
  },
  components: {
    Carousel,
    Slide
  },
  computed: {
    ...mapGetters(["getShowsByGenre"])
  }
};
</script>

<style lang="scss" scoped>
.all-shows-by-genre {
  margin: 0 3%;
  .genre-heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    a {
      color: var(--white);
      font-size: 16px;
    }
  }
}
</style>
