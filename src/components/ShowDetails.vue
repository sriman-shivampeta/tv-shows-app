<template>
  <div class="show-details">
    <b-container fluid>
      <b-button class="back-btn" v-router-back>Go back</b-button>
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
                    <p>
                      <strong>Language: </strong> {{ showDetails.language }}
                    </p>
                    <p><strong>Type: </strong> {{ showDetails.type }}</p>
                    <p v-if="showDetails.network !== null">
                      <strong>Network : </strong> {{ showDetails.network.name }}
                    </p>
                    <p>
                      <strong>Schedule : </strong>
                      <span
                        v-for="day in showDetails.schedule.days"
                        :key="day"
                        >{{ day }}</span
                      >
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
                v-if="cast.person.image"
                :src="cast.person.image.medium"
                @load="showImg = true"
                v-show="showImg"
              />
              <img
                v-else
                src="@/assets/images/no_image.png"
                @load="showImg = true"
                v-show="showImg"
              />
              {{ cast.person.name }}
            </a>
          </div>
        </div>
      </div>
    </b-container>
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
.show-details {
  min-height: 100vh;
  font-family: var(--font-family-lato);
  background-color: #121212;
}
.list {
  &--inline li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}

.showDetail {
  position: relative;
  overflow: hidden;
  margin: 20px auto;
  width: 100%;
  background-color: white;
  border-radius: 0.8em;
  box-shadow: rgba(0, 0, 0, 0.2) 0 30px 18px 6px;

  @media (min-width: 400px) and (max-width: 1024px) {
    width: 95%;
  }

  &__data {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px * 2;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  &__cast {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
    text-align: center;
    align-items: self-start;

    div {
      background-color: #292929;
      height: 100%;
      display: flex;
      justify-content: center;
      a {
        color: var(--white);
        img {
          width: 100%;
        }
      }
    }
  }

  &__search {
    position: absolute;
    top: 20px * 2;
    right: 20px * 2;
    margin: auto;
    width: calc(100% - (#{20px} * 4));

    @media (min-width: 400px) {
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

    @media (min-width: 1024px) {
      margin-right: 20px;
      width: 200px;
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

      @media (min-width: 1024px) {
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
      margin-top: 20px * 7;
      margin-left: 20px * 2;
      // width: 140px;
      background-color: lightgray;
      border-radius: 2px;
      z-index: 1;

      @media (min-width: 1024px) {
        left: 140px / 2.5;
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
    padding: 20px * 2;
    color: #121212;

    @media (min-width: 1024px) {
      padding: 20px * 3;
    }
  }

  &__title {
    font-family: var(--font-family-lato);
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
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
