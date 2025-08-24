<template>
  <section id="header" class="bg-white shadow-sm">
    <div class="mx-auto px-4 py-1">
      <div class="container-fluid flex items-center justify-between gap-4">
        <!-- Logo Section -->
        <section id="header-logo" class="flex-shrink-0 relative">
          <a href="/" class="block relative">
            <img
              id="logo-img"
              src="https://cdn.machineseeker.com/img/frontend/main/logo/ms_logo_de.svg?v=1739437402"
              class="h-14 w-auto block"
              alt="Maschinensucher"
            />
            <!-- Make this absolutely positioned inside the parent -->
            <div
              class="md:block absolute top-8 left-15 mt-1 text-blue-900 text-sm font-medium"
            >
              Deutschland
            </div>
          </a>
        </section>

        <!-- Search Section -->
        <section>
          <!-- Category Dropdown -->
          <div class="hidden md:block">
            <button
              type="button"
              @click="toggleCategoryDropdown"
              class="btn border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap relative"
              :class="{ 'bg-gray-50': showCategoryDropdown }"
            >
              <span class="hidden xl:inline-block 2xl:inline-block"
                >Kategorien</span
              >
              <i class="fas fa-chevron-down ml-2"></i>

              <!-- Category Dropdown Menu -->
              <div
                v-show="showCategoryDropdown"
                class="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
              >
                <div class="py-2">
                  <a
                    v-for="category in categoryDropdownItems"
                    :key="category.slug"
                    :href="category.url"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {{ category.name }}
                  </a>
                </div>
              </div>
            </button>
          </div>
        </section>
        <section
          id="header-searchbar"
          class="flex items-center gap-4 flex-1 max-w"
        >
          <!-- Search Form -->
          <form
            id="search-form"
            class="flex-1 relative"
            @submit.prevent="handleSearch"
          >
            <div class="flex">
              <input
                type="text"
                v-model="searchQuery"
                @input="handleSearchInput"
                @focus="showSearchHistory = true"
                class="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Suchen nach Bezeichnung, Hersteller, Modell, ..."
              />

              <!-- Clear Button -->
              <button
                v-if="searchQuery"
                type="button"
                @click="clearSearch"
                class="border-t border-b border-gray-300 px-3 py-2 text-gray-400 hover:text-gray-600 bg-gray-50"
              >
                <i class="fas fa-times"></i>
              </button>

              <!-- Search Button -->
              <button
                type="submit"
                class="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-200"
              >
                <i class="fas fa-search mr-2"></i>
                <span class="hidden sm:inline">Suchen</span>
              </button>
            </div>

            <!-- Search History/Instant Search -->
            <div
              v-show="showSearchHistory && searchHistory.length > 0"
              class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-40 max-h-64 overflow-y-auto"
            >
              <ul class="py-2">
                <li
                  v-for="item in searchHistory"
                  :key="item"
                  @click="selectSearchHistory(item)"
                  class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </form>
        </section>

        <!-- CTA and Navigation -->
        <section>
          <!-- Sell CTA Button -->
          <a
            href="/tariffs/"
            class="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            <span class="hidden 2xl:inline">Maschine verkaufen</span>
            <span class="2xl:hidden">Verkaufen</span>
          </a>
        </section>
        <section class="flex items-center gap-4">
          <!-- Navigation Icons -->
          <div class="flex items-center gap-4">
            <!-- Favorites -->
            <a
              href="/main/favorites"
              class="hidden md:flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <i class="fas fa-star text-lg"></i>
              <small class="hidden lg:block mt-1 text-xs">
                Merkliste ({{ favoriteCount }})
              </small>
            </a>

            <!-- Login -->
            <a
              href="/account/security/login"
              class="hidden lg:flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <i class="fas fa-user text-lg"></i>
              <small class="hidden lg:block mt-1 text-xs">Login</small>
            </a>

            <!-- Language Selector -->
            <button
              @click="toggleLanguageSelector"
              class="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 relative"
            >
              <img
                src="https://cdn.machineseeker.com/img/frontend/main/flags/blank24.png?v=1739437402"
                class="w-6 h-4 bg-contain bg-no-repeat"
                style="
                  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiBmaWxsPSIjREQwMDJEIi8+CjxyZWN0IHk9IjUuMzMzMzMiIHdpZHRoPSIyNCIgaGVpZ2h0PSI1LjMzMzMzIiBmaWxsPSIjRkZDRTAwIi8+CjxyZWN0IHk9IjEwLjY2NjciIHdpZHRoPSIyNCIgaGVpZ2h0PSI1LjMzMzMzIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=');
                "
                alt="Deutsch"
              />
              <small class="hidden lg:block mt-1 text-xs">Sprache</small>

              <!-- Language Dropdown -->
              <div
                v-show="showLanguageSelector"
                class="absolute top-full right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50"
              >
                <div class="py-2">
                  <button
                    v-for="language in languages"
                    :key="language.code"
                    @click="selectLanguage(language)"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      :src="language.flag"
                      :alt="language.name"
                      class="inline-block w-4 h-3 mr-2"
                    />
                    {{ language.name }}
                  </button>
                </div>
              </div>
            </button>

            <!-- Mobile Menu -->
            <button
              @click="toggleMobileMenu"
              class="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 relative"
            >
              <div class="w-6 h-4 flex flex-col justify-between">
                <span
                  class="block h-0.5 w-full bg-current transition-transform duration-200"
                  :class="{ 'rotate-45 translate-y-1.5': showMobileMenu }"
                ></span>
                <span
                  class="block h-0.5 w-full bg-current transition-opacity duration-200"
                  :class="{ 'opacity-0': showMobileMenu }"
                ></span>
                <span
                  class="block h-0.5 w-full bg-current transition-transform duration-200"
                  :class="{ '-rotate-45 -translate-y-1.5': showMobileMenu }"
                ></span>
              </div>
              <small class="hidden lg:block mt-1 text-xs">Menü</small>
            </button>
          </div>
        </section>
      </div>
    </div>

    <!-- Mobile Menu -->
  </section>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchQuery: "",
      showSearchHistory: false,
      showCategoryDropdown: false,
      showLanguageSelector: false,
      showMobileMenu: false,
      activeSubmenu: null,
      favoriteCount: 0,
      searchHistory: [
        "CNC Maschine",
        "Drehbank",
        "Fräsmaschine",
        "Gabelstapler",
      ],
      categoryDropdownItems: [
        {
          name: "Holzbearbeitungsmaschinen",
          slug: "holz",
          url: "/Holzbearbeitungsmaschinen/ci-3",
        },
        {
          name: "Metallbearbeitungsmaschinen",
          slug: "metall",
          url: "/Werkzeugmaschinen-Metallbearbeitungsmaschinen/ci-2",
        },
        { name: "Baumaschinen", slug: "bau", url: "/Baumaschinen/ci-8" },
        {
          name: "Stapler & Flurförderzeuge",
          slug: "stapler",
          url: "/Stapler/ci-42",
        },
        {
          name: "Automatisierungstechnik",
          slug: "auto",
          url: "/Automatisierungstechnik/ci-5",
        },
      ],
      languages: [
        { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w20/de.png" },
        { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
        {
          code: "fr",
          name: "Français",
          flag: "https://flagcdn.com/w20/fr.png",
        },
        { code: "es", name: "Español", flag: "https://flagcdn.com/w20/es.png" },
      ],
    };
  },
  mounted() {
    // Close dropdowns when clicking outside
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        // Add to search history
        if (!this.searchHistory.includes(this.searchQuery)) {
          this.searchHistory.unshift(this.searchQuery);
          this.searchHistory = this.searchHistory.slice(0, 5); // Keep only 5 items
        }
        // Perform search
        window.location.href = `/main/search/index?search-word=${encodeURIComponent(
          this.searchQuery
        )}`;
      }
    },

    toggleCategoryDropdown() {
      this.showCategoryDropdown = !this.showCategoryDropdown;
      this.showLanguageSelector = false;
    },

    toggleLanguageSelector() {
      this.showLanguageSelector = !this.showLanguageSelector;
      this.showCategoryDropdown = false;
    },

    selectLanguage(language) {
      // Handle language selection
      console.log("Selected language:", language);
      this.showLanguageSelector = false;
    },

    openInquiry() {
      // Handle inquiry modal opening
      console.log("Open inquiry modal");
    },

    handleOutsideClick(event) {
      // Close dropdowns when clicking outside
      if (!event.target.closest("#header")) {
        this.showCategoryDropdown = false;
        this.showLanguageSelector = false;
        this.showSearchHistory = false;
      }
    },
  },
};
</script>
