import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import router from "../../../src/router/index.js";
import Dashboard from "../../../src/views/Dashboard.vue";
import ShowDetails from "../../../src/components/ShowDetails.vue";
import ShowsBySelectedGenre from "../../../src/components/ShowsBySelectedGenre.vue";
import ShowsByUserQuery from "../../../src/components/ShowsByUserQuery.vue";

describe("App", () => {
  let factory;
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    const mockStore = {
      dispatch: jest.fn(),
      getters: {
        loading: jest.fn(),
        errorMessage: jest.fn(),
        getGenres: jest.fn(),
        showDetails: jest.fn(),
        getListsByGenre: jest.fn()
      }
    };
    wrapper = factory = cmp => {
      return shallowMount(cmp, {
        localVue,
        router,
        mocks: {
          $store: mockStore
        }
      });
    };
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("Renders Dashboard View via routing...", async () => {
    wrapper = factory(Dashboard);
    router.push("/");
    await wrapper.vm.$nextTick();
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.vm.$route.name).toBe("Dashboard");
  });

  test("Renders ShowDetails Component via routing...", async () => {
    wrapper = factory(ShowDetails);
    router.push("/show/:id/:name");
    await wrapper.vm.$nextTick();
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.vm.$route.name).toBe("ShowDetails");
  });

  test("Renders Selected Genre Component via routing...", async () => {
    wrapper = factory(ShowsBySelectedGenre);
    router.push("/genre/:genre");
    await wrapper.vm.$nextTick();
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.vm.$route.name).toBe("Selected Genre");
  });

  test("Renders ShowsByUserQuery Component via routing...", async () => {
    wrapper = factory(ShowsByUserQuery);
    router.push("/showsbyquery/:searchTVShowVal");
    await wrapper.vm.$nextTick();
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.vm.$route.name).toBe("ShowsByUserQuery");
  });
});
