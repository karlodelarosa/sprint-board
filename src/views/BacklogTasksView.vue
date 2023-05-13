<script setup lang="ts">

</script>

<template>
  <h2 class="text-xl">Backlog</h2>
  <div>
    <div class="py-[50px] flex flex-col">
      <h3 class="font-bold">Active board</h3>
      <div class="px-2 py-2 border-b border-gray-300 hover:bg-gray-100 flex flex-row gap-1" v-for="i in 10" :key="i">
        <div class="rounded text-xs p-1 bg-blue-200 w-fit uppercase font-bold">TO DO</div>
        Task 1 - Lorem ipsum dolor sit amet.
      </div>
    </div>

    <div class="flex flex-col">
      <h3 class="font-bold">Tasks</h3>
      <div class="px-2 py-2 border-b border-gray-300 hover:bg-gray-100 flex flex-row gap-1" v-for="i in 10" :key="i">
        <div class="rounded text-xs p-1 bg-blue-200 w-fit uppercase font-bold">TO DO</div>
        Task 1 - Lorem ipsum dolor sit amet.
      </div>
    </div>
  </div>
</template>
  