<script setup lang="ts">
import SidebarItem from '../atom/SidebarItem.vue'
import { SIDEBAR_MENU as items } from '@/js/BaseConstant'
</script>

<template>
  <ul class="space-y-2 font-medium">
    <SidebarItem :items="items" />
  </ul>
</template>
