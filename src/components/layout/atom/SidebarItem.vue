<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface Items {
  title: string
  url: string
}

const props = defineProps<{
  items: Items[]
}>()

const route = useRoute()
const currentRoute = computed(() => route.name)
</script>

<template>
  <li v-for="(item, i) in props.items" :key="i">
    <RouterLink :to="item.url" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <span class="ml-3">{{ item.title }}</span>
    </RouterLink>
  </li>
</template>