<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import MarketplaceandCategories from "./views/MarketplaceandCategories.vue";
import CategoryRelevance from "./components/CategoryRelevance.vue";
import AuctionContainer from "./components/AuctionContainer.vue";
</script>

<template>
  <Header />
  <MarketplaceandCategories />
  <CategoryRelevance />
  <AuctionContainer />

  <Footer />
</template>

<style scoped></style>
