<template>
  <div class="all-shows-by-genre">
    <div class="genre-heading">
      <span>{{ genre }}</span>
      <router-link to="">View more...</router-link>
    </div>
    <carousel
      :mouse-drag="true"
      :navigationEnabled="true"
      :perPageCustom="responsive"
      :paginationEnabled="false"
      navigationPrevLabel="&#8249;"
      navigationNextLabel="&#8250;"
    >
      <slide
        v-for="(show, index) in getListsByGenre(genre).slice(0, 15)"
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
  name: "AllShowsByGenres",
  props: {
    genre: {
      type: String
    }
  },
  data() {
    return {
      responsive: [
        [320, 2],
        [420, 2],
        [768, 3],
        [1024, 5],
        [1200, 7]
      ]
    };
  },
  components: {
    Carousel,
    Slide
  },
  computed: {
    ...mapGetters(["getListsByGenre"])
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
    font-size: 24px;
    padding: 10px;
    text-align: left;
    font-weight: 600;
    a {
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
