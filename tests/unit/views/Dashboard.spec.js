import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Dashboard from "@/views/Dashboard.vue";
import { allTvShowsResponse } from "../service/response_mock";

describe("Dashboard.vue View", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const mockStore = {
      dispatch: jest.fn(),
      getters: {
        loading: false,
        showsList: allTvShowsResponse.data
      }
    };
    wrapper = shallowMount(Dashboard, {
      localVue,
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

  test("Get all genre names from the store and have length atleast 1", () => {
    expect(wrapper.vm.allGenres.length).toBeGreaterThanOrEqual(1);
  });
});
