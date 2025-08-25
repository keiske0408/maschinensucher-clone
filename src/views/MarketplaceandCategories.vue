<template>
  <section>
    <div class="bg-white mt-2 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <!-- Left Column -->
            <div class="w-full lg:w-3/12 mt-3 pe-0 flex flex-col order-1">
              <!-- Ads?!?? -->
            </div>

            <!-- Right Column -->
            <div class="w-full lg:w-9/12">
              <div
                class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3 font-bold text-xl"
              >
                Metallbearbeitungsmaschinen & Werkzeugmaschinen gebraucht kaufen
                <span class="text-gray-500 font-bold">(32.882)</span>
              </div>
              <!-- Dropdown 1 -->
              <div
                class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3"
              >
                <div class="flex flex-wrap mb-3">
                  <div
                    class="w-full px-3 cursor-pointer"
                    :style="{ color: 'rgb(51, 122, 183)' }"
                    role="button"
                    @click="toggleCollapse1"
                  >
                    <svg
                      class="w-4 h-4 inline mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        v-if="showCategories2"
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                        clip-rule="evenodd"
                      />
                      <path
                        v-else
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-bold">TOP KATEGORIEN 1</span>
                  </div>
                </div>

                <transition
                  name="dropdown"
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-[1000px]"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 max-h-[1000px]"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div v-show="showCategories1" class="overflow-hidden">
                    <div class="flex flex-wrap mx-0">
                      <div class="w-full px-0 md:px-3">
                        <div class="flex flex-col divide-y divide-gray-200">
                          <a
                            v-for="category in topCategories"
                            :key="category.id"
                            :href="category.link"
                            class="px-0 md:px-3 py-2 hover:bg-gray-50 transition-colors duration-150 flex justify-between items-center"
                          >
                            {{ category.name }}
                            <span class="text-gray-500 font-bold">{{
                              category.count
                            }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>

              <!-- Dropdown 2 -->
              <div
                class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3"
              >
                <div class="flex flex-wrap mb-3">
                  <div
                    class="flex justify-between w-full px-3 cursor-pointer"
                    :style="{ color: 'rgb(51, 122, 183)' }"
                    role="button"
                    @click="toggleCollapse2"
                  >
                    <div>
                      <svg
                        class="w-4 h-4 inline mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          v-if="showCategories2"
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        />
                        <path
                          v-else
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-base font-bold">TOP KATEGORIEN 2</span>
                    </div>

                    <a
                      href="#"
                      class="font-medium hover:underline"
                      :style="{ color: 'rgb(51, 122, 183)', fontWeight: '400' }"
                    >
                      Alle Angebote anzeigen
                    </a>
                  </div>
                </div>

                <transition
                  name="dropdown"
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-[1000px]"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 max-h-[1000px]"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div v-show="showCategories2" class="overflow-hidden">
                    <div class="flex flex-wrap mx-0">
                      <div class="w-full px-0 md:px-3">
                        <div class="flex flex-col divide-y divide-gray-200">
                          <a
                            v-for="category in BottomCategories"
                            :key="category.id"
                            :href="category.link"
                            class="px-0 md:px-3 py-2 hover:bg-gray-50 transition-colors duration-150 flex justify-between items-center"
                          >
                            {{ category.name }}
                            <span class="text-gray-500 font-bold">{{
                              category.count
                            }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>

              <div
                class="text-white rounded border border-gray-200 shadow-md mt-4 p-2 font-normal text-l text-center"
                :style="{ backgroundColor: 'rgb(51, 122, 183)' }"
              >
                Händler dieser Kategorie
                <span
                  class="text-black rounded border m-1 p-0.4 pl-2.5 pr-2.5 font-bold border-gray-200 text-sm"
                  :style="{ backgroundColor: 'rgb(255, 255, 255)' }"
                >
                  886</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-white mt-2 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <!-- Left Column -->
            <div class="w-full lg:w-3/12 mt-3 pe-0 flex flex-col order-1">
              <!-- Ads?!?? -->
            </div>

            <!-- Right Column -->
            <div class="w-full lg:w-9/12">
              <div
                class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3"
              >
                <!-- Title and Sorting Section -->
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between"
                >
                  <!-- Title Section -->
                  <h1 class="text-xl font-bold mb-4 md:mb-0">
                    Metallbearbeitungsmaschinen & Werkzeugmaschinen gebraucht
                    kaufen
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
              <div class="container mx-auto">
                <div class="flex flex-wrap">
                  <!-- Left Column -->

                  <!-- Right Column -->
                  <div class="w-full">
                    <div
                      class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3"
                    >
                      <!-- Title and Sorting Section -->
                      <div class="flex">
                        <!-- Image section -->
                        <div
                          class="relative border rounded border-gray-200 w-56 min-w-56 max-w-56 flex-shrink-0 overflow-hidden bg-white mr-4"
                        >
                          <img
                            :src="
                              machine.image && machine.image.length > 0
                                ? machine.image
                                : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl0-pE76v6rRszxP_AU47NufixrXAdLz7t_Bp-L9RxOVQ51tAYOt-Ydq7GzDOCaE5ucj7Yry43WuZo4w1LdOyWrqumAjIb6j9THzfusHcPsg'
                            "
                            :alt="machine.model"
                            class="object-cover w-full h-64 rounded"
                          />

                          <!-- Countdown -->
                          <div
                            class="absolute bottom-0 left-0 w-full bg-orange-700 text-white text-xs px-3 py-1 text-center rounded-b"
                          >
                            Endet in (21h 21min 1s)
                          </div>
                        </div>

                        <div class="flex flex-col justify-between p-4 w-full">
                          <!-- Type and Model -->
                          <div>
                            <h3 class="text-sm text-gray-500">
                              {{ machine.type }}
                            </h3>
                            <h2 class="text-lg font-semibold mb-1">
                              {{ machine.model }}
                            </h2>
                            <hr class="h-0.5 bg-gray-500 mt-5 mb-3" />
                          </div>

                          <!-- Location -->
                          <div
                            class="flex items-center text-sm text-gray-500 mb-2"
                          >
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
                              :alt="machine.country"
                              class="w-5 h-3 mr-2"
                            />
                            <span>{{ machine.country }}</span>
                            <span class="ml-1">• {{ machine.distance }}</span>
                          </div>

                          <div
                            class="text-2xl font-bold text-gray-900 text-right my-2"
                          >
                            {{ machine.price }}
                          </div>

                          <div class="flex justify-between items-end">
                            <div>
                              <img
                                src="https://cdn.machineseeker.com/img/frontend/inserat/buyer-protection.svg?v=1739437402"
                                alt=""
                              />
                            </div>
                            <div>
                              <button
                                class="bg-orange-700 text-xl text-white px-7.5 py-2 rounded hover:bg-orange-700 transition w-full"
                              >
                                Zur Auktion
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        v-if="!showDetails"
                        class="mt-3 text-md text-gray-600 leading-relaxed relative cursor-pointer"
                        @click="showDetails = !showDetails"
                        style="max-height: 3.5em; overflow: hidden"
                      >
                        <span
                          v-for="([key, value], idx) in machineEntries"
                          :key="idx"
                          class="mb-1"
                        >
                          <span>{{ key }}: </span>
                          <span class="font-semibold">{{ value }}, </span>
                        </span>
                        <!-- Fade overlay -->
                        <div
                          class="pointer-events-none absolute left-0 right-0 bottom-0 h-8"
                          style="
                            background: linear-gradient(
                              to bottom,
                              rgba(255, 255, 255, 0),
                              #fff 90%
                            );
                          "
                        ></div>
                      </div>
                      <transition name="fade">
                        <div
                          v-if="showDetails"
                          class="px-4 py-3"
                          @click="showDetails = !showDetails"
                        >
                          <div class="grid grid-cols-2 gap-x-4 gap-y-2">
                            <div
                              v-for="([key, value], idx) in machineEntries"
                              :key="idx"
                              class="flex flex-col"
                            >
                              <div class="flex">
                                <span class="w-32">{{ key }}:</span>
                                <span
                                  class="font-semibold ml-2 text-right flex-1"
                                  >{{ value }}</span
                                >
                              </div>
                              <hr
                                v-if="idx < machineEntries.length - 1"
                                class="my-1 border-gray-300"
                              />
                            </div>
                          </div>
                          <div
                            v-if="machine.description"
                            class="mt-4 whitespace-pre-line"
                          >
                            <span class="font-semibold">Beschreibung:</span>
                            <div>{{ machine.description }}</div>
                          </div>
                          <div class="flex items-center flex-col">
                            <svg
                              class="w-5 h-5 text-gray-500 mb-2"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 15l-7-7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </transition>
                    </div>
                    <div
                      v-if="showDetails"
                      class="bg-gray-100 px-4 py-3 rounded-b"
                    >
                      <button
                        class="border border-gray-400 rounded px-4 py-2 text-gray-800 bg-white hover:bg-gray-50 transition"
                        @click="showDetails != !showDetails"
                      >
                        Details ansehen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategoryPage",
  props: {
    machine: {
      type: Object,
      default: () => ({
        id: "19668771",
        type: "Laserschneidmaschine",
        model: "TRUMPF TruLaser 5060",
        price: "19.000 €",
        country: "Deutschland",
        distance: "10.229 km",
        year: "2007",
        hours: "14.886 h",
        power: "5.000 W",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl0-pE76v6rRszxP_AU47NufixrXAdLz7t_Bp-L9RxOVQ51tAYOt-Ydq7GzDOCaE5ucj7Yry43WuZo4w1LdOyWrqumAjIb6j9THzfusHcPsg",
        description: `Set aus folgenden Bestandteilen:\n\n2x Inverter Schweißmaschine HighPULSE 552 RS\n2x Wasserkühlgerät WK-350\nSonder-Drahtvorschub DV-31 Twin\n+ weiteres Zubehör (Schlauchpakete, Brenner)\n\nMASCHINEN-DETAILS\nElektrische Daten (Schweißgerät)\nStrombereich: 20 A – 550 A\nSpannungsbereich: 15 V – 41,5 V\nNetzspannung: 72 V\nNetzstrom: 35 A`,
      }),
    },
  },
  data() {
    return {
      // Category Section
      showCategories1: true,
      showCategories2: true,
      topCategories: [
        {
          id: 1,
          name: "Blechbearbeitung",
          count: "5.624",
          link: "/Blechbearbeitung/ci_202",
        },
        {
          id: 2,
          name: "Drehmaschinen",
          count: "4.519",
          link: "/Drehmaschinen/ci-43",
        },
        {
          id: 3,
          name: "Zubehör & Ersatzteile",
          count: "3.851",
          link: "/Zubehoer/ci_234",
        },
      ],
      bottomCategories: [
        {
          id: 1,
          name: "Blechbearbeitung",
          count: "5.624",
          link: "/Blechbearbeitung/ci_202",
        },
        {
          id: 2,
          name: "Drehmaschinen",
          count: "4.519",
          link: "/Drehmaschinen/ci-43",
        },
      ],

      // Sorting Section
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

      // Auction Section
      showDetails: false,
    };
  },
  computed: {
    optionPairs() {
      const pairs = [];
      for (let i = 0; i < this.sortOptions.length; i += 2) {
        pairs.push(this.sortOptions.slice(i, i + 2));
      }
      return pairs;
    },
    machineEntries() {
      return Object.entries(this.machine).filter(
        ([key]) => key !== "image" && key !== "id" && key !== "description"
      );
    },
  },
  methods: {
    // Categories
    toggleCollapse1() {
      this.showCategories1 = !this.showCategories1;
    },
    toggleCollapse2() {
      this.showCategories2 = !this.showCategories2;
    },

    // Sorting
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
