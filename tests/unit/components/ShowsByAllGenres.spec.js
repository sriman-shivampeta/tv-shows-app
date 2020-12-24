import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { getShowsByGenre } from "../service/response_mock";
import ShowsByAllGenres from "../../../src/components/ShowsByAllGenres.vue";
import VueCarousel from "vue-carousel";
import { BootstrapVue } from "bootstrap-vue";

describe("ShowsByAllGenres Component", () => {
  let wrapper;
  const router = new VueRouter({});
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    localVue.use(VueCarousel);
    Vue.use(BootstrapVue);
    const mockStore = {
      dispatch: jest.fn(),
      getters: {
        getShowsByGenre: () => {
          return getShowsByGenre;
        }
      }
    };
    wrapper = shallowMount(ShowsByAllGenres, {
      localVue,
      router,
      propsData: {
        genre: "Actions"
      },
      mocks: {
        $store: mockStore
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("Is it a vue instance or not", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("It should Genre Heading from props data ex.('Actions')", () => {
    expect(wrapper.find(".genre-heading span").text()).toBe("Actions");
  });

  test("It should be router link option to show more tv shows based on genre ", () => {
    expect(wrapper.find("router-link-stub").exists()).toBe(true);
  });

  test("It should show data from mapGetters(getShowsByGenre) and display data inside carousel.", () => {
    expect(wrapper.find("carousel-stub").exists()).toBe(true);
    const name = wrapper.vm.$store.getters.getShowsByGenre()[0].name;
    expect(
      wrapper
        .find(
          "carousel-stub slide-stub b-card-stub b-card-text-stub router-link-stub span"
        )
        .text()
    ).toBe(name);
  });
});
