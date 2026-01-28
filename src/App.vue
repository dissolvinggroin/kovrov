<template>
    <div id="app">
      <Header />
      <router-view /> <!-- Здесь будут отображаться страницы -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  </style>