<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <nav class="flex gap-6 bg-gray-100 p-4 shadow">
    <RouterLink to="/Home" class="hover:underline">Home</RouterLink>
    <RouterLink to="/MarketPlace" class="hover:underline"
      >MarketPlace</RouterLink
    >
  </nav>
  <Header />

  <!-- Route content -->
  <main class="min-h-[70vh] p-6">
    <router-view />
  </main>

  <Footer />
</template>
