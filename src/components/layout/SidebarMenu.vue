<script setup lang="ts">
import SidebarItemGroup from './molecule/SidebarItemGroup.vue'
</script>

<template>
  <aside id="logo-sidebar" aria-label="Sidebar">
    <div class="content">
      <div class="user-detail">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77.8219 89.1056C70.9861 81.4709 61.0544 76.6667 50 76.6667C38.9458 76.6667 29.0129 81.4709 22.1771 89.1056M50 98C23.4903 98 2 76.5099 2 50C2 23.4903 23.4903 2 50 2C76.5099 2 98 23.4903 98 50C98 76.5099 76.5099 98 50 98ZM50 60.6667C41.1632 60.6667 34 53.5035 34 44.6667C34 35.8301 41.1632 28.6667 50 28.6667C58.8368 28.6667 66 35.8301 66 44.6667C66 53.5035 58.8368 60.6667 50 60.6667Z" stroke="black" stroke-width="3.072" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h1 class="text-lg font-bold text-center">Karlo Dela Rosa</h1>
      </div>

      <SidebarItemGroup />
    </div>
  </aside>
</template>

<style scoped>
#logo-sidebar {
  @apply fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-red-100 border-r border-gray-200 sm:translate-x-0;
}

.user-detail {
  @apply mb-6
}

.user-detail > svg {
  @apply mx-auto mb-3
}

#logo-sidebar > .content {
  @apply h-full px-3 py-12 overflow-y-auto bg-gradient-to-b from-primary-1 to-primary-2;
}
</style>
