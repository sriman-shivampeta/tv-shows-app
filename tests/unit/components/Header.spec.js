import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import router from "../../../src/router/index.js";
import { BootstrapVue } from "bootstrap-vue";
import Header from "../../../src/components/Header.vue";

describe("Header Component", () => {
  let wrapper;
  //   const router = new VueRouter();
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    Vue.use(BootstrapVue);
    const mockStore = {
      dispatch: jest.fn()
    };
    wrapper = shallowMount(Header, {
      localVue,
      router,
      mocks: {
        $store: mockStore
      },
      data() {
        return {
          searchTVShows: "Person"
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

  test("Should dispatch an getAllTvShows method on created hook.", () => {
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalled();
  });

  test("Input has value.", () => {
    expect(wrapper.find("b-navbar-brand-stub").text()).toBe("Tv Shows");
    expect(wrapper.find("b-nav-item-stub").text()).toBe("All Shows");
    const inputValue = wrapper
      .find("b-navbar-nav-stub b-form-input-stub")
      .attributes("value");
    expect(inputValue).toBe("Person");
  });

  test("On search button click clear searchTVShows value.", async () => {
    await wrapper.find("b-navbar-nav-stub b-button-stub").trigger("click");
    wrapper.vm.searchTVShows = "";
    expect(wrapper.vm.searchTVShows).toBe("");
  });
});
