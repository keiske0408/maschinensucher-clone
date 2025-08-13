<template>
  <div class="bg-white mt-4">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <div class="container mx-auto">
        <div>
          <h3 class="text-lg text-gray-600">Führungsbahnenschleifmaschine</h3>
          <h2 class="text-2xl font-bold mb-1">
            Waldrich-Coburg
            <span class="text-2xl font-medium">30-10 S 2525 X</span>
          </h2>
          <hr class="mt-3 mb-3" />
          <div class="flex gap-5">
            <div>
              <h5 class="text-gray-600 text-sm">Startpreis</h5>
              <h4 class="font-bold mb-1 text-lg">25.000 €</h4>
            </div>
            <div>
              <h5 class="text-gray-600 text-sm">Baujahr</h5>
              <h4 class="font-bold mb-1 text-lg">1979</h4>
            </div>
            <div>
              <h5 class="text-gray-600 text-sm">Zustand</h5>
              <h4 class="font-bold mb-1 text-lg">
                Gebraucht
                <span class="text-gray-600 font-normal text-md"
                  >(voll funktionsfähig)</span
                >
              </h4>
            </div>
            <div>
              <h5 class="text-gray-500 text-sm">Standort</h5>
              <h4 class="font-bold mb-1 text-lg">Bayern</h4>
            </div>
          </div>
        </div>
        <div class="flex gap-x-6">
          <div class="w-full lg:w-5/12 flex flex-col order-1">
            <!-- Ads?!?? -->
            <div
              class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3 font-bold text-xl sticky top-0 z-10"
            >
              <div>
                <h1 class="pb-3 text-red-600 text-lg">Endet in (Timer)</h1>
              </div>
              <div class="flex justify-between items-end">
                <div>
                  <h5 class="text-gray-400 text-sm font-base">Startpreis</h5>
                  <h4 class="font-boldtext-xl">25.000 €</h4>
                </div>

                <div>
                  <span
                    class="flex items-center gap-1 text-black-600 text-sm font-light"
                  >
                    <svg class="w-3 h-3 mr-1" fill="green" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" />
                    </svg>

                    Kein Mindestpreis
                  </span>
                </div>
              </div>
              <div
                class="mt-3 flex border border-gray-400 rounded overflow-hidden"
              >
                <input
                  type="number"
                  placeholder="Geben Sie mindestens 25.000 € ein"
                  class="flex-1 px-3 py-2 outline-none text-lg font-medium"
                />
                <span
                  class="bg-gray-100 px-3 flex items-center border-l border-l-gray-400 text-gray-600 font-medium text-2xl"
                  >€</span
                >
              </div>
            </div>
          </div>

          <div class="w-full lg:w-7/12">
            <div
              class="bg-white rounded border border-gray-200 shadow-md mt-4 p-3 font-bold text-xl"
            >
              <img
                :src="
                  machine.image && machine.image.length > 0
                    ? machine.image
                    : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl0-pE76v6rRszxP_AU47NufixrXAdLz7t_Bp-L9RxOVQ51tAYOt-Ydq7GzDOCaE5ucj7Yry43WuZo4w1LdOyWrqumAjIb6j9THzfusHcPsg'
                "
                class="object-cover w-full rounded"
              />
            </div>

            <div>
              <button
                class="bg-blue-700 text-white text-lg rounded border border-gray-200 shadow-md mt-4 p-2 font-normal text-md text-center w-full hover:bg-blue-800"
              >
                Auktion beobachten
              </button>
            </div>

            <div
              class="bg-white rounded border border-gray-300 shadow-md mt-4 font-bold text-xl"
            >
              <!-- Card Header -->
              <div
                class="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t"
              >
                <h4 class="text-gray-900 text-1xl font-normal m-0">
                  Daten zur Maschine
                </h4>
              </div>
              <!-- Card Body -->
              <div class="p-4">
                <div class="flex flex-col divide-y divide-gray-300">
                  <div
                    class="flex py-2"
                    v-for="(value, key) in machine.machineData"
                    :key="key"
                  >
                    <h1 class="font-bold text-black text-base">{{ key }}:</h1>
                    <span class="ml-2 text-gray-800 font-normal text-base">{{
                      value
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded border border-gray-200 shadow-md mt-4 font-bold text-xl"
            >
              <!-- Card Header -->
              <div
                class="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t"
              >
                <h4 class="text-gray-900 text-1xl font-normal m-0">
                  Technische Details
                </h4>
              </div>
              <!-- Card Body -->
              <div class="p-4">
                <div class="flex flex-col divide-y divide-gray-200">
                  <div
                    class="flex py-2"
                    v-for="(value, key) in machine.Details"
                    :key="key"
                  >
                    <h1 class="font-bold text-black text-base">{{ key }}:</h1>
                    <span class="ml-2 font-normal text-base">{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded border border-gray-200 shadow-md mt-4 font-bold text-xl"
            >
              <!-- Card Header -->
              <div
                class="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t"
              >
                <h4 class="text-gray-900 text-1xl font-normal m-0">
                  Bereitstellung
                </h4>
              </div>
              <div class="p-4">
                <div class="flex flex-col divide-y divide-gray-300">
                  <div
                    class="flex py-2"
                    v-for="(value, key) in machine.Provision"
                    :key="key"
                  >
                    <h1 class="font-bold text-black text-base">{{ key }}:</h1>
                    <span class="ml-2 text-gray-800 font-normal text-base">{{
                      value
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded border border-gray-200 shadow-md mt-4 font-bold text-xl"
            >
              <!-- Card Header -->
              <div
                class="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t"
              >
                <h4 class="text-gray-900 text-1xl font-normal m-0">
                  Beschreibung
                </h4>
              </div>
              <div class="p-4">
                <div class="flex flex-col divide-y divide-gray-200">
                  <div class="flex py-2">{{ machine.description }}</div>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded border border-gray-200 shadow-md mt-4 font-bold text-xl"
            >
              <!-- Card Header -->
              <div
                class="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t"
              >
                <h4 class="text-gray-900 text-1xl font-normal m-0">
                  Bereitstellung
                </h4>
              </div>
              <div class="p-4">
                <div class="flex flex-col divide-y divide-gray-300">
                  <div
                    class="flex py-2"
                    v-for="(value, key) in machine.Payment"
                    :key="key"
                  >
                    <h1 class="font-bold text-black text-base">{{ key }}:</h1>
                    <span class="ml-2 text-gray-800 font-normal text-base">{{
                      value
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded border border-gray-200 shadow-md mt-4 font-bold text-xl"
            >
              <!-- Card Header -->
              <div
                class="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t"
              >
                <h4 class="text-gray-900 text-1xl font-normal m-0">
                  Bereitstellung
                </h4>
              </div>
              <div class="p-4">
                <div class="flex flex-col divide-y divide-gray-300">
                  <div
                    class="flex py-2"
                    v-for="(value, key) in machine.DetailOffer"
                    :key="key"
                  >
                    <h1 class="font-bold text-black text-base">{{ key }}:</h1>
                    <span class="ml-2 text-gray-800 font-normal text-base">{{
                      value
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        Details: {
          Schleifbreite: "1.450 mm",
          "Werkstückgewicht (max.)": "11.000 kg",
          Schleiflänge: "3.000 mm",
          Tischbreite: "3.000 mm",
          Tischlänge: "1.250 mm",
        },
        machineData: {
          Maschinenbezeichnung: "Führungsbahnenschleifmaschine",
          Hersteller: "Waldrich-Coburg",
          Modell: "30-10 S 2525 X",
          Maschinennummer: "2.4212.06",
          Baujahr: "1979",
          Zustand: "einsatzbereit (gebraucht)",
          Funktionsfähigkeit: "voll funktionsfähig",
        },
        Provision: {
          Standort: "Bavaria, Germany",
          Entfernung: "ca. 10.092 km",
          Verfügbarkeit: "immediately after the auction ends",
          Lieferbedingungen: "EXW",
        },
        Payment: {
          Kaufnebenkosten: "18 %",
          Zahlungsbedingungen: "100 % Vorauskasse",
          Zahlungsarten: "images",
          "": "Rechnungsstellung erfolgt in Höhe des Höchstgebots zzgl. etwaiger Demontage-/Verladekosten und Versandkosten sowie der Kaufnebenkosten und gesetzlichen MwSt.",
        },
        DetailOffer: {
          "Inserat-ID": "A19629861",
          Referenznummer: "AUC-2507151",
          Aktualisierung: "zuletzt am 23.07.2025",
          Exklusivangebot: "nur in Auktion verfügbar",
        },

        information: {
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl0-pE76v6rRszxP_AU47NufixrXAdLz7t_Bp-L9RxOVQ51tAYOt-Ydq7GzDOCaE5ucj7Yry43WuZo4w1LdOyWrqumAjIb6j9THzfusHcPsg",
          description: `Set aus folgenden Bestandteilen:\n\n2x Inverter Schweißmaschine HighPULSE 552 RS\n2x Wasserkühlgerät WK-350\nSonder-Drahtvorschub DV-31 Twin\n+ weiteres Zubehör (Schlauchpakete, Brenner)\n\nMASCHINEN-DETAILS\nElektrische Daten (Schweißgerät)\nStrombereich: 20 A – 550 A\nSpannungsbereich: 15 V – 41,5 V\nNetzspannung: 72 V\nNetzstrom: 35 A`,
        },
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
