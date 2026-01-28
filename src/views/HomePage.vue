<template>
    <main class="home">
      <section class="hero">
        <h1>Добро пожаловать на главную!</h1>
        <p>Здесь будет контент домашней страницы.</p>
      </section>
      <section class="features">
        <div class="feature-card">
          <h3>Фича 1</h3>
          <p>Описание первой фичи.</p>
        </div>
        <div class="feature-card">
          <h3>Фича 2</h3>
          <p>Описание второй фичи.</p>
        </div>
      </section>
    </main>
  </template>
  
  
  <style scoped>
  .home {
    padding: 2rem;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .features {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }
  
  .feature-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1.5rem;
    width: 300px;
  }
  </style>