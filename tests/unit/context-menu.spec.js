import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ContextMenu from "@/context-menu.vue";

describe("ContextMenu", () => {
  afterEach(() => {
    const el = document.querySelector(".context-menu");
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });
  it("create and show", () => {
    const wrapper = shallowMount(ContextMenu, {
      propsData: { show: true }
    });
    expect(wrapper.isVisible()).to.equal(true);
  });
  it("render correct content", () => {
    const wrapper = shallowMount(ContextMenu, {
      propsData: { show: true },
      slots: {
        default: "<div class='copy'>复制</div>"
      }
    });
    expect(wrapper.find(".copy").text()).to.equal("复制");
  });
  it("append to body", done => {
    const wrapper = shallowMount(ContextMenu, {
      propsData: { show: true }
    });
    setTimeout(() => {
      expect(wrapper.vm.$el.parentNode).to.equal(document.body);
      done();
    }, 10);
  });
  /*
  it("show position in body", done => {
    const wrapper = shallowMount(ContextMenu, {
      attachToDocument: true,
      slots: {
        default: "<div class='copy'>复制</div>"
      }
    });
    wrapper.setProps({
      show: true,
      offset: {
        left: 500,
        top: 500
      }
    });
    // wrapper.vm.$nextTick(() => {

    // });
    setTimeout(() => {
      console.log(wrapper.vm.$el.getBoundingClientRect());
      expect(true).to.equal(true);
      done();
    }, 500);
  });
  */
});
