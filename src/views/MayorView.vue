<script setup lang="ts">
import { RouterLink } from 'vue-router'

const priorities = [
  {
    title: 'Городская среда',
    description:
      'Благоустройство дворов, общественных пространств, освещение, чистота улиц и понятная ежедневная навигация по городу.',
    points: ['дворовые территории', 'общественные пространства', 'уличное освещение'],
  },
  {
    title: 'Дороги и транспорт',
    description:
      'Состояние улиц, пешеходных маршрутов, остановок и связность городских районов остаются одной из постоянных задач администрации.',
    points: ['улично-дорожная сеть', 'остановочные узлы', 'пешеходные маршруты'],
  },
  {
    title: 'Социальные объекты',
    description:
      'Школы, детские сады, учреждения культуры и спорта требуют системной работы не только в строительстве, но и в повседневном содержании.',
    points: ['образование', 'культура и спорт', 'городская инфраструктура'],
  },
  {
    title: 'Обращения жителей',
    description:
      'Личный прием, письменные обращения и выездные встречи помогают быстрее собирать обратную связь по реальным городским вопросам.',
    points: ['личный прием', 'обратная связь', 'работа по районам'],
  },
]

const workFormats = [
  {
    title: 'Личный прием граждан',
    description:
      'Обращения жителей рассматриваются как отдельный рабочий формат, а не только как формальная процедура.',
  },
  {
    title: 'Выездные обходы',
    description:
      'По районам, общественным пространствам и проблемным точкам города удобно работать на месте, вместе с профильными службами.',
  },
  {
    title: 'Координация с учреждениями',
    description:
      'Работа администрации строится через взаимодействие со школами, культурными площадками, предприятиями и городскими службами.',
  },
]

const mayorFocus = [
  'благоустройство центральных и жилых кварталов',
  'содержание дорог, тротуаров и общественных пространств',
  'развитие социальной и культурной среды города',
]

const receptionSteps = [
  'Сформулировать вопрос коротко и предметно: благоустройство, транспорт, социальная инфраструктура, работа служб.',
  'Подать обращение через официальный сайт администрации или передать его в приемную.',
  'При необходимости приложить адрес, фотографии или краткое описание ситуации, чтобы обращение быстрее ушло в работу.',
]
</script>

<template>
  <div class="mayor-page">
    <section class="mayor-hero">
      <div class="container mayor-hero__grid">
        <div class="mayor-hero__copy">
          <div class="section-heading">
            <span class="eyebrow">Администрация города</span>
            <h1>Филькин Андрей</h1>
            <p>
              Информация о главе города, ключевых направлениях работы администрации и
              взаимодействии с жителями Коврова.
            </p>
          </div>

          <div class="surface-card mayor-summary">
            <span class="mayor-summary__role">Глава города Коврова</span>
            <p>
              В центре внимания главы города находятся вопросы городской среды,
              социальная инфраструктура, транспортная связность, обращения граждан и
              текущее состояние городского хозяйства.
            </p>
            <div class="chip-list">
              <span class="chip">обращения граждан</span>
              <span class="chip">благоустройство</span>
              <span class="chip">городские службы</span>
            </div>
          </div>

          <div class="button-row">
            <a class="button" href="#priorities">Приоритеты работы</a>
            <a class="button button--soft" href="#reception">Как обратиться</a>
          </div>
        </div>

        <div class="mayor-hero__visual">
          <img
            class="mayor-hero__image"
            src="/media/kovrov/MER.jpg"
            alt="Портрет Филькина Андрея"
          />
          <div class="surface-card mayor-hero__badge">
            <strong>Филькин Андрей</strong>
            <p>глава города Коврова</p>
          </div>
        </div>
      </div>
    </section>

    <section id="priorities" class="page-shell page-shell--compact">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Приоритеты</span>
          <h2>Основные направления работы.</h2>
          <p>
            Основное внимание уделяется вопросам, которые напрямую связаны с
            повседневной жизнью города, состоянием инфраструктуры и качеством городской среды.
          </p>
        </div>

        <div class="priorities-grid">
          <article v-for="item in priorities" :key="item.title" class="surface-card priority-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul class="priority-card__list">
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="page-shell">
      <div class="container mayor-layout">
        <div class="surface-card workstreams-card">
          <div class="section-heading">
            <span class="eyebrow">Рабочий формат</span>
            <h2>Основные форматы работы главы города.</h2>
            <p>
              Помимо совещаний и документов, у городской администрации есть несколько
              постоянных форматов, через которые решаются ежедневные задачи.
            </p>
          </div>

          <div class="workstreams-grid">
            <article
              v-for="(item, index) in workFormats"
              :key="item.title"
              class="workstreams-grid__item"
            >
              <span class="workstreams-grid__index">0{{ index + 1 }}</span>
              <div class="workstreams-grid__body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </article>
          </div>
        </div>

        <aside class="surface-card mayor-focus">
          <span class="eyebrow">Фокус работы</span>
          <h2>На что чаще всего смотрит администрация.</h2>
          <p>
            Администрация города ведет работу по вопросам, которые напрямую влияют на
            состояние городской среды, инфраструктуры и качество жизни жителей.
          </p>

          <ul class="meta-list">
            <li v-for="item in mayorFocus" :key="item">{{ item }}</li>
          </ul>
        </aside>
      </div>
    </section>

    <section id="reception" class="page-shell page-shell--compact">
      <div class="container reception-layout">
        <div class="surface-card reception-card">
          <div class="section-heading">
            <span class="eyebrow">Обращения граждан</span>
            <h2>Как обратиться по городским вопросам.</h2>
            <p>
              В этом разделе собрана основная информация о том, как направить обращение
              в администрацию по городским вопросам.
            </p>
          </div>

          <ol class="reception-steps">
            <li v-for="step in receptionSteps" :key="step">{{ step }}</li>
          </ol>
        </div>

        <div class="reception-links">
          <a
            class="surface-card reception-link"
            href="https://www.kovrov-gorod.ru/"
            target="_blank"
            rel="noreferrer"
          >
            <span class="reception-link__eyebrow">Официальный сайт</span>
            <h3>Перейти в администрацию города</h3>
            <p>Новости, документы, обращения и официальная городская информация.</p>
          </a>

          <RouterLink class="surface-card reception-link" to="/guide">
            <span class="reception-link__eyebrow">Городские разделы</span>
            <h3>Маршруты и события</h3>
            <p>Быстрый переход к афише, маршрутам и полезной информации по городу.</p>
          </RouterLink>

          <a
            class="surface-card reception-link"
            href="https://yandex.ru/maps/?ll=41.294101%2C56.362678&z=13"
            target="_blank"
            rel="noreferrer"
          >
            <span class="reception-link__eyebrow">Навигация</span>
            <h3>Открыть карту Коврова</h3>
            <p>Полезно, если нужно быстро сориентироваться по району, улице или объекту.</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mayor-hero {
  padding-block: 1.9rem 1rem;
}

