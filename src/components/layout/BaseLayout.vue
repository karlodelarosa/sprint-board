<script setup lang="ts">
import NavMenu from './NavMenu.vue'
import SidebarMenu from './SidebarMenu.vue'
</script>

<template>
  <NavMenu />
  <SidebarMenu />
  <main class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <slot></slot>
    </div>
  </main>
</template>