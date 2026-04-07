<script setup lang="ts">
import CityMap from '../components/CityMap.vue'
import { RouterLink } from 'vue-router'
import {
  annualEvents,
  featuredPlaces,
  heroMetrics,
  mapPageUrl,
  routeCards,
  stayOptions,
  storyCards,
  travelOptions,
} from '../data/kovrov'

const homeEvents = annualEvents.filter((_, index) => [0, 4, 5].includes(index))
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="container home-hero__grid">
        <div class="home-hero__copy">
          <div class="section-heading">
            <span class="eyebrow">Владимирская область</span>
            <h1>Ковров</h1>
            <p>
              Основная информация о городе, достопримечательностях, маршрутах, событиях,
              карте и полезных сервисах для жителей и гостей Коврова.
            </p>
          </div>

          <div class="button-row">
            <a class="button" href="#places">Главные места</a>
            <RouterLink class="button button--soft" to="/guide">Маршруты и события</RouterLink>
          </div>

          <div class="hero-stats">
            <article v-for="metric in heroMetrics" :key="metric.label" class="hero-stats__card">
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </article>
          </div>
        </div>

        <div class="home-hero__visual">
          <img
            class="home-hero__image"
            src="/media/kovrov/military-glory-stela.jpg"
            alt="Стела Ковров — город воинской славы"
          />
          <div class="surface-card home-hero__note">
            <h2>Основное</h2>
            <ul class="meta-list">
              <li>Исторический центр, соборы и музейные площадки.</li>
              <li>Памятные места, связанные с оружейной и инженерной историей.</li>
              <li>Городские события, карта и полезная информация для поездки.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="page-shell page-shell--first">
      <div class="container">
        <div class="quick-links">
          <a class="surface-card quick-link" href="#places">
            <strong>Главные места</strong>
            <p>Соборы, музей, дом Дегтярева и первые точки для прогулки.</p>
          </a>
          <RouterLink class="surface-card quick-link" to="/guide">
            <strong>Маршруты</strong>
            <p>Прогулки по городу, памятные места и интересные направления.</p>
          </RouterLink>
          <RouterLink class="surface-card quick-link" :to="{ path: '/guide', hash: '#events' }">
            <strong>Афиша</strong>
            <p>Городские события, под которые удобно планировать визит.</p>
          </RouterLink>
          <a class="surface-card quick-link" href="#city-map">
            <strong>Карта города</strong>
            <p>Интерактивная карта Коврова с центральной частью города и основными точками.</p>
          </a>
        </div>
      </div>
    </section>

    <section class="page-shell page-shell--compact">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">О городе</span>
          <h2>Что важно знать о Коврове.</h2>
          <p>
            Ковров известен своей промышленной историей, статусом города воинской славы,
            музеями и памятными местами в центральной части города.
          </p>
        </div>

        <div class="story-grid">
          <article v-for="card in storyCards" :key="card.title" class="surface-card story-card">
            <img class="story-card__image" :src="card.image" :alt="card.alt" />
            <div class="story-card__body">
              <span class="story-card__eyebrow">{{ card.eyebrow }}</span>
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="places" class="page-shell page-shell--compact">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Главные места</span>
          <h2>Достопримечательности Коврова.</h2>
          <p>
            Соборы, музеи и памятные места, с которых обычно начинается знакомство с
            городом.
          </p>
        </div>

        <div class="places-grid">
          <article v-for="place in featuredPlaces" :key="place.title" class="surface-card place-card">
            <img class="place-card__image" :src="place.image" :alt="place.alt" />
            <div class="place-card__body">
              <span class="place-card__category">{{ place.category }}</span>
              <h3>{{ place.title }}</h3>
              <p>{{ place.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="page-shell page-shell--compact">
      <div class="container routes-layout">
        <div class="routes-layout__intro">
        <div class="section-heading">
          <span class="eyebrow">Маршруты</span>
          <h2>Маршруты по городу и окрестностям.</h2>
          <p>
            Прогулка по центру, индустриальная история и поездка в окрестности помогают
            увидеть город с разных сторон.
            </p>
          </div>
          <RouterLink class="button" to="/guide">Открыть все маршруты</RouterLink>
        </div>

        <div class="routes-list">
          <article v-for="route in routeCards" :key="route.title" class="surface-card route-item">
            <img class="route-item__image" :src="route.image" :alt="route.alt" />
            <div class="route-item__body">
              <div class="route-item__meta">
                <span>{{ route.label }}</span>
                <strong>{{ route.duration }}</strong>
              </div>
              <h3>{{ route.title }}</h3>
              <p>{{ route.summary }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="events" class="page-shell page-shell--compact">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Афиша</span>
          <h2>Городские события.</h2>
          <p>
            Основные городские праздники, фестивали и сезонные события Коврова.
          </p>
        </div>

        <div class="events-grid">
          <article v-for="event in homeEvents" :key="event.title" class="surface-card event-card">
            <img class="event-card__image" :src="event.image" :alt="event.alt" />
            <div class="event-card__body">
              <span class="event-card__month">{{ event.month }}</span>
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="city-map" class="page-shell page-shell--compact">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Карта города</span>
          <h2>Интерактивная карта Коврова.</h2>
          <p>Центр города, основные улицы и ориентиры на одной карте.</p>
        </div>

        <div class="surface-card city-map-card">
          <CityMap />
          <div class="city-map-card__actions">
            <a class="button button--soft" :href="mapPageUrl" target="_blank" rel="noreferrer">
              Открыть в Яндекс Картах
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="planner" class="page-shell">
      <div class="container planner-layout">
        <div class="planner-layout__left">
          <div class="section-heading">
            <span class="eyebrow">Полезная информация</span>
            <h2>Как доехать и где остановиться.</h2>
            <p>
              Основные способы добраться до города и варианты размещения для поездки в
              Ковров.
            </p>
          </div>

          <div class="travel-grid">
            <article v-for="item in travelOptions" :key="item.mode" class="surface-card travel-card">
              <h3>{{ item.mode }}</h3>
              <p>{{ item.lead }}</p>
              <ul class="meta-list">
                <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="planner-layout__right">
          <div class="surface-card stay-card">
            <h3>Где остановиться</h3>
            <div class="stay-list">
              <article v-for="item in stayOptions" :key="item.name" class="stay-list__item">
                <strong>{{ item.name }}</strong>
                <span>{{ item.area }}</span>
                <p>{{ item.note }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-hero {
  padding-block: 2.2rem 1.25rem;
}

.home-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.95fr);
  gap: 1.25rem;
  align-items: start;
}

.home-hero__copy {
  padding: 2rem 0;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1.25rem;
}

.hero-stats__card {
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
}

.hero-stats__card strong {
  display: block;
  margin-bottom: 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.55rem;
  color: var(--accent-deep);
}

.hero-stats__card span {
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

.home-hero__visual {
  position: relative;
}

.home-hero__image {
  width: 100%;
  min-height: 520px;
  border-radius: var(--radius-xl);
  object-fit: cover;
  box-shadow: var(--shadow);
}

.home-hero__note {
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  padding: 1.25rem;
}

.home-hero__note h2 {
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 1.35rem;
}

.page-shell--first {
  padding-top: 0;
}

.page-shell--compact {
  padding-top: 1rem;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
}

.quick-link {
  padding: 1.15rem;
}

.quick-link strong {
  display: block;
  margin-bottom: 0.55rem;
  color: var(--accent-deep);
  font-size: 1rem;
}

.quick-link p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.quick-link:hover {
  border-color: #bfd0db;
}

.story-grid,
.places-grid,
.events-grid {
  display: grid;
  gap: 1rem;
}

.story-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.story-card,
.place-card,
.event-card,
.route-item,
.travel-card,
.stay-card {
  overflow: hidden;
}

.story-card__image,
.place-card__image,
.event-card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.story-card__body,
.place-card__body,
.event-card__body {
  padding: 1.15rem;
}

.story-card__eyebrow,
.place-card__category,
.event-card__month {
  display: inline-flex;
  margin-bottom: 0.7rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.story-card__body h3,
.place-card__body h3,
.event-card__body h3,
.route-item__body h3,
.travel-card h3,
.map-card h3,
.stay-card h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  line-height: 1.2;
}

.story-card__body p,
.place-card__body p,
.event-card__body p,
.route-item__body p,
.travel-card p,
.map-card p,
.stay-list__item p {
  margin: 0.7rem 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.places-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.routes-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 1rem;
  align-items: start;
}

.routes-list {
  display: grid;
  gap: 0.85rem;
}

.route-item {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
}

.route-item__image {
  width: 100%;
  height: 100%;
  min-height: 170px;
  object-fit: cover;
}

.route-item__body {
  padding: 1rem 1.1rem;
}

.route-item__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.55rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.events-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.planner-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
  gap: 1rem;
  align-items: start;
}

.planner-layout__left,
.planner-layout__right,
.travel-grid {
  display: grid;
  gap: 0.85rem;
}

.travel-card,
.stay-card,
.city-map-card {
  padding: 1.15rem;
}

.travel-card p {
  margin-top: 0.55rem;
}

.city-map-card__actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.stay-list {
  display: grid;
  gap: 0.9rem;
  margin-top: 0.8rem;
}

.stay-list__item {
  display: grid;
  gap: 0.35rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
}

.stay-list__item:first-child {
  padding-top: 0;
  border-top: 0;
}

.stay-list__item strong {
  color: var(--ink);
}

.stay-list__item span {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 700;
}

@media (max-width: 1040px) {
  .home-hero__grid,
  .routes-layout,
  .planner-layout,
  .story-grid,
  .events-grid,
  .quick-links {
    grid-template-columns: 1fr;
  }

  .places-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .route-item {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .hero-stats,
  .places-grid {
    grid-template-columns: 1fr;
  }

  .home-hero__copy {
    padding-top: 0.5rem;
  }

  .home-hero__image {
    min-height: 360px;
  }

  .home-hero__note {
    position: static;
    margin-top: 0.85rem;
  }

  .city-map-card__actions {
    justify-content: flex-start;
  }
}
</style>
