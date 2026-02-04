<script setup>
import { ref } from 'vue'

// Данные новостей (как будто пришли с базы данных)
const newsList = ref([
  {
    id: 1,
    date: '12 Окт 2025',
    title: 'Завод им. Дегтярёва расширяет производство',
    desc: 'Новые цеха будут построены в северной части города. Ожидается создание 500 рабочих мест.',
    img: 'https://placehold.co/600x400/2c3e50/fff?text=ZID'
  },
  {
    id: 2,
    date: '10 Окт 2025',
    title: 'Благоустройство парка экскаваторостроителей',
    desc: 'Завершен первый этап реконструкции. Установлены новые лавочки и освещение.',
    img: 'https://placehold.co/600x400/e74c3c/fff?text=Park'
  },
  {
    id: 3,
    date: '05 Окт 2025',
    title: 'Выставка мотоциклов "Восход"',
    desc: 'В историческом музее открылась уникальная экспозиция редких моделей.',
    img: 'https://placehold.co/600x400/333/fff?text=Moto'
  },
  {
    id: 4,
    date: '01 Окт 2025',
    title: 'День учителя в ДК "Современник"',
    desc: 'Лучшие педагоги города были награждены почетными грамотами мэра.',
    img: 'https://placehold.co/600x400/555/fff?text=DK'
  },
  {
    id: 5,
    date: '28 Сен 2025',
    title: 'Ремонт дорог на улице Еловой',
    desc: 'Движение будет ограничено в течение двух недель. Выбирайте пути объезда.',
    img: 'https://placehold.co/600x400/777/fff?text=Road'
  },
  {
    id: 6,
    date: '25 Сен 2025',
    title: 'Спортивный марафон',
    desc: 'Более 1000 жителей приняли участие в осеннем забеге.',
    img: 'https://placehold.co/600x400/999/fff?text=Sport'
  }
])
</script>

<template>
  <div class="page-wrapper">
    <!-- Тот же фон, что на главной -->
    <div class="parallax-bg" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kovrov_spaso-preobrazhensky_cathedral_01.jpg/1280px-Kovrov_spaso-preobrazhensky_cathedral_01.jpg');">
      
      <div class="content-overlay">
        <div class="container section-block">
          
          <h1 class="page-title">События Города</h1>
          
          <div class="news-grid">
            <div v-for="item in newsList" :key="item.id" class="news-item">
              <div class="news-image" :style="{ backgroundImage: `url(${item.img})` }">
                <span class="news-date">{{ item.date }}</span>
              </div>
              <div class="news-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <button class="read-btn">Подробнее →</button>
              </div>
            </div>
          </div>

          <!-- Кнопка загрузки еще -->
          <div class="load-more-wrapper">
            <button class="load-more-btn">Загрузить ещё</button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Повторяем общие стили для фона и контейнера */
.page-wrapper { width: 100%; }

.parallax-bg {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}

.content-overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 60px 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-block {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 4px solid #e74c3c;
  display: inline-block;
  padding-bottom: 10px;
  width: 100%;
}

/* Специфичные стили для новостей */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.news-item {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border-color: #e74c3c;
}

.news-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.news-date {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.news-info {
  padding: 20px;
}

.news-info h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #2c3e50;
}

.news-info p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
}

.read-btn {
  background: none;
  border: none;
  color: #e74c3c;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  transition: padding-left 0.2s;
}

.read-btn:hover {
  padding-left: 5px;
}

.load-more-wrapper {
  text-align: center;
  margin-top: 40px;
}

.load-more-btn {
  background: #333;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.load-more-btn:hover {
  background: #e74c3c;
}
</style>