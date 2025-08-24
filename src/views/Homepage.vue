<template>
  <div
    class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
  >
    <!-- Card -->
    <div
      class="bg-white rounded-lg shadow overflow-hidden border border-gray-400"
    >
      <div class="relative">
        <a :href="card.link">
          <picture>
            <source :srcset="card.image" />
            <img
              :src="card.image"
              :alt="card.title"
              class="w-full h-48 object-cover"
            />
          </picture>
          <div class="absolute bottom-0 w-full bg-white/90 px-4 py-2">
            <span class="text-gray-500 text-sm">{{ card.count }}</span>
            <strong class="block text-gray-900 text-base">
              {{ card.title }}
            </strong>
          </div>
        </a>
      </div>

      <!-- List -->
      <div class="divide-y divide-gray-200">
        <a
          v-for="(item, index) in card.items"
          :key="index"
          :href="item.link"
          class="flex justify-between items-center px-4 py-2 hover:bg-gray-50"
        >
          <span>{{ item.name }}</span>
          <span class="text-xs bg-gray-200 px-2 py-1 rounded w-12 text-center">
            {{ item.count }}
          </span>
        </a>

        <button
          class="w-full text-left font-bold px-4 py-2 bg-gray-100 flex items-center justify-between"
        >
          mehr <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  data() {
    return {
      card: {
        title: "Metallbearbeitungsmaschinen & Werkzeugmaschinen",
        count: "32.885",
        link: "/Werkzeugmaschinen-Metallbearbeitungsmaschinen/ci-2",
        image:
          "https://cdn.machineseeker.com/img/frontend/dealer/categories/sm/category-2.jpg",
        items: [
          {
            name: "Blechbearbeitung",
            count: "5.623",
            link: "/Blechbearbeitung/ci-209",
          },
          {
            name: "Drehmaschinen",
            count: "4.522",
            link: "/Drehmaschinen/ci-43",
          },
          {
            name: "Schweißen & Schneiden",
            count: "2.496",
            link: "/Schweissen-Schneiden/ci-232",
          },
          {
            name: "Schleifmaschinen",
            count: "2.365",
            link: "/Schleifmaschinen/ci-231",
          },
          {
            name: "Fräsmaschinen",
            count: "2.047",
            link: "/Fraesmaschinen/ci-218",
          },
        ],
      },
    };
  },
};
</script>
