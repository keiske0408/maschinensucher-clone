<template>
    <section id="category-teaser" class="bg-blue-600 border-b border-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-nowrap overflow-x-auto scrollbar-hide">
          <div class="flex gap-x-6 lg:gap-x-10 py-2 min-w-max">
            <a 
              v-for="category in categories" 
              :key="category.slug"
              :href="category.url" 
              class="text-white no-underline py-2 whitespace-nowrap hover:text-blue-200 transition-colors duration-200"
            >
              {{ category.name }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CategoryTeaser',
    data() {
      return {
        categories: [
          { name: 'Holz', slug: 'holz', url: '/Holzbearbeitungsmaschinen/ci-3' },
          { name: 'Metall', slug: 'metall', url: '/Werkzeugmaschinen-Metallbearbeitungsmaschinen/ci-2' },
          { name: 'Druck', slug: 'druck', url: '/Druckerei-Druckmaschinen/ci-16' },
          { name: 'Bau', slug: 'bau', url: '/Baumaschinen/ci-8' },
          { name: 'Stapler', slug: 'stapler', url: '/Stapler/ci-42' },
          { name: 'Lagertechnik', slug: 'lagertechnik', url: '/Lagertechnik/ci-10' },
          { name: 'Automatisierung', slug: 'automatisierung', url: '/Automatisierungstechnik/ci-5' },
          { name: 'Lebensmittel', slug: 'lebensmittel', url: '/Lebensmitteltechnik/ci-9' },
          { name: 'Kunststoff', slug: 'kunststoff', url: '/Kunststoffverarbeitung-Kunststofftechnik/ci-14' },
          { name: 'Entsorgung', slug: 'entsorgung', url: '/Entsorgung-und-Recycling/ci-20' },
          { name: 'Mehr', slug: 'mehr', url: '/#alphabetical-categories' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  </style>