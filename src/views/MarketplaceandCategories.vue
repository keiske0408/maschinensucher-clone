<template>
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
</template>

<script>
export default {
  name: "FirstCategory",
  data() {
    return {
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
      BottomCategories: [
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
    };
  },
  methods: {
    toggleCollapse1() {
      this.showCategories1 = !this.showCategories1;
    },
    toggleCollapse2() {
      this.showCategories2 = !this.showCategories2;
    },
  },
};
</script>
