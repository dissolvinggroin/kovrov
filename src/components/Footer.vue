<template>
  <footer class="site-footer">
    <div class="container footer-content">
      
      <!-- Колонка 1: Лого/Бренд -->
      <div class="footer-col brand-col">
        <h3 class="brand-text">КОВРОВ</h3>
        <p>Информационный портал города.</p>
      </div>

      <!-- Колонка 2: Навигация -->
      <div class="footer-col">
        <h4>Навигация</h4>
        <ul class="footer-links">
          <li><RouterLink to="/">Главная</RouterLink></li>
          <li><RouterLink to="/news">Новости</RouterLink></li>
          <li><RouterLink to="/history">История</RouterLink></li>
        </ul>
      </div>

      <!-- Колонка 3: Контакты -->
      <div class="footer-col">
        <h4>Контакты</h4>
        <p>📍 ул. Дегтярёва, д. 1</p>
        <p>📞 +7 (49232) 0-00-00</p>
        <p>📧 info@kovrov-city.ru</p>
      </div>

    </div>

    <!-- Копирайт (полоска внизу) -->
    <div class="copyright-bar">
      <div class="container">
        &copy; 2026 МойГород. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #ffffff;
  border-top: 1px solid #eaeaea; /* Тонкая линия сверху */
  color: #333;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}

.footer-col {
  flex: 1;
  min-width: 250px;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
  text-transform: uppercase;
}

h4 {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #e74c3c; /* Красный заголовок */
  text-transform: uppercase;
  font-weight: 700;
}

p {
  color: #666;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  text-decoration: none;
  color: #555;
  transition: color 0.3s, padding-left 0.3s;
}

.footer-links a:hover {
  color: #e74c3c;
  padding-left: 5px;
}

.copyright-bar {
  background-color: #f8f9fa; /* Чуть сероватый фон для низа */
  padding: 15px 0;
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  border-top: 1px solid #eee;
}
</style>