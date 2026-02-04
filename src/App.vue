<script setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/Header.vue' // Твой путь к хедеру
import MyFooter from './components/Footer.vue' // Твой путь к футеру
</script>

<template>
  <div class="app-wrapper">
    <!-- Твой хедер -->
    <MyHeader /> 
    
    <!-- Сюда Vue Router будет подставлять страницы (Home, History, News) -->
    <main>
      <RouterView />
    </main>
    
    <!-- Твой футер -->
    <MyFooter />
  </div>
</template>

<style>
/* Глобальные стили */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fafafa;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Чтобы футер всегда был прижат к низу, если контента мало */
}
</style>