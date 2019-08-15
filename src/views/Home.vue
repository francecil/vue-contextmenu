<template>
  <div class="home">
    <Dashbox
      v-for="dashbox in dashboxs"
      :key="dashbox.id"
      :dashbox="dashbox"
      @show-contextmenu="showContextMenu"
    />
    <context-menu
      :show="contextMenuVisible"
      :offset="contextMenuOffset"
      @update:show="show => (contextMenuVisible = show)"
    >
      <div>复制</div>
      <div>粘贴</div>
      <div>剪切</div>
    </context-menu>
  </div>
</template>

<script>
// import { ContextMenu } from "@/contextmenu";
import Dashbox from "./Dashbox.vue";

export default {
  name: "home",
  components: {
    // "context-menu": ContextMenu,
    Dashbox
  },
  data() {
    return {
      contextMenuVisible: false,
      contextMenuOffset: {
        left: 0,
        top: 0
      },
      dashboxs: [
        {
          id: 1,
          style: "left:200px;top:200px;width:100px;height:100px",
          content: "test1"
        },
        {
          id: 2,
          style: "left:1800px;top:820px;width:100px;height:100px",
          content: "test2"
        }
      ]
    };
  },
  methods: {
    showContextMenu(e) {
      e.preventDefault();
      this.contextMenuVisible = true;
      this.contextMenuOffset = {
        left: e.clientX,
        top: e.clientY
      };
    }
  }
};
</script>
