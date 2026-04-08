<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapElement = ref<HTMLDivElement | null>(null)
let map: L.Map | null = null

const cityPoints = [
  {
    title: 'Центр Коврова',
    description: 'Исторический центр и основные городские улицы.',
    coords: [56.3609, 41.3166] as [number, number],
    primary: true,
  },
  {
    title: 'Ковровский историко-мемориальный музей',
    description: 'Одна из главных музейных точек города.',
    coords: [56.3581, 41.3197] as [number, number],
    primary: false,
  },
  {
    title: 'Спасо-Преображенский собор',
    description: 'Заметный ориентир старого Коврова.',
    coords: [56.3573, 41.3208] as [number, number],
    primary: false,
  },
  {
    title: 'Дом-музей В.А. Дегтярева',
    description: 'Памятное место, связанное с оружейной историей города.',
    coords: [56.3667, 41.3054] as [number, number],
    primary: false,
  },
]

onMounted(() => {
  if (!mapElement.value || map) return

  map = L.map(mapElement.value, {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView([56.3609, 41.3166], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map)

  cityPoints.forEach((point) => {
    const marker = L.circleMarker(point.coords, {
      radius: point.primary ? 8 : 6,
      color: point.primary ? '#18354a' : '#aa5a21',
      fillColor: point.primary ? '#2f6d96' : '#cf864a',
      fillOpacity: 0.92,
      weight: 2,
    }).addTo(map!)

    marker.bindPopup(
      `<strong>${point.title}</strong><br>${point.description}`,
      { closeButton: false, offset: [0, -6] },
    )
  })
})

onBeforeUnmount(() => {
  if (!map) return
  map.remove()
  map = null
})
</script>

<template>
  <div class="city-map">
    <div ref="mapElement" class="city-map__frame"></div>

    <div class="city-map__legend">
      <span class="city-map__chip city-map__chip--primary">центр города</span>
      <span class="city-map__chip">музеи и памятные места</span>
    </div>
  </div>
</template>

<style scoped>
.city-map {
  display: grid;
  gap: 0.9rem;
}

.city-map__frame {
  min-height: 420px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--line);
}

.city-map__legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.city-map__chip {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: #f2ece2;
  color: var(--accent-deep);
  font-size: 0.82rem;
  font-weight: 700;
}

.city-map__chip--primary {
  background: #dfe9ef;
}

@media (max-width: 720px) {
  .city-map__frame {
    min-height: 320px;
  }
}
</style>
