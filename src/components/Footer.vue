<script setup lang="ts">
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-lead">
        <h2>Ковров</h2>
        <p>Городская информация, маршруты, события и достопримечательности Коврова.</p>
      </div>

      <div class="footer-col">
        <h3>Разделы</h3>
        <ul>
          <li><RouterLink to="/">Главная</RouterLink></li>
          <li><RouterLink to="/guide">Маршруты и события</RouterLink></li>
          <li><RouterLink to="/heritage">История и наследие</RouterLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Полезно</h3>
        <ul>
          <li><RouterLink :to="{ path: '/', hash: '#city-map' }">Карта города</RouterLink></li>
          <li><RouterLink :to="{ path: '/guide', hash: '#events' }">События</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#places' }">Достопримечательности</RouterLink></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© {{ year }} Ковров</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 3rem;
  padding: 2.25rem 0 1.25rem;
  background: #18354a;
  color: rgba(255, 255, 255, 0.88);
}

.footer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.footer-lead,
.footer-col {
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.04);
}

.footer-lead h2,
.footer-col h3 {
  margin: 0 0 0.8rem;
}

.footer-lead h2 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: #ffffff;
}

.footer-col h3 {
  font-size: 1rem;
  color: #ffffff;
}

.footer-lead p {
  margin: 0;
  line-height: 1.7;
}

.footer-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.82);
}

.footer-col a:hover {
  color: #ffffff;
}

.footer-bottom {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;
}

@media (max-width: 860px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    justify-content: flex-start;
  }
}
</style>
