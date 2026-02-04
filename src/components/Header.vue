<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <!-- ВЕРХНИЙ ЭТАЖ: БРЕНДИНГ -->
    <div class="top-bar container">
      <div class="brand-text">ГОРОД</div>
      
      <!-- Герб (заглушка) -->
      <div class="logo-wrapper">
        <img src="https://placehold.co/80x80/red/white?text=Kovrov" alt="Герб" class="logo-img" />
      </div>
      
      <div class="brand-text">КОВРОВ</div>
    </div>

    <!-- НИЖНИЙ ЭТАЖ: НАВИГАЦИЯ -->
    <div class="nav-bar">
      <nav class="container nav-links">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/news">Новости</RouterLink>
        <RouterLink to="/history">История</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Верхняя часть */
.top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  gap: 30px;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #333;
  text-transform: uppercase;
}

.logo-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(255, 77, 77, 0.3);
}

/* Нижняя часть (Меню) */
.nav-bar {
  background-color: #f8f9fa;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.nav-links {
  display: flex;
  justify-content: center;
}

.nav-links a {
  flex: 1; /* Растягиваем кнопки, как ты хотел */
  text-align: center;
  padding: 15px 0;
  text-decoration: none;
  color: #555;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.95rem;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
  max-width: 200px; /* Чтобы на широких экранах не разъезжались слишком сильно */
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #e74c3c; /* Красный акцент */
  border-bottom-color: #e74c3c;
  background-color: #fff;
}
</style>