import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import PageNotFound from "../../../src/components/PageNotFound.vue";

describe("PageNotFound Component", () => {
  let wrapper;
  const router = new VueRouter();
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    wrapper = shallowMount(PageNotFound, {
      localVue,
      router
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("Is it a vue instance or not", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("Should Check routerlink is exists.", () => {
    expect(wrapper.find(".page-not-found").exists()).toBeTruthy();
    expect(wrapper.find("router-link-stub").text()).toBe("Goto Dashboard");
  });
});
