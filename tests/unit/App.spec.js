import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "../../src/App.vue";

describe("App.vue Component", () => {
  let wrapper;
  const router = new VueRouter({});
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    wrapper = shallowMount(App, {
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

  test("Should have a div with id as app", () => {
    expect(wrapper.attributes("id")).toBe("app");
  });

  test("Should have a Header component", () => {
    expect(wrapper.find("header-stub").exists()).toBe(true);
  });

  test("Should have a router-view", () => {
    expect(wrapper.find("router-view-stub").exists()).toBe(true);
  });
});
