# contextmenu-demo

右键菜单组件 demo

## 安装
```sh
npm install @gahing/vcontextmenu # yarn add @gahing/vcontextmenu
```
## 在线demo

[demo](https://francecil.github.io/vue-contextmenu/)

## 使用

如果是用 vue-cli3 构建的，可以利用 [vue-cli-plugin-contextmenu](https://github.com/francecil/vue-cli-plugin-contextmenu)
```sh
vue add contextmenu
```

手动注册：
```js
import ContextMenu from '@gahing/vcontextmenu'
import '@gahing/vcontextmenu/lib/vcontextmenu.css'
Vue.use(ContextMenu)
// or
import { ContextMenu } from '@gahing/vcontextmenu'
import '@gahing/vcontextmenu/lib/vcontextmenu.css'
Vue.component(ContextMenu.name, ContextMenu); // 可以在这里定义自己的组件名
```

### demo

```html
<template>
  <context-menu
    :show="contextMenuVisible"
    :offset="contextMenuOffset"
    @update:show="show => (contextMenuVisible = show)"
  >
    <div>复制</div>
    <div>粘贴</div>
    <div>剪切</div>
  </context-menu>

  <div @contextmenu="showContextMenu">右键点击此区域</div>
</template>
<script>
export default {
  data() {
    return {
      contextMenuVisible: false,
      contextMenuOffset: {
        left: 0,
        top: 0
      },
    };
  },
  methods: {
    showContextMenu(e) {
      e.preventDefault();
      this.contextMenuVisible = true;
      this.contextMenuOffset = {
        left: e.pageX,
        top: e.pageY
      };
    }
  }
};
</script>
```

## 开发

```sh
npm start
```

## 构建
```sh
# 构建demo
npm run build:demo
# 源码打包，生成lib目录
npm run build:lib
# 发布gh-pages
npm run ghpages
```