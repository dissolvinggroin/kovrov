<script setup>
// Логика не требуется
</script>

<template>
  <div class="home-wrapper">
    <!-- ФОН ГОРОДА (ПАРАЛЛАКС) -->
    <!-- Замени ссылку ниже на красивое фото Коврова -->
    <div class="parallax-bg" style="background-image: url('https://www.kovrov-gorod.ru/images/slides/2018/1.jpg');">
      
      <div class="content-overlay">
        
        <!-- БЛОК 1: АКТУАЛЬНЫЕ НОВОСТИ -->
        <div class="container section-block">
          <h2 class="section-title">Актуальные новости</h2>
          
          <div class="news-grid">
            <!-- Карточка 1 -->
            <div class="news-card big">
              <div class="news-img" style="background-image: url('https://placehold.co/600x400/2c3e50/fff?text=News+1');"></div>
              <div class="news-content">
                <span class="tag">Главное</span>
                <h3>День оружейника в Коврове</h3>
                <p>Праздничные мероприятия прошли на площади Победы...</p>
                <button class="read-more">Читать</button>
              </div>
            </div>

            <!-- Карточка 2 -->
            <div class="news-card big">
              <div class="news-img" style="background-image: url('https://placehold.co/600x400/e74c3c/fff?text=News+2');"></div>
              <div class="news-content">
                <span class="tag">Город</span>
                <h3>Новый сквер открыт</h3>
                <p>Завершилось благоустройство территории у вокзала...</p>
                <button class="read-more">Читать</button>
              </div>
            </div>
          </div>
        </div>

        <!-- БЛОК 2: ДОСТОПРИМЕЧАТЕЛЬНОСТИ -->
        <div class="container section-block">
          <h2 class="section-title">Достопримечательности</h2>
          
          <div class="sights-row">
            <div class="sight-item">
              <div class="icon">🐇</div>
              <h4>Музей зайцев</h4>
            </div>
            <div class="sight-item">
              <div class="icon">🏍️</div>
              <h4>Парк Дегтярёва</h4>
            </div>
            <div class="sight-item">
              <div class="icon">⛪</div>
              <h4>Христорождественский собор</h4>
            </div>
            <div class="sight-item">
              <div class="icon">🔥</div>
              <h4>Вечный огонь</h4>
            </div>
          </div>
        </div>

        <!-- БЛОК 3: КАРТА ГОРОДА -->
        <div class="container section-block map-section">
          <h2 class="section-title">Карта города</h2>
          <div class="map-wrapper">
            <!-- Вставка Яндекс.Карты (iframe) -->
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=41.294101%2C56.362678&z=13" 
              width="100%" 
              height="450" 
              frameborder="0" 
              allowfullscreen="true">
            </iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Оболочка страницы */
.home-wrapper {
  width: 100%;
}

/* Фон с параллакс эффектом */
.parallax-bg {
  /* Зафиксировать фон, чтобы контент скользил по нему */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

/* Затемнение фона и отступы */
.content-overlay {
  background: rgba(0, 0, 0, 0.4); /* Затемнение картинки на 40% */
  padding: 60px 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Общий стиль для блоков (белые подложки) */
.section-block {
  background: rgba(255, 255, 255, 0.95); /* Белый, чуть прозрачный */
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 3px solid #e74c3c;
  display: inline-block;
  padding-bottom: 5px;
  /* Центрируем линию */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* --- НОВОСТИ --- */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.news-img {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.news-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tag {
  color: #e74c3c;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.news-content h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
}

.read-more {
  margin-top: auto;
  align-self: flex-start;
  background: transparent;
  border: 2px solid #333;
  padding: 8px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.read-more:hover {
  background: #e74c3c;
  border-color: #e74c3c;
  color: white;
}

/* --- ДОСТОПРИМЕЧАТЕЛЬНОСТИ --- */
.sights-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.sight-item {
  text-align: center;
  flex: 1;
  min-width: 150px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  transition: transform 0.3s;
}

.sight-item:hover {
  transform: translateY(-5px);
  border-color: #e74c3c;
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

/* --- КАРТА --- */
.map-wrapper {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border: 4px solid #fff;
}
</style>