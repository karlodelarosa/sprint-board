<script setup lang="ts">
import { ref } from 'vue'
import { TASK_STATUS } from '@/js/BaseConstant'
import BaseLayout from '@/components/layout/BaseLayout.vue'

const openTicket = ref(false)
const toggleModal = (status: boolean) => {
  openTicket.value = status
}

const openDropdown = ref(false)
</script>

<template>
  <BaseLayout>
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

          <div class="flex flex-col gap-1">
            <div v-for="i in 6" :key="i" @click="toggleModal(true)" class="py-3 px-5 bg-white hover:bg-gray-100 cursor-pointer border border-gray-200 rounded-custom-card">
              <div class="flex flex-row justify-between mb-2">
                <h2 class="text-xl font-bold">Task 1</h2>
                <!-- <div class="relative">
                  <button @click="openPopup($event)" class="group hover:bg-gray-200 rounded-custom-card">
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

                  <div v-if="isOpenPopup" class="absolute top-0 -right-[160px] w-[150px] bg-white border border-gray-200 shadow rounded-custom-card">
                    <div class="flex flex-col">
                      <a href="#" class="text-danger flex flex-row items-center gap-1 hover:bg-gray-100 px-3 py-1">
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.49039 7.00774C1.42455 6.15183 2.10129 5.42102 2.95973 5.42102H10.0927C10.9512 5.42102 11.6279 6.15182 11.5621 7.00774L11.0519 13.6393C10.9929 14.4071 10.3526 15 9.58258 15H3.46985C2.6998 15 2.05957 14.4071 2.00051 13.6393L1.49039 7.00774Z" stroke="#A40404"/>
                          <path d="M12.0526 3.21057H1" stroke="#A40404" stroke-linecap="round"/>
                          <path d="M5.05261 1.73684C5.05261 1.3299 5.3825 1 5.78945 1H7.26314C7.6701 1 7.99998 1.3299 7.99998 1.73684V3.21053H5.05261V1.73684Z" stroke="#A40404"/>
                          <path d="M8.00006 8.36853V12.0527" stroke="#A40404" stroke-linecap="round"/>
                          <path d="M5.05261 8.36853V12.0527" stroke="#A40404" stroke-linecap="round"/>
                        </svg>

                        Delete Task
                      </a>

                      <a href="#" class="flex flex-row items-center gap-1 hover:bg-gray-100 px-3 py-1">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.7196 5.31578L9.68429 2.2805M12.7196 5.31578L8.92661 9.10865C8.42678 9.60848 7.8201 10.0031 7.12358 10.1232C6.42031 10.2445 5.54755 10.2849 5.13134 9.86868C4.71513 9.45247 4.7555 8.57968 4.8768 7.87641C4.99693 7.17989 5.39154 6.57321 5.89134 6.07338L9.68429 2.2805M12.7196 5.31578C12.7196 5.31578 14.9959 3.03932 13.4783 1.52169C11.9607 0.00405188 9.68429 2.2805 9.68429 2.2805M13.8999 7.44995C13.8999 12.3823 12.3823 13.8999 7.44995 13.8999C2.51764 13.8999 1 12.3823 1 7.44995C1 2.51764 2.51764 1 7.44995 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Update Task
                      </a>
                    </div>
                  </div>
                </div> -->
              </div>

              <div class="mb-5">
                <p class="text-gray-400 mb-3 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, asperiores.</p>

                <div class="flex flex-row flex-wrap gap-2">
                  <div v-for="i in 3" :key="i" class="px-2 py-1 text-sm bg-secondary-1 rounded-custom-card">Label {{ i }}
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
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:brightness-90">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.78344 1.18372C9.53596 0.798893 11.662 0.666626 14.1931 0.666626C16.7242 0.666626 18.8503 0.798893 20.6028 1.18372C22.3707 1.57192 23.8399 2.23463 24.9702 3.3514C26.1005 4.46817 26.7711 5.91999 27.1641 7.66672C27.5535 9.39833 27.6874 11.499 27.6874 14C27.6874 16.5009 27.5535 18.6016 27.1641 20.3332C26.7711 22.08 26.1005 23.5317 24.9702 24.6485C23.8399 25.7653 22.3707 26.428 20.6028 26.8162C18.8503 27.201 16.7242 27.3333 14.1931 27.3333C11.662 27.3333 9.53596 27.201 7.78344 26.8162C6.01562 26.428 4.54629 25.7653 3.41603 24.6485C2.28578 23.5317 1.61507 22.08 1.22219 20.3332C0.832716 18.6016 0.698853 16.5009 0.698853 14C0.698853 11.499 0.832716 9.39833 1.22219 7.66672C1.61507 5.91999 2.28578 4.46817 3.41603 3.3514C4.54629 2.23463 6.01562 1.57192 7.78344 1.18372ZM19.1956 10.3905C19.7225 10.9112 19.7225 11.7554 19.1956 12.2761L14.2259 17.1865C13.4625 17.9408 12.2249 17.9408 11.4615 17.1865L9.19065 14.9428C8.66367 14.4221 8.66367 13.5778 9.19065 13.0572C9.71764 12.5365 10.572 12.5365 11.099 13.0572L12.8437 14.781L17.2872 10.3905C17.8142 9.86978 18.6686 9.86978 19.1956 10.3905Z" fill="#7FBC8C"/>
                  </svg>
              </button>

            </div>
            
            </div>
          </div>
      </div>
    </div>
  </section>
