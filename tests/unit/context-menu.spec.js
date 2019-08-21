import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ContextMenu from "@/context-menu.vue";

describe("ContextMenu", () => {
  it("renders cm when passed", () => {
    const show = true;
    const wrapper = shallowMount(ContextMenu, {
      propsData: { show }
    });
    expect(wrapper.is("div")).to.equal(true);
  });
});
