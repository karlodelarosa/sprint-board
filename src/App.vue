<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseLayout from './components/layout/BaseLayout.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition appear enter-active-class="animate__animated animate__fadeIn">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>
