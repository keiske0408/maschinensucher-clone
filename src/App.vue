<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import AuctionContainer from "./components/AuctionContainer.vue";
import CategoryRelevance from "./components/CategoryRelevance.vue";
import MarketplaceandCategories from "./views/MarketplaceandCategories.vue";
import ProductTitle from "./components/ProductTitle.vue";
</script>

<template>
  <Header />
  <MarketplaceandCategories />
  <CategoryRelevance />
  <AuctionContainer />

  <Footer />
</template>
