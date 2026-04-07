<script setup lang="ts">
import { RouterView } from 'vue-router'
import MyHeader from './components/Header.vue'
import MyFooter from './components/Footer.vue'
</script>

<template>
  <div class="app-shell">
    <MyHeader />
    <main class="app-main">
      <RouterView />
    </main>
    <MyFooter />
  </div>
</template>
