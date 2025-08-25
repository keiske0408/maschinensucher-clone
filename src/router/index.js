import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../components/Home/Homepage.vue";
import MarketPlace from "../views/MarketplaceandCategories.vue";

import AuctionContainer from "../components/Category/AuctionContainer.vue";
import CategoryRelevance from "../components/Category/CategoryRelevance.vue";
import MarketplaceContainer from "../components/Category/MarketplaceContainer.vue";
import NewsFeed from "../components/Category/NewsFeed.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/MarketPlace", name: "MarketPlace", component: MarketPlace },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
