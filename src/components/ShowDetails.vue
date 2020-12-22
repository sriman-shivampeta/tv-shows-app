<template>
  <div class="show-details">
    <div class="showDetail">
      <div class="showDetail__data">
        <template class="loading" v-if="loading">
          Loading...
        </template>
        <template v-else-if="Object.keys(showDetails).length">
          <div class="showDetail__poster">
            <span class="showDetail__poster--fill">
              <transition name="fade">
                <img
                  :src="showDetails.image.original"
                  @load="showImg = true"
                  v-show="showImg"
                /> </transition></span
            ><span class="showDetail__poster--featured"
              ><transition name="fade"
                ><img
                  :src="showDetails.image.medium"
                  @load="showImg = true"
                  v-show="showImg"/></transition
            ></span>
          </div>
          <div class="showDetail__details">
            <h2 class="showDetail__title">{{ showDetails.name }}</h2>
            <p class="showDetail__genres">
              {{ showDetails.genres.join(" | ") }} -
              <a
                href="#showCast"
                @click="showCast = !showCast"
                style="color: #212121;"
              >
                <strong><u>show casts</u></strong>
              </a>
            </p>
            <p class="showDetail__plot" v-html="showDetails.summary"></p>
            <div class="showDetail__credits">
              <b-row>
                <b-col lg="5" md="6" xs="12">
                  <p><strong>Language: </strong> {{ showDetails.language }}</p>
                  <p><strong>Type: </strong> {{ showDetails.type }}</p>
                  <p v-if="showDetails.network !== null">
                    <strong>Network : </strong> {{ showDetails.network.name }}
                  </p>
                  <p>
                    <strong>Schedule : </strong>
                    <span v-for="day in showDetails.schedule.days" :key="day">{{
                      day
                    }}</span>
                    at {{ showDetails.schedule.time }}
                  </p>
                </b-col>
                <b-col lg="5" md="6" xs="12">
                  <p><strong>Show Type : </strong> {{ showDetails.type }}</p>
                  <p><strong>Runtime: </strong> {{ showDetails.runtime }}</p>
                  <p>
                    <strong>Premiered: </strong> {{ showDetails.premiered }}
                  </p>
                  <p>
                    <strong>Rating: </strong>
                    {{ showDetails.rating.average }}/10
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="showDetail" id="showCast" v-if="showCast">
      <div class="showDetail__cast">
        <div v-for="cast in showDetails._embedded.cast" :key="cast.id">
          <a :href="cast.person.url" target="_black">
            <img
              :src="cast.person.image.medium"
              @load="showImg = true"
              v-show="showImg"
            />
            {{ cast.person.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ShowDetails",
  data() {
    return {
      showImg: false,
      showCast: false
    };
  },
  computed: {
    ...mapGetters(["loading", "showDetails"])
  },
  methods: {
    ...mapActions(["getTvShowById"])
  },
  mounted() {
    this.getTvShowById(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
$cardBG: #f2f2f2;

$font-body: "Lato", sans-serif;
$font-heading: $font-body;
$base-spacing: 20px;
$base-radius: 0.8em;
$base-trans-spd: 0.4s;
$poster-width: 140px;
$poster-span: 200px;
$bp-md: 1024px;
$bp-sm: 400px;
.show-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: $base-spacing;
  min-height: 100vh;
  font-family: $font-body;
  background-color: #121212;
}
.list {
  &--inline li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: $base-spacing;
    }
  }
}

.showDetail {
  position: relative;
  overflow: hidden;
  margin: $base-spacing auto;
  width: 90%;
  background-color: white;
  border-radius: $base-radius;
  box-shadow: rgba(0, 0, 0, 0.2) 0 30px 18px 6px;

  @media (min-width: $bp-sm) and (max-width: $bp-md) {
    width: 95%;
  }

  &__data {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: $poster-span * 2;

    @media (min-width: $bp-md) {
      flex-direction: row;
    }
  }

  &__cast {
    // color: #121212;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
    text-align: center;

    div {
      background-color: #292929;
      a {
        color: #fff;
        img {
          width: 100%;
        }
      }
    }
  }

  &__search {
    position: absolute;
    top: $base-spacing * 2;
    right: $base-spacing * 2;
    margin: auto;
    width: calc(100% - (#{$base-spacing} * 4));

    @media (min-width: $bp-sm) {
      max-width: 200px;
    }
  }

  &__genres {
    font-size: 0.75em;
    color: darkgray;
    padding: 0;
  }

  &__plot {
    text-align: justify;
  }

  &__credits p {
    margin-bottom: 0.5rem;
  }

  &__poster {
    position: relative;
    display: flex;
    width: 100%;
    transform: translateZ(0);

    @media (min-width: $bp-md) {
      margin-right: $base-spacing;
      width: $poster-span;
    }

    &--fill {
      position: absolute;
      overflow: hidden;
      top: -80%;
      bottom: -20%;
      left: -20%;
      width: 150%;
      height: 150%;
      background-color: gainsboro;
      transform: rotate(5deg);

      @media (min-width: $bp-md) {
        top: -20%;
        width: 100%;
      }

      img {
        filter: blur(6px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        transform: scale(1.4);
      }
    }

    &--featured {
      position: relative;
      display: block;
      align-self: center;
      margin-top: $base-spacing * 7;
      margin-left: $base-spacing * 2;
      // width: $poster-width;
      background-color: lightgray;
      border-radius: 2px;
      z-index: 1;

      @media (min-width: $bp-md) {
        left: $poster-width / 2.5;
        margin: auto;
      }

      img {
        display: block;
        width: 100%;
        box-shadow: rgba(black, 0.6) 0 6px 12px -6px;

        &[src="N/A"] {
          min-height: 206px;
          opacity: 0;
        }
      }
    }
  }

  &__details {
    flex: 1;
    padding: $base-spacing * 2;
    color: #121212;

    @media (min-width: $bp-md) {
      padding: $base-spacing * 3;
    }
  }

  &__title {
    font-family: $font-heading;
    font-size: 2em;
  }

  &__error {
    align-self: center;
    justify-self: center;
    width: 100%;
    text-align: center;
  }
}

// Animations and transitions
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $base-trans-spd;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity $base-trans-spd, transform $base-trans-spd;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
