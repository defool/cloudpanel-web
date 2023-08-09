<template>
  <div>
    <el-container>
      <el-container>
        <el-aside style="height: 100vh;
    border-right: solid 1px var(--el-menu-border-color);">
          <div style="width: 280px;text-align:center">
            <img alt="logo" style="height:60px" src="@/assets/logo.png" />
          </div>
          <NavView />
        </el-aside>
        <el-main class="el-main">
          <el-breadcrumb separator="/" class="page-header">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">Application</a></el-breadcrumb-item>
            <el-breadcrumb-item>Server1</el-breadcrumb-item>
          </el-breadcrumb>

          <RouterView />
        </el-main>
        <el-backtop :right="100" :bottom="100" />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavView from './views/Nav.vue'
</script>

<style scoped>
.el-main {
  padding: 5px;
}

.page-header {
  margin: 10px 0px;
}
</style>