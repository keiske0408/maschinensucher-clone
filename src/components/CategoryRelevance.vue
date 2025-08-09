<template>
  <div class="bg-white rounded border border-gray-200 shadow-md mt-4 p-4">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <!-- Title Section -->
      <div class="mb-4 md:mb-0">
        <h1 class="text-xl font-bold">
          Metallbearbeitungsmaschinen & Werkzeugmaschinen gebraucht kaufen
          <span class="text-gray-500 font-normal">(32.882)</span>
        </h1>
      </div>

      <!-- Sorting Dropdown -->
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white hover:bg-gray-50 transition-colors duration-200"
        >
          <span class="mr-2">{{ selectedOption }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="w-4 h-4 text-black-500"
          >
            <path
              fill="currentColor"
              d="M279.07 224.05h-238c-21.4 0-32.1-25.9-17-41l119-119a23.9 23.9 0 0 1 33.8-.1l.1.1 119.1 119c15.07 15.05 4.4 41-17 41z"
            />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            v-show="showDropdown"
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          >
            <div class="py-1">
              <a
                v-for="option in sortOptions"
                :key="option"
                href="#"
                @click.prevent="selectOption(option)"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {{ option }}
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryHeader",
  data() {
    return {
      showDropdown: false,
      selectedOption: "Relevanz",
      sortOptions: [
        "Relevanz",
        "Preis aufsteigend",
        "Preis absteigend",
        "Neueste zuerst",
        "Älteste zuerst",
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showDropdown = false;
      this.$emit("sort-changed", option);
    },
  },
};
</script>
