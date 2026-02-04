<template>
    <div class="page-wrapper">
      <div class="parallax-bg" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kovrov_spaso-preobrazhensky_cathedral_01.jpg/1280px-Kovrov_spaso-preobrazhensky_cathedral_01.jpg');">
        
        <div class="content-overlay">
          <div class="container section-block">
            
            <h1 class="page-title">История Коврова</h1>
            
            <div class="timeline">
              
              <!-- Событие 1 -->
              <div class="timeline-item">
                <div class="year">XII век</div>
                <div class="content">
                  <h3>Легенда об основании</h3>
                  <p>По преданию, деревня Елифановка была основана звероловом Елифаном. Позже она стала селом Рождественским.</p>
                </div>
              </div>
  
              <!-- Событие 2 -->
              <div class="timeline-item">
                <div class="year">1778 год</div>
                <div class="content">
                  <h3>Статус города</h3>
                  <p>Указом Екатерины II село Коврово получило статус уездного города. Именно тогда был утвержден герб с зайцами.</p>
                </div>
              </div>
  
              <!-- Событие 3 -->
              <div class="timeline-item">
                <div class="year">1863 год</div>
                <div class="content">
                  <h3>Железная дорога</h3>
                  <p>Запущено движение по Московско-Нижегородской железной дороге. Построены крупные железнодорожные мастерские.</p>
                </div>
              </div>
  
              <!-- Событие 4 -->
              <div class="timeline-item">
                <div class="year">1916 год</div>
                <div class="content">
                  <h3>Первый пулеметный завод</h3>
                  <p>Началось строительство пулеметного завода (ныне ЗиД). В Ковров приезжает выдающийся конструктор В.А. Дегтярёв.</p>
                </div>
              </div>
  
              <!-- Событие 5 -->
              <div class="timeline-item">
                <div class="year">2011 год</div>
                <div class="content">
                  <h3>Город воинской славы</h3>
                  <p>Коврову присвоено почётное звание «Город воинской славы» за мужество и трудовой героизм жителей.</p>
                </div>
              </div>
  
            </div>
            
            <!-- Цитата или итог -->
            <div class="history-footer">
              <p>Сегодня Ковров — это крупный промышленный и научный центр региона.</p>
            </div>
  
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Повтор общих стилей */
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
    max-width: 900px; /* Для текста делаем поуже, чтобы удобнее читать */
    margin: 0 auto;
    padding: 0 20px;
  }
  .section-block {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 50px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  .page-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    text-transform: uppercase;
    color: #333;
    border-bottom: 4px solid #e74c3c;
    display: inline-block;
    padding-bottom: 10px;
    width: 100%;
  }
  
  /* Стили Таймлайна */
  .timeline {
    position: relative;
    padding-left: 30px;
    border-left: 4px solid #eee; /* Вертикальная линия */
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 40px;
  }
  
  /* Точка на линии */
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -40px; /* Сдвигаем влево на линию */
    top: 5px;
    width: 16px;
    height: 16px;
    background: #e74c3c; /* Красная точка */
    border: 4px solid #fff; /* Белая обводка */
    border-radius: 50%;
    box-shadow: 0 0 0 2px #e74c3c; /* Вторая красная обводка */
  }
  
  .year {
    font-size: 1.2rem;
    font-weight: 800;
    color: #e74c3c;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  
  .content h3 {
    margin: 0 0 10px;
    font-size: 1.5rem;
    color: #2c3e50;
  }
  
  .content p {
    color: #555;
    line-height: 1.6;
    font-size: 1.05rem;
  }
  
  /* Подвал истории */
  .history-footer {
    margin-top: 50px;
    text-align: center;
    font-style: italic;
    font-size: 1.2rem;
    color: #777;
    border-top: 1px solid #eee;
    padding-top: 20px;
  }
  </style>