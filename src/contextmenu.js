var ContextMenu = {};
ContextMenu.install = function(Vue, options) {
  console.log(options);
  Vue.prototype.$msg = "Hello World";
};
module.exports = ContextMenu;
