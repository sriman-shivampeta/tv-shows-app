import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { getShowsByGenre } from "../service/response_mock";
import ShowsBySelectedGenre from "@/components/ShowsBySelectedGenre.vue";
import VueCarousel from "vue-carousel";
import { BootstrapVue } from "bootstrap-vue";

describe("ShowsBySelectedGenre Component", () => {
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
        loading: false,
        getShowsByGenre: () => {
          return getShowsByGenre;
        }
      }
    };
    wrapper = shallowMount(ShowsBySelectedGenre, {
      localVue,
      router,
      mocks: {
        $store: mockStore
      },
      data() {
        return {
          genre: "Actions"
        };
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("Is it a vue instance or not", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("Genre Heading content should from data ex.('Actions')", () => {
    expect(wrapper.find(".genre-heading").text()).toBe(
      `Showing "${wrapper.vm.genre}" Tv shows`
    );
  });

  test("Check on click router-link.", async () => {
    let routerLink = wrapper.find(
      ".shows-on-selected-genre b-container-stub b-card-text-stub router-link-stub"
    );
    await routerLink.trigger("click");
    expect(routerLink.props().to).toStrictEqual({
      name: "ShowDetails",
      params: { id: getShowsByGenre[0].id, name: getShowsByGenre[0].name }
    });
  });

  test("It should show data from mapGetters(getShowsByGenre) and display data inside container.", () => {
    const name = wrapper.vm.$store.getters.getShowsByGenre()[0].name;
    expect(
      wrapper
        .find(
          ".shows-on-selected-genre b-container-stub b-card-stub b-card-text-stub router-link-stub span"
        )
        .text()
    ).toBe(name);
  });
});