.mayor-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.94fr);
  gap: 1.5rem;
  align-items: start;
}

.mayor-hero__copy {
  display: grid;
  gap: 1rem;
  align-content: start;
  min-width: 0;
}

.mayor-summary {
  display: grid;
  gap: 0.95rem;
  padding: 1.2rem;
}

.mayor-summary__role {
  display: inline-flex;
  align-items: center;
  justify-self: start;
  min-height: 32px;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-deep);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mayor-summary p {
  margin: 0;
  color: var(--muted);
  line-height: 1.72;
}

.mayor-hero__visual {
  position: relative;
}

.mayor-hero__image {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-xl);
  object-fit: cover;
  object-position: center 18%;
  box-shadow: var(--shadow);
  background: #f0ece4;
}

.mayor-hero__badge {
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  padding: 1rem 1.1rem;
}

.mayor-hero__badge strong {
  display: block;
  margin: 0;
  color: var(--accent-deep);
  font-family: var(--font-heading);
  font-size: 1.4rem;
}

.mayor-hero__badge p {
  margin: 0.35rem 0 0;
  color: var(--muted);
}

.page-shell--compact {
  padding-top: 1rem;
}

.priorities-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.priority-card {
  display: grid;
  gap: 0.8rem;
  align-content: start;
  padding: 1.2rem;
}

.priority-card h3,
.workstreams-grid__item h3,
.mayor-focus h2,
.reception-link h3 {
  margin: 0;
  font-family: var(--font-heading);
  line-height: 1.15;
}

.priority-card p,
.workstreams-grid__item p,
.mayor-focus p,
.reception-link p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.priority-card__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.priority-card__list li {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-deep);
  font-size: 0.84rem;
  font-weight: 700;
}

.mayor-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 1rem;
  align-items: start;
}

.workstreams-card,
.mayor-focus,
.reception-card,
.reception-link {
  padding: 1.2rem;
}

.workstreams-grid {
  display: grid;
  gap: 0.85rem;
}

.workstreams-grid__item {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  padding: 1.05rem 0;
  border-top: 1px solid var(--line);
}

.workstreams-grid__item:first-child {
  padding-top: 0;
  border-top: 0;
}

.workstreams-grid__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: var(--surface-muted);
  color: var(--accent-deep);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
}

.workstreams-grid__body {
  display: grid;
  gap: 0.55rem;
}

.mayor-focus {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.mayor-focus .eyebrow {
  margin-bottom: 0;
}

.reception-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 1rem;
  align-items: start;
}

.reception-steps {
  display: grid;
  gap: 0.9rem;
  margin: 0;
  padding-left: 1.2rem;
  color: var(--muted);
}

.reception-steps li {
  padding-left: 0.2rem;
  line-height: 1.72;
}

.reception-links {
  display: grid;
  gap: 0.85rem;
}

.reception-link {
  display: grid;
  gap: 0.7rem;
  align-content: start;
}

.reception-link:hover,
.priority-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 34px rgba(20, 42, 58, 0.1);
}

.reception-link__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-self: start;
  min-height: 30px;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  background: #f2ece2;
  color: var(--accent-deep);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .mayor-hero__grid,
  .mayor-layout,
  .reception-layout {
    grid-template-columns: 1fr;
  }

  .mayor-hero__image {
    aspect-ratio: 16 / 15;
  }
}

@media (max-width: 720px) {
  .priorities-grid {
    grid-template-columns: 1fr;
  }

  .workstreams-grid__item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .workstreams-grid__index {
    justify-self: start;
    min-width: 64px;
  }

  .mayor-hero__image {
    aspect-ratio: 1 / 1;
  }

  .mayor-hero__badge {
    position: static;
    margin-top: 0.85rem;
  }
}
</style>
