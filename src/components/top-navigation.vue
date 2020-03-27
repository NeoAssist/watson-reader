<template>
  <el-row>
    <el-menu :default-active="itens[0].label" mode="horizontal">
      <el-col v-for="item in itens" :key="item.label" :span="spanSize">
        <el-menu-item :index="item.label" router="true" @click="goto(item.route)">{{ item.label }}</el-menu-item>
      </el-col>
    </el-menu>
  </el-row>
</template>

<script>
import { Route } from "vue-router";

export default {
  name: "top-navigation",
  computed: {
    spanSize() {
      return 24 / this.itens.length;
    }
  },
  props: {
    itens: {
      type: Array,
      required: true,
      default: [{ label: "", route: "/" }]
    }
  },
  methods: {
    goto(route) {
      this.$router.replace(route);
    }
  }
};
</script>

<style>
</style>