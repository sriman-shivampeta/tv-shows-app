import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import { BootstrapVue } from "bootstrap-vue";
import ShowsByUserQuery from "@/components/ShowsByUserQuery.vue";
import { searchedShows } from "../service/response_mock";

describe("searchedShows Component", () => {
  let wrapper;
  const router = new VueRouter({ push: jest.fn() });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    Vue.use(BootstrapVue);
    localVue.directive("router-back", {
      bind: jest.fn()
    });
    const mockStore = {
      dispatch: jest.fn(),
      getters: {
        loading: false,
        searchedShows: searchedShows
      }
    };
    wrapper = shallowMount(ShowsByUserQuery, {
      localVue,
      router,
      mocks: {
        $store: mockStore
      },
      data() {
        return {
          searchTVShowVal: "Person"
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

  test("Should dispatch an action on created hook.", () => {
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalled();
  });

  test("Should test the router params has the value.", () => {
    expect(wrapper.find(".genre-heading").text()).toBe(
      `Tv shows based on search "${wrapper.vm.searchTVShowVal}"`
    );
  });

  describe("Get searchedShows response for router params value", () => {
    test("searchedShows response length should be atleast 1", () => {
      expect(Object.keys(wrapper.vm.getSearchedShows).length).toBeTruthy();
    });

    test("routerLink to attribute should match with searchedShows response data object.", async () => {
      let routerLink = wrapper.find(
        ".shows-by-userQuery b-container-stub b-card-text-stub router-link-stub"
      );
      await routerLink.trigger("click");
      expect(routerLink.props().to).toStrictEqual({
        name: "ShowDetails",
        params: {
          id: searchedShows[0].show.id,
          name: searchedShows[0].show.name
        }
      });
      expect(
        wrapper
          .find(
            ".shows-by-userQuery b-container-stub b-card-text-stub router-link-stub span"
          )
          .text()
      ).toBe(searchedShows[0].show.name);
    });

    // test("routerLink to attribute should match with searchedShows response data object.", async () => {
    //   const spy = jest.fn();
    //   wrapper.setData({ searchTVShowVal: false });
    //   wrapper.vm.$nextTick(() => {
    //     expect(spy).toHaveBeenCalledTimes(0);
    //   });
    // });
  });
});
