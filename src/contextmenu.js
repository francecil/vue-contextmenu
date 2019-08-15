import ContextMenu from "@/components/ContextMenu.vue";
const plugin = {};
plugin.install = function(Vue) {
  Vue.component(ContextMenu.name, ContextMenu);
};

/**
 * Auto install
 */
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
export default plugin;
export { ContextMenu };
