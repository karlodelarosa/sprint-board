<template>
  <div class="w-full h-screen bg-gradient-to-b from-primary-1 to-primary-2 flex items-center justify-center">
    <div class="w-[500px] h-[300px] bg-white rounded-2xl py-5 px-[30px] shadow-lg">
      <form action="">
        <h2 class="text-center text-2xl mb-[25px]">Sign in</h2>
        <div class="flex flex-col gap-[15px]">
          <div>
            <label for="">Username:</label>
            <input type="text" class="rounded w-full border border-gray-200 py-1 px-2" >
          </div>
          <div class="mb-2">
            <label for="">Password:</label>
            <input type="text" class="rounded w-full border border-gray-200 py-1 px-2">
          </div>

          <button class="w-fit bg-green-500 px-5 py-2 ml-auto rounded text-white">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>