<script setup lang="ts">
import NavMenu from './NavMenu.vue'
import SidebarMenu from './SidebarMenu.vue'
</script>

<template>
  
  <SidebarMenu />
  <main class="sm:ml-64">
    <NavMenu />
    <div class="p-4 rounded-lg dark:border-gray-700">
      <slot></slot>
    </div>
  </main>
</template>
