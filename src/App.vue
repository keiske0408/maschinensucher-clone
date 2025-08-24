<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AuctionContainer from "./components/AuctionContainer.vue";
import ProductTitle from "./components/ProductTitle.vue";
import MainComponent from "./components/MainComponent.vue";
</script>

<template>
  <Header />
  <ProductTitle />
  <!-- Pass widthClass as a prop to control width, or omit for default -->
  <AuctionContainer widthClass="w-full" />
  <MainComponent/>
  <Footer />
</template>
