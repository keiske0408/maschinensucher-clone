<script setup></script>

<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-blue-700">Maschinensucher</a>

      <!-- Search -->
      <div class="flex border rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search machines..."
          class="px-4 py-2 outline-none"
        />
        <button class="bg-blue-600 text-white px-4 hover:bg-blue-700">
          Search
        </button>
      </div>

      <!-- Links -->
      <nav class="hidden md:flex space-x-6">
        <a href="#" class="text-gray-700 hover:text-blue-600">Sell Machine</a>
        <a href="#" class="text-gray-700 hover:text-blue-600">Login</a>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
