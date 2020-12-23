<template>
  <div class="popular-shows">
    <div class="genre-heading">
      <span>Popular</span>
    </div>
    <carousel
      :mouse-drag="true"
      :autoplay="true"
      :autoplayTimeout="3000"
      :autoplayHoverPause="true"
      :loop="true"
      paginationActiveColor="#585858"
      :paginationPadding="2"
      :navigationEnabled="false"
      :perPageCustom="[
        [320, 2],
        [420, 2],
        [768, 3],
        [1024, 5],
        [1200, 7]
      ]"
      :paginationEnabled="true"
    >
      <slide v-for="(show, index) in getPopularShows.slice(0, 10)" :key="index">
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
  name: "PopularShows",
  components: {
    Carousel,
    Slide
  },
  computed: {
    ...mapGetters(["showsList"]),
    getPopularShows() {
      return this.showsList;
    }
  }
};
</script>

<style lang="scss" scoped>
.popular-shows {
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
