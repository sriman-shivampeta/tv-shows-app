import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import { BootstrapVue } from "bootstrap-vue";
import ShowDetails from "@/components/ShowDetails.vue";
import { showDetails } from "../service/response_mock";

describe("ShowDetails Component", () => {
  let wrapper;
  const router = new VueRouter();
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    Vue.use(BootstrapVue);
    const mockStore = {
      dispatch: jest.fn(),
      getters: {
        loading: false,
        showDetails: showDetails
      }
    };
    wrapper = shallowMount(ShowDetails, {
      localVue,
      router,
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

  test("Should dispatch an action on created hook.", () => {
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalled();
  });

  test("Should get the showDetails object and check name as expected.", async () => {
    await wrapper.vm.$nextTick();
    expect(
      Object.keys(wrapper.vm.$store.getters.showDetails).length
    ).toBeTruthy();
    const showDetailsName = wrapper.vm.$store.getters.showDetails.name;
    expect(wrapper.find(".showDetail__details .showDetail__title").text()).toBe(
      showDetailsName
    );
  });
});
