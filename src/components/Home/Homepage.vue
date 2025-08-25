<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Banner Section -->
    <section
      class="relative bg-cover bg-center bg-no-repeat"
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ),
          url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3');
      "
    >
      <div class="container mx-auto px-4 py-8">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-white mb-4">
            Der führende Marktplatz für Gebrauchtmaschinen
          </h1>
        </div>

        <!-- Stats Section -->
        <div class="hidden xl:flex justify-center mt-8">
          <div class="flex flex-wrap justify-center gap-8 max-w-4xl">
            <div class="text-center text-white">
              <i class="fas fa-check text-blue-400 mr-2"></i>
              <span class="text-lg font-semibold">Über 8.100 Anbieter</span>
            </div>
            <div class="text-center text-white">
              <i class="fas fa-check text-blue-400 mr-2"></i>
              <span class="text-lg font-semibold"
                >Über 200.000 Inserate online</span
              >
            </div>
            <div class="text-center text-white">
              <i class="fas fa-check text-blue-400 mr-2"></i>
              <span class="text-lg font-semibold"
                >Über 11 Millionen Besucher pro Monat</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recently Viewed Items -->
    <section class="py-8 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-xl font-bold mb-6">Ihre zuletzt angesehenen Artikel</h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          <div
            v-for="item in recentItems"
            :key="item.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-32">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
              <div
                v-if="item.isAuction"
                class="absolute top-0 left-0 right-0 bg-gray-800 text-white text-xs text-center py-1"
              >
                {{ item.auctionStatus }}
              </div>
            </div>
            <div
              class="bg-orange-700 text-center font-light text-white text-sm"
            >
              9h 50min 41
            </div>

            <div class="p-3">
              <p class="text-xs text-gray-500 mb-1">{{ item.category }}</p>
              <h3 class="font-semibold text-sm mb-2 line-clamp-2">
                {{ item.title }}
              </h3>
              <p v-if="item.price" class="font-bold text-lg">
                {{ item.price }}
              </p>
              <div class="mt-2">
                <span
                  class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {{ item.type }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Auction Banner -->
    <section
      class="relative bg-cover bg-center bg-no-repeat py-16"
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),
          url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3');
      "
    >
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-8"
        >
          <div class="text-center lg:text-left">
            <img
              src="https://cdn.machineseeker.com/img/frontend/main/homepage/auction/auction_seal_b_ms_de.svg?v=1745316046"
              alt="Auktion"
              class="mx-auto lg:mx-0 mb-4"
            />
          </div>
          <div class="text-center lg:text-left">
            <img
              src="https://cdn.machineseeker.com/img/frontend/main/homepage/auction/auction_logo_b_ms_de.svg?v=1745316046"
              alt="Auction Logo"
              class="mx-auto lg:mx-0 mb-4"
            />
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Auktion einreichen
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Categories -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold">Top Kategorien</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <a
            v-for="category in topCategories"
            :key="category.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            href="/MarketPlace"
          >
            <div class="relative">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4"
              >
                <span class="text-gray-600 text-sm">{{
                  category.count.toLocaleString()
                }}</span>
                <h3 class="font-bold text-lg">{{ category.name }}</h3>
              </div>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                v-for="subcategory in category.subcategories"
                :key="subcategory.name"
                class="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              >
                <span class="text-sm">{{ subcategory.name }}</span>
                <span
                  class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {{ subcategory.count.toLocaleString() }}
                </span>
              </div>
              <div
                class="p-3 bg-gray-50 text-center cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                <span class="font-bold text-sm"
                  >Mehr <i class="fas fa-plus ml-1"></i
                ></span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="container-fluid order-6 lg:order-2 bg-white">
      <div class="row justify-center pt-4">
        <div id="ofni-wrapper" class="col col-sm-10 mx-auto max-w-screen-lg">
          <div id="ofniCarousel" class="flex justify-center items-center">
            <div v-for="(ad, index) in ads" :key="index" class="px-3">
              <a :href="ad.href" target="_blank" rel="nofollow" class="block">
                <img
                  :src="ad.img"
                  :alt="ad.alt"
                  class="mb-4 w-[200px] h-[125px] object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <!-- CTA -->
          <div class="row p-4 flex justify-center">
            <button
              class="mx-auto btn btn-light border border-gray-400 flex items-center gap-2 px-4 py-2 rounded"
            >
              <span>Hier werben</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Sell Machine Banner -->
    <section
      class="relative bg-cover bg-center bg-no-repeat py-16"
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url('https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3');
      "
    >
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div class="text-center md:text-left">
            <h2 class="text-3xl md:text-4xl font-bold text-white">
              MASCHINE ZU VERKAUFEN?
            </h2>
          </div>
          <div>
            <button
              class="bg-green-700 hover:bg-green-800 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300"
            >
              MASCHINE VERKAUFEN
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- All Categories -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold">Alle Kategorien</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div
            v-for="section in allCategories"
            :key="section.title"
            class="space-y-4"
          >
            <h3 class="text-2xl font-semibold border-b pb-1 m-0">
              {{ section.title }}
            </h3>
            <div
              v-for="category in section.categories"
              :key="category.name"
              class="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 px-1 cursor-pointer transition-colors duration-200 m-0"
            >
              <h4 class="font-semibold">{{ category.name }}</h4>
              <span class="bg-gray-300 text-gray-800 text-xs px-3 py-1 rounded">
                {{ category.count.toLocaleString() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MachineryMarketplace",
  data() {
    return {
      recentItems: [
        {
          id: 1,
          title: "Seitenstapler EFQ 50 16-70",
          category: "Seitenstapler",
          image:
            "https://cdn1.nbaanalysis.net/uploads/16/2025/08/GettyImages-2187951579-941x627.jpg",
          type: "Auktion",
          isAuction: true,
          auctionStatus: "Auktion beendet",
        },
        {
          id: 2,
          title: "Studer S31",
          category: "Schleifmaschine",
          image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
          type: "Auktion",
          isAuction: true,
          auctionStatus: "Auktion beendet",
        },
        {
          id: 3,
          title: "REISCHL RPI 46/62/123",
          category: "Injektor",
          image:
            "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
          type: "Kleinanzeige",
        },
        {
          id: 4,
          title: "Turbo Systems D250P",
          category: "Mobiler Depostierer",
          image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
          type: "Kleinanzeige",
        },
        {
          id: 5,
          title: "CIDAN Modell FX32 mit drehbarer Oberwange",
          category: "Schwenkbiegemaschine",
          image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
          price: "91.429 €",
          type: "Kleinanzeige",
        },
        {
          id: 6,
          title: "RAS 74.30",
          category: "Schwenkbiegemaschine",
          image:
            "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
          type: "Auktion",
          isAuction: true,
          auctionStatus: "Auktion beendet",
        },
      ],

      topCategories: [
        {
          id: 1,
          name: "Metallbearbeitungsmaschinen & Werkzeugmaschinen",
          count: 33057,
          image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=500&h=200&fit=crop",
          subcategories: [
            { name: "Blechbearbeitung", count: 5636 },
            { name: "Drehmaschinen", count: 4517 },
            { name: "Schweißen & Schneiden", count: 2533 },
            { name: "Schleifmaschinen", count: 2379 },
            { name: "Fräsmaschinen", count: 2057 },
          ],
        },
        {
          id: 2,
          name: "Holzbearbeitungsmaschinen",
          count: 12732,
          image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=500&h=200&fit=crop",
          subcategories: [
            { name: "Sägen für Holz", count: 1920 },
            { name: "Hobelmaschinen", count: 1276 },
            { name: "Kantenanleimmaschinen", count: 979 },
            { name: "Schleifmaschinen für Holz", count: 796 },
            { name: "CNC-Bearbeitungszentren für Holz", count: 712 },
          ],
        },
        {
          id: 3,
          name: "Stapler & Flurförderzeuge",
          count: 9090,
          image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&w=500&h=200&fit=crop",
          subcategories: [
            { name: "Frontstapler", count: 1732 },
            { name: "4-Rad Gabelstapler", count: 1715 },
            { name: "Hubwagen", count: 1583 },
            { name: "3-Rad Gabelstapler", count: 645 },
            { name: "Schubmaststapler", count: 471 },
          ],
        },
      ],

      allCategories: [
        {
          title: "A - K",
          categories: [
            { name: "Abfüllanlagen & Abfülltechnik", count: 220 },
            { name: "Automatisierungstechnik", count: 8467 },
            { name: "Baumaschinen", count: 8903 },
            { name: "Bürotechnik", count: 81 },
            { name: "Chemische & pharmazeutische Maschinen", count: 754 },
            { name: "Drahtverarbeitungsmaschinen", count: 487 },
            { name: "Druckereimaschinen & Druckmaschinen", count: 3950 },
            { name: "Drucklufttechnik", count: 1381 },
            { name: "Elektrowerkzeuge", count: 134 },
            { name: "Energietechnik", count: 1402 },
            { name: "Fördertechnik & Antriebstechnik", count: 7130 },
            { name: "Glasbearbeitung & Keramikbearbeitung", count: 539 },
            { name: "Holzbearbeitungsmaschinen", count: 12731 },
            { name: "Kältetechnik", count: 602 },
          ],
        },
        {
          title: "K - P",
          categories: [
            { name: "Kfz-Werkstattausrüstung", count: 114 },
            { name: "Klärtechnik", count: 50 },
            { name: "Kommunaltechnik", count: 1600 },
            { name: "Kunststoffverarbeitung & Kunststofftechnik", count: 2508 },
            { name: "Lagertechnik", count: 4402 },
            { name: "Landmaschinen", count: 1179 },
            { name: "Lebensmitteltechnik", count: 6991 },
            { name: "Medizintechnik", count: 845 },
            { name: "Messtechnik & Prüftechnik", count: 1290 },
            {
              name: "Metallbearbeitungsmaschinen & Werkzeugmaschinen",
              count: 33059,
            },
            { name: "Motoren", count: 510 },
            { name: "Oberflächentechnik", count: 499 },
            { name: "Papierverarbeitung & Folienverarbeitung", count: 375 },
            { name: "Postbearbeitungsmaschinen", count: 41 },
          ],
        },
        {
          title: "Q - Z",
          categories: [
            { name: "Recycling & Entsorgung", count: 2118 },
            { name: "Reinigungstechnik", count: 995 },
            { name: "Sondermaschinen", count: 127 },
            { name: "Sonstige Maschinen", count: 889 },
            { name: "Stapler & Flurförderzeuge", count: 9089 },
            { name: "Steinbearbeitungsmaschinen", count: 102 },
            { name: "Telekommunikationstechnik & Computertechnik", count: 13 },
            { name: "Textilmaschinen", count: 329 },
            { name: "Transportfahrzeuge & Nutzfahrzeuge", count: 33595 },
            { name: "Überschüssige Lagerbestände & Restbestände", count: 436 },
            { name: "Vakuumtechnik", count: 533 },
            { name: "Verfahrenstechnik", count: 876 },
            { name: "Verpackungsmaschinen", count: 1849 },
          ],
        },
      ],

      // ✅ Added Ads Array
      ads: [
        {
          href: "",
          img: "https://cdn.machineseeker.com/data/ofni/29.png?v=1485180841",
          alt: "Harich Werkzeuge Maschinen GmbH",
        },
        {
          href: "",
          img: "https://cdn.machineseeker.com/data/ofni/4598.png?v=...",
          alt: "Ad 2",
        },
        {
          href: "",
          img: "https://cdn.machineseeker.com/data/ofni/2235.png?v=...",
          alt: "Ad 3",
        },
        {
          href: "",
          img: "https://cdn.machineseeker.com/data/ofni/555.png?v=1485181198",
          alt: "Ad 3",
        },
        {
          href: "",
          img: "https://cdn.machineseeker.com/data/ofni/2007.png?v=1573034286",
          alt: "Ad 3",
        },
        {
          href: "",
          img: "https://cdn.machineseeker.com/data/ofni/4226.png?v=1693064249",
          alt: "Ad 3",
        },
      ],
    };
  },
};
</script>
