<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { annualEvents, routeCards, travelOptions, usefulLinks } from '../data/kovrov'

const utilityTags = ['Официально', 'Для поездки', 'Навигация']
</script>

<template>
  <div class="guide-page">
    <section class="guide-hero">
      <div class="guide-hero__backdrop">
        <img src="/media/kovrov/gunsmiths-square.jpg" alt="Сквер Оружейников в Коврове" />
      </div>
      <div class="container guide-hero__content">
        <div class="section-heading section-heading--light">
          <span class="eyebrow">События и маршруты</span>
          <h1>Маршруты, события и полезная информация.</h1>
          <p>
            Здесь собраны основные маршруты по Коврову, городская афиша и ссылки на
            полезные ресурсы для жителей и гостей города.
          </p>
        </div>
      </div>
    </section>

    <section class="page-shell">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Маршруты</span>
          <h2>Основные маршруты по городу.</h2>
          <p>
            Прогулка по центру, памятные места и поездки по окрестностям помогают
            познакомиться с городом и его историей.
          </p>
        </div>

        <div class="route-stack">
          <article v-for="route in routeCards" :key="route.title" class="surface-card route-panel">
            <img class="route-panel__image" :src="route.image" :alt="route.alt" />
            <div class="route-panel__body">
              <div class="route-panel__meta">
                <span>{{ route.label }}</span>
                <strong>{{ route.duration }}</strong>
              </div>
              <h3>{{ route.title }}</h3>
              <p>{{ route.summary }}</p>
              <ul class="route-panel__stops">
                <li v-for="stop in route.stops" :key="stop">{{ stop }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="events" class="page-shell page-shell--compact">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Календарь города</span>
          <h2>События Коврова.</h2>
          <p>
            Основные городские фестивали, праздники и сезонные мероприятия.
          </p>
        </div>

        <div class="event-grid">
          <article v-for="event in annualEvents" :key="event.title" class="surface-card event-panel">
            <img class="event-panel__image" :src="event.image" :alt="event.alt" />
            <div class="event-panel__body">
              <span class="event-panel__month">{{ event.month }}</span>
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="page-shell">
      <div class="container utility-layout">
        <div class="utility-layout__left">
          <div class="section-heading">
            <span class="eyebrow">Полезная информация</span>
            <h2>Городские ссылки и справка.</h2>
            <p>
              Здесь собраны основные городские ссылки и информация, которая может
              пригодиться перед поездкой в Ковров.
            </p>
          </div>

          <div class="utility-links">
            <article
              v-for="(item, index) in usefulLinks"
              :key="item.href"
              class="surface-card utility-link"
            >
              <span class="utility-link__tag">{{ utilityTags[index] ?? 'Сервис' }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <a class="utility-link__action" :href="item.href" target="_blank" rel="noreferrer">
                {{ item.label }}
              </a>
            </article>
          </div>
        </div>

        <aside class="surface-card travel-note">
          <h3>Как добраться</h3>
          <div class="travel-note__stack">
            <article v-for="item in travelOptions" :key="item.mode">
              <strong>{{ item.mode }}</strong>
              <p>{{ item.lead }}</p>
              <ul class="meta-list">
                <li v-for="detail in item.details.slice(0, 2)" :key="detail">{{ detail }}</li>
              </ul>
            </article>
          </div>

          <RouterLink class="button button--soft travel-note__action" to="/heritage">
            Перейти к истории города
          </RouterLink>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.guide-hero {
  position: relative;
  overflow: hidden;
  min-height: 320px;
  background: #102839;
}

.guide-hero__backdrop {
  position: absolute;
  inset: 0;
}

.guide-hero__backdrop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.32;
}

.guide-hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: end;
  min-height: 320px;
  padding-block: 2.25rem;
}

.page-shell--compact {
  padding-top: 1rem;
}

.route-stack,
.event-grid,
.utility-links {
  display: grid;
  gap: 1rem;
}

.route-panel {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  overflow: hidden;
}

.route-panel__image {
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
}

.route-panel__body {
  padding: 1.2rem;
}

.route-panel__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.7rem;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.route-panel__body h3,
.event-panel__body h3,
.utility-link h3,
.travel-note h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1.2;
}

.route-panel__body p,
.event-panel__body p,
.utility-link p,
.travel-note p {
  margin: 0.7rem 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.route-panel__stops {
  display: grid;
  gap: 0.55rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.route-panel__stops li {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  color: var(--muted);
}

.route-panel__stops li::before {
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: var(--accent-warm);
}

.event-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.event-panel {
  overflow: hidden;
}

.event-panel__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.event-panel__body {
  padding: 1.15rem;
}

.event-panel__month {
  display: inline-flex;
  margin-bottom: 0.65rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.utility-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 1rem;
  align-items: start;
}

.utility-links {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.utility-link,
.travel-note {
  padding: 1.15rem;
}

.utility-link {
  display: grid;
  gap: 0.8rem;
  align-content: start;
  min-height: 220px;
  padding: 1.3rem;
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(31, 76, 107, 0.05), rgba(255, 255, 255, 0) 92px),
    var(--surface);
}

.utility-link:last-child {
  grid-column: 1 / -1;
  min-height: 0;
}

.utility-link__tag {
  display: inline-flex;
  align-items: center;
  justify-self: start;
  min-height: 30px;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-deep);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.utility-link h3 {
  max-width: 12ch;
  font-size: clamp(1.2rem, 1vw + 0.95rem, 1.65rem);
  line-height: 1.08;
  text-wrap: balance;
  overflow-wrap: anywhere;
}

.utility-link p {
  margin: 0;
  max-width: 30ch;
}

.utility-link__action {
  display: inline-flex;
  align-items: center;
  justify-self: start;
  margin-top: auto;
  color: var(--accent);
  font-weight: 700;
}

.utility-link__action:hover {
  color: var(--accent-deep);
}

.travel-note__stack {
  display: grid;
  gap: 1rem;
  margin-top: 0.9rem;
}

.travel-note__stack article {
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
}

.travel-note__stack article:first-child {
  padding-top: 0;
  border-top: 0;
}

.travel-note__stack strong {
  color: var(--accent-deep);
}

.travel-note__action {
  margin-top: 1rem;
}

@media (max-width: 1180px) {
  .event-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .utility-layout {
    grid-template-columns: 1fr;
  }

  .guide-hero,
  .guide-hero__content {
    min-height: 280px;
  }
}

@media (max-width: 900px) {
  .route-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .event-grid,
  .utility-links {
    grid-template-columns: 1fr;
  }

  .utility-link:last-child {
    grid-column: auto;
  }
}
</style>