</div>
</BaseLayout>

<Transition appear enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutRight">
  <div v-if="openTicket" class="bg-white pt-[100px] px-[30px] h-screen w-1/4 fixed bottom-0 right-0 shadow-xl border border-gray-300 z-10">
    <div class="w-full text-right">
      <!-- <button class="group text-danger rounded-custom-button hover:bg-gray-100 px-3 py-1">
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-slate-400 group-hover:stroke-red-500">
          <path d="M1.49039 7.00774C1.42455 6.15183 2.10129 5.42102 2.95973 5.42102H10.0927C10.9512 5.42102 11.6279 6.15182 11.5621 7.00774L11.0519 13.6393C10.9929 14.4071 10.3526 15 9.58258 15H3.46985C2.6998 15 2.05957 14.4071 2.00051 13.6393L1.49039 7.00774Z"/>
          <path d="M12.0526 3.21057H1" stroke-linecap="round"/>
          <path d="M5.05261 1.73684C5.05261 1.3299 5.3825 1 5.78945 1H7.26314C7.6701 1 7.99998 1.3299 7.99998 1.73684V3.21053H5.05261V1.73684Z"/>
          <path d="M8.00006 8.36853V12.0527" stroke-linecap="round"/>
          <path d="M5.05261 8.36853V12.0527" stroke-linecap="round"/>
        </svg>
      </button> -->

      <button class="group text-danger rounded-custom-button hover:bg-gray-100 px-3 py-1" @click="toggleModal(false)">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L1 12M1 1L12 12" stroke="#999999" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div class="mb-8">
      <h2 class="text-3xl font-bold mb-2">Task 1</h2>
      <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, facere?</p>
    </div>

    <div class="mb-[30px] relative">
      <button @click="openDropdown = !openDropdown" class="flex flex-row items-center justify-between gap-3 bg-purple-200 px-[20px] py-[5px] border-2 border-primary-text text-primary-text rounded-custom-button transition-all duration-100 hover:brightness-90">
        In progress
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L6 6L1 1" stroke="#060C41" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <transition name="fade">
        <div v-if="openDropdown" class="shadow-xl rounded-lg overflow-hidden absolute top-[40px] left-0 right-0">
          <div @click="openDropdown = false" class="px-2 py-1 bg-purple-200 cursor-pointer hover:brightness-90">To do</div>
          <div @click="openDropdown = false" class="px-2 py-1 bg-purple-200 cursor-pointer hover:brightness-90">In progress</div>
          <div @click="openDropdown = false" class="px-2 py-1 bg-purple-200 cursor-pointer hover:brightness-90">Done</div>
        </div>
      </transition>
    </div>

    <div class="flex flex-row flex-wrap gap-2">
      <div v-for="i in 3" :key="i" class="px-2 py-1 text-sm bg-secondary-1 rounded-custom-card">Label {{ i }}
      </div>
    </div>
  </div>
</Transition>

</template>
