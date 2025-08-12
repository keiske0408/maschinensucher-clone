<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <!-- Left Column -->
      <div class="w-full lg:w-3/12 mt-3 pe-0 flex flex-col order-1">
        <!-- Ads?!?? -->
      </div>

      <!-- Right Column -->
      <div class="w-full lg:w-9/12">
        <div class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3">
          <!-- Title and Sorting Section -->
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <!-- Title Section -->
            <h1 class="text-xl font-bold mb-4 md:mb-0">
              Metallbearbeitungsmaschinen & Werkzeugmaschinen gebraucht kaufen
              <span class="text-gray-500 font-normal">(32.882)</span>
            </h1>

            <!-- Sorting Dropdown -->
            <div class="relative">
              <button
                @click="toggleDropdown"
                class="flex items-center gap-2 border border-black rounded-md pl-5 pr-5 p-1.5 bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-haspopup="true"
                :aria-expanded="showDropdown"
              >
                <span>{{ selectedOption.label }}</span>
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
                  class="origin-top-right absolute right-0 mt-2 w-96 shadow-lg rounded-t-lg rounded-r-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div role="none">
                    <!-- Option Pairs -->
                    <div
                      v-for="(pair, index) in optionPairs"
                      :key="index"
                      class="d-flex justify-content-between"
                      :class="{
                        'border-b border-gray-200':
                          index < optionPairs.length - 1,
                      }"
                    >
                      <span
                        v-for="option in pair"
                        :key="option.value"
                        @click="selectOption(option)"
                        class="flex-1 px-4 py-2 text-sm cursor-pointer"
                        :class="{
                          'me-2': option === pair[0],
                          'font-semibold text-white bg-blue-500':
                            selectedOption.value === option.value,
                        }"
                      >
                        {{ option.label }}
                      </span>
                      <span
                        v-if="pair.length === 1"
                        class="flex-1 px-4 py-2"
                      ></span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
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
      selectedOption: {
        label: "Relevanz",
        value: "relevanz",
        field: null,
        direction: null,
      },
      sortOptions: [
        {
          label: "Preis aufsteigend",
          value: "price_asc",
          field: "price",
          direction: "asc",
        },
        {
          label: "Preis absteigend",
          value: "price_desc",
          field: "price",
          direction: "desc",
        },
        {
          label: "Neuste Inserate",
          value: "newest",
          field: "created_at",
          direction: "desc",
        },
        {
          label: "Älteste Inserate",
          value: "oldest",
          field: "created_at",
          direction: "asc",
        },
        {
          label: "Kürzeste Entfernung",
          value: "distance_asc",
          field: "distance",
          direction: "asc",
        },
        {
          label: "Weiteste Entfernung",
          value: "distance_desc",
          field: "distance",
          direction: "desc",
        },
        {
          label: "Neustes Baujahr",
          value: "year_desc",
          field: "baujahr",
          direction: "desc",
        },
        {
          label: "Ältestes Baujahr",
          value: "year_asc",
          field: "baujahr",
          direction: "asc",
        },
        { label: "Relevanz", value: "relevanz", field: null, direction: null },
      ],
    };
  },
  computed: {
    optionPairs() {
      const pairs = [];
      for (let i = 0; i < this.sortOptions.length; i += 2) {
        const pair = this.sortOptions.slice(i, i + 2);
        pairs.push(pair);
      }
      return pairs;
    },
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
  mounted() {
    document.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.showDropdown = false;
      }
    });
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.me-2 {
  margin-right: 0.5rem;
}
</style>
