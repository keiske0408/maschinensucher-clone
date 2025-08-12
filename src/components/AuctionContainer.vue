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
                <h3 class="text-sm text-gray-500">{{ machine.type }}</h3>
                <h2 class="text-lg font-semibold mb-1">{{ machine.model }}</h2>
                <hr class="h-0.5 bg-gray-500 mt-5 mb-3" />
              </div>

              <!-- Location -->
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
                  :alt="machine.country"
                  class="w-5 h-3 mr-2"
                />
                <span>{{ machine.country }}</span>
                <span class="ml-1">• {{ machine.distance }}</span>
              </div>

              <div class="text-2xl font-bold text-gray-900 text-right my-2">
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
                    <span class="font-semibold ml-2 text-right flex-1">{{
                      value
                    }}</span>
                  </div>
                  <hr
                    v-if="idx < machineEntries.length - 1"
                    class="my-1 border-gray-300"
                  />
                </div>
              </div>
              <div v-if="machine.description" class="mt-4 whitespace-pre-line">
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
        <div v-if="showDetails" class="bg-gray-100 px-4 py-3 rounded-b">
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
</template>

<script>
export default {
  name: "AuctionContainer",
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
      showDetails: false,
    };
  },
  computed: {
    machineEntries() {
      return Object.entries(this.machine).filter(
        ([key]) => key !== "image" && key !== "id" && key !== "description"
      );
    },
  },
};
</script>

<style scoped>
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
