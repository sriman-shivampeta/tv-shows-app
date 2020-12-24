import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Dashboard from "../../../src/views/Dashboard.vue";
import { getGenres } from "../service/response_mock";

describe("Dashboard.vue View", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const mockStore = {
      dispatch: jest.fn(),
      getters: {
        loading: false
      }
    };
    wrapper = shallowMount(Dashboard, {
      localVue,
      mocks: {
        $store: mockStore
      },
      computed: {
        allGenres() {
          return getGenres;
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("Is it a vue instance or not", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("Get all genre names from the store and have length atleast 1", () => {
    expect(wrapper.vm.allGenres.length).toBeGreaterThanOrEqual(1);
  });
});
