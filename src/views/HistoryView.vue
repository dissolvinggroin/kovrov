<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { heritageCards, heritageMilestones } from '../data/kovrov'

const heritageFacts = [
  { value: '1532/33', label: 'первое письменное упоминание' },
  { value: '1778', label: 'городской статус и герб' },
  { value: '1916', label: 'старт крупного оборонного производства' },
  { value: '2011', label: 'звание города воинской славы' },
]
</script>

<template>
  <div class="heritage-page">
    <section class="heritage-hero">
      <div class="container heritage-hero__grid">
        <div class="heritage-hero__copy">
          <div class="section-heading">
            <span class="eyebrow">История города</span>
            <h1>История и наследие Коврова.</h1>
            <p>
              Основные даты, памятные места и материалы, связанные с историей города и
              его развитием.
            </p>
          </div>
        </div>

        <div class="heritage-hero__visual">
          <img src="/media/kovrov/christmas-cathedral.jpg" alt="Христо-Рождественский собор" />
          <div class="surface-card heritage-hero__badge">
            <img src="/media/kovrov/logo.gif" alt="Герб города Коврова" />
            <div>
              <strong>Ковров</strong>
              <p>город воинской славы и промышленной истории</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-shell">
      <div class="container">
        <div class="surface-card timeline-card">
          <div class="section-heading">
            <span class="eyebrow">Хронология</span>
            <h2>Ключевые даты истории Коврова.</h2>
            <p>
              Основные этапы развития города от первых упоминаний до современного статуса.
            </p>
          </div>

          <div class="timeline">
            <article v-for="item in heritageMilestones" :key="item.year" class="timeline__item">
              <div class="timeline__year">{{ item.year }}</div>
              <div class="timeline__content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="page-shell page-shell--compact">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Наследие города</span>
          <h2>Храмы, промышленность и ремесла.</h2>
          <p>
            Ключевые направления, через которые можно увидеть историю и характер города.
          </p>
        </div>

        <div class="heritage-grid">
          <article v-for="card in heritageCards" :key="card.title" class="surface-card heritage-card">
            <img class="heritage-card__image" :src="card.image" :alt="card.alt" />
            <div class="heritage-card__body">
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
              <div class="chip-list">
                <span v-for="fact in card.facts" :key="fact" class="chip">{{ fact }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="page-shell">
      <div class="container summary-layout">
        <div class="surface-card summary-facts">
          <div class="section-heading">
            <span class="eyebrow">Короткая памятка</span>
            <h2>Четыре даты, которые стоит помнить.</h2>
          </div>

          <div class="summary-facts__grid">
            <article v-for="item in heritageFacts" :key="item.value" class="summary-facts__item">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </article>
          </div>
        </div>

        <div class="surface-card summary-note">
          <h2>История города</h2>
          <p>
            Ковров связан с железной дорогой, промышленностью, оружейной школой и
            памятными местами, которые до сих пор определяют его городской облик.
          </p>
          <div class="button-row">
            <RouterLink class="button" to="/guide">Вернуться к маршрутам</RouterLink>
            <RouterLink class="button button--soft" to="/">На главную</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.heritage-hero {
  padding-block: 2.2rem 1.25rem;
}

.heritage-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.95fr);
  gap: 1.25rem;
  align-items: start;
}

.heritage-hero__copy {
  padding: 1.5rem 0;
}

.heritage-hero__visual {
  position: relative;
}

.heritage-hero__visual > img {
  width: 100%;
  min-height: 460px;
  border-radius: var(--radius-xl);
  object-fit: cover;
  box-shadow: var(--shadow);
}

.heritage-hero__badge {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: center;
  padding: 1rem;
}

.heritage-hero__badge img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #ffffff;
  padding: 0.3rem;
}

.heritage-hero__badge strong {
  display: block;
  color: var(--accent-deep);
  font-size: 1rem;
}

.heritage-hero__badge p {
  margin: 0.25rem 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.page-shell--compact {
  padding-top: 1rem;
}

.timeline-card {
  padding: 1.2rem;
}

.timeline {
  display: grid;
  gap: 0.85rem;
}

.timeline__item {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.timeline__year {
  padding-top: 0.95rem;
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.timeline__content {
  padding: 1rem 1.1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface-muted);
}

.timeline__content h3,
.heritage-card__body h3,
.summary-note h2 {
  margin: 0;
  font-family: var(--font-heading);
  line-height: 1.2;
}

.timeline__content p,
.heritage-card__body p,
.summary-note p {
  margin: 0.65rem 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.heritage-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.heritage-card {
  overflow: hidden;
}

.heritage-card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.heritage-card__body {
  padding: 1.15rem;
}

.summary-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
  gap: 1rem;
}

.summary-facts,
.summary-note {
  padding: 1.15rem;
}

.summary-facts__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.summary-facts__item {
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface-muted);
}

.summary-facts__item strong {
  display: block;
  margin-bottom: 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.45rem;
  color: var(--accent-deep);
}

.summary-facts__item span {
  color: var(--muted);
  line-height: 1.55;
}

@media (max-width: 1040px) {
  .heritage-hero__grid,
  .heritage-grid,
  .summary-layout,
  .timeline__item {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .heritage-hero__visual > img {
    min-height: 360px;
  }

  .heritage-hero__badge {
    position: static;
    margin-top: 0.85rem;
  }

  .summary-facts__grid {
    grid-template-columns: 1fr;
  }
}
</style>
