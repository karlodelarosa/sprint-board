<script setup lang="ts">
import { TASK_STATUS } from '@/js/BaseConstant'

</script>

<template>
  <div class="px-4">
    <section class="flex flex-row items-center justify-between mb-10">
      <div>
        <h1 class="text-primary-text text-4xl ">Sprint 1</h1>
        <p class="text-gray-600">May 2 - May 12</p>
      </div>

      <div>
        <button
          class="bg-primary-1 px-[30px] py-[5px] text-white rounded-custom-button transition-all duration-100 hover:brightness-90">Complete
          Sprint</button>
      </div>
    </section>

    <section>
      <div class="mb-5">
        <button
          class="bg-primary-2 border-2 border-primary-text px-[30px] py-[5px] text-primary-text rounded-custom-button transition-all duration-100 hover:brightness-90">Create
          task</button>
      </div>

      <div class="task-board grid grid-cols-4 gap-6">
        <div v-for="(column, id) in TASK_STATUS" :key="id"  class="bg-gray-200 rounded-custom-column p-3">
          <div class="text-center text-lg font-bold mb-5">{{ column.title }}</div>
          <div class="py-3 px-5 bg-white border border-gray-200 rounded-custom-card">
            <div class="flex flex-row justify-between">
              <h2 class="text-lg font-bold">Task 1</h2>
              <button class="group hover:bg-gray-200 rounded-custom-card">
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:fill-black group-hover:stroke-black">
                  <path
                    d="M6.86627 14C7.98418 14 8.89041 13.1046 8.89041 12C8.89041 10.8954 7.98418 10 6.86627 10C5.74837 10 4.84213 10.8954 4.84213 12C4.84213 13.1046 5.74837 14 6.86627 14Z"
                    fill="#CCCCCC" />
                  <path
                    d="M12.9387 14C14.0566 14 14.9628 13.1046 14.9628 12C14.9628 10.8954 14.0566 10 12.9387 10C11.8208 10 10.9146 10.8954 10.9146 12C10.9146 13.1046 11.8208 14 12.9387 14Z"
                    fill="#CCCCCC" />
                  <path
                    d="M21.0353 12C21.0353 13.1046 20.1291 14 19.0111 14C17.8932 14 16.987 13.1046 16.987 12C16.987 10.8954 17.8932 10 19.0111 10C20.1291 10 21.0353 10.8954 21.0353 12Z"
                    fill="#CCCCCC" />
                </svg>
              </button>
            </div>

            <div class="mb-5">
              <p class="text-gray-400 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, asperiores.</p>

              <div class="flex flex-row flex-wrap gap-2">
                <div v-for="i in 3" :key="i" class="px-2 py-1 text-sm bg-primary-1 rounded-custom-card">Label {{ i }}
                </div>
              </div>
            </div>

            <div class="flex flex-row items-0 justify-between">
              <button class="group hover:bg-gray-200 px-2 rounded-custom-button">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4_411)">
                    <path d="M5.12742 3.79163L2.08728 6.49996L5.12742 9.20829" stroke="#BEBEBE" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.4133 6.5H3.45833" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_411">
                      <rect x="0.597015" width="14.3066" height="13" rx="6.5" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>


              <button class="group">
                <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:brightness-90">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.3121 0.681141C10.3384 0.236185 12.7967 0.083252 15.7233 0.083252C18.6499 0.083252 21.1081 0.236185 23.1345 0.681141C25.1786 1.13 26.8774 1.89625 28.1843 3.18752C29.4912 4.47879 30.2666 6.15745 30.721 8.17711C31.1713 10.1793 31.3261 12.6082 31.3261 15.4999C31.3261 18.3916 31.1713 20.8205 30.721 22.8227C30.2666 24.8424 29.4912 26.521 28.1843 27.8123C26.8774 29.1036 25.1786 29.8698 23.1345 30.3187C21.1081 30.7637 18.6499 30.9166 15.7233 30.9166C12.7967 30.9166 10.3384 30.7637 8.3121 30.3187C6.26806 29.8698 4.56914 29.1036 3.26228 27.8123C1.95543 26.521 1.17992 24.8424 0.72565 22.8227C0.275324 20.8205 0.120544 18.3916 0.120544 15.4999C0.120544 12.6082 0.275324 10.1793 0.72565 8.17711C1.17992 6.15745 1.95543 4.47879 3.26228 3.18752C4.56914 1.89625 6.26806 1.13 8.3121 0.681141ZM21.5074 11.3265C22.1167 11.9285 22.1167 12.9047 21.5074 13.5067L15.7612 19.1843C14.8786 20.0565 13.4475 20.0565 12.5648 19.1843L9.93918 16.59C9.32987 15.988 9.32987 15.0118 9.93918 14.4098C10.5485 13.8078 11.5364 13.8078 12.1458 14.4098L14.163 16.403L19.3009 11.3265C19.9101 10.7244 20.8981 10.7244 21.5074 11.3265Z"
                  fill="#7FBC8C" />
              </svg>


            </button>

          </div>
        </div>
      </div>
    </div>
  </section>
</div></template>
