<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navItems = [
  { label: 'Главная', to: '/' },
  { label: 'Маршруты и события', to: '/guide' },
  { label: 'История и наследие', to: '/heritage' },
]

const isMenuOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="site-header">
    <div class="container header-layout">
      <RouterLink class="brand" to="/">
        <img class="brand__logo" src="/media/kovrov/logo.gif" alt="Герб города Коврова" />
        <span class="brand__copy">
          <strong>Ковров</strong>
          <small>городской сайт</small>
        </span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="site-navigation"
        aria-label="Открыть навигацию"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="site-navigation"
        class="site-nav"
        :class="{ 'site-nav--open': isMenuOpen }"
        aria-label="Основная навигация"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          class="site-nav__link"
          :to="item.to"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink class="header-action" :to="{ path: '/guide', hash: '#events' }">
        Афиша
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(245, 243, 238, 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(10px);
}

.header-layout {
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr auto;
  align-items: center;
  gap: 1rem;
  min-height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
}

.brand__logo {
  width: 42px;
  height: 42px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #ffffff;
  padding: 0.25rem;
}

.brand__copy {
  display: grid;
  gap: 0.1rem;
}

.brand__copy strong {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--ink);
}

.brand__copy small {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 600;
}

.site-nav {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
}

.site-nav__link {
  position: relative;
  padding: 0.5rem 0;
  color: var(--muted);
  font-weight: 700;
}

.site-nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  border-radius: 999px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.18s ease;
}

.site-nav__link:hover,
.site-nav__link.router-link-active {
  color: var(--accent-deep);
}

.site-nav__link:hover::after,
.site-nav__link.router-link-active::after {
  transform: scaleX(1);
}

.header-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: var(--accent);
  color: #ffffff;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 0.22rem;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #ffffff;
}

.menu-toggle span {
  width: 18px;
  height: 2px;
  margin-inline: auto;
  border-radius: 999px;
  background: var(--accent-deep);
}

@media (max-width: 920px) {
  .header-layout {
    grid-template-columns: minmax(0, 1fr) auto auto;
    padding-block: 0.75rem;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .site-nav {
    display: none;
    grid-column: 1 / -1;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem 0 0.25rem;
  }

  .site-nav--open {
    display: flex;
  }

  .site-nav__link {
    padding: 0.75rem 0;
    border-top: 1px solid var(--line);
  }
}

@media (max-width: 640px) {
  .header-layout {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .header-action {
    grid-column: 1 / -1;
    width: 100%;
  }

  .brand__copy small {
    display: none;
  }
}
</style>
