<template>
  <v-container class="pa-0" fluid style="background-color: #F7EFE4;">
    <v-sheet
      class="d-flex align-center justify-center flex-column text-white position-relative"
      color="#1A2F4B"
      height="70vh"
    >
      <v-img
        class="position-absolute opacity-60"
        cover
        height="100%"
        src="https://i.imgur.com/dfs5CM3.jpeg"
        width="100%"
      />

      <div class="position-relative text-center">
        <h1 class="text-h2 font-weight-bold mb-4 text-shadow-subtle">
          TARZINI YAKALA. FARK YARAT.
        </h1>
        <p class="text-h5 mb-6 text-shadow-subtle">
          Özgün Tasarımlar, Üstün Kalite.
        </p>
        <v-btn
          class="font-weight-bold text-white rounded-pill elevation-6"
          color="#FF6F00"
          size="x-large"
          to="/products/tum-tisortler"
        >
          Tüm Koleksiyonu Keşfet
          <v-icon class="ml-2" right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-sheet>

    <v-container class="my-10">
      <h2 class="text-h4 text-center mb-8 font-weight-bold featured-tshirts-title-line">
        Öne Çıkan Ürünler
      </h2>
      <v-row justify="center">
        <v-col
          v-for="tshirt in featuredTshirts"
          :key="tshirt.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <v-card class="mx-auto rounded-lg elevation-2 hover-lift" :to="tshirt.link">
            <v-img
              :alt="tshirt.name"
              cover
              height="250px"
              :src="tshirt.image"
            />
            <v-card-title class="font-weight-medium">{{ tshirt.name }}</v-card-title>
            <v-card-subtitle class="text-caption text-grey-darken-1">{{ tshirt.category }}</v-card-subtitle>
            <v-card-text class="d-flex justify-space-between align-center">
              <span class="text-h6 font-weight-bold text-orange-darken-3">{{ tshirt.price }} TL</span>
              <v-btn color="#1A2F4B" icon size="small">
                <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center mt-8">
        <v-btn color="#D26E24" size="large" to="/3dall" variant="flat">
          Tüm Ürünleri Görüntüle
          <v-icon class="ml-2" right>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>

    <v-sheet class="mx-auto" max-width="2000">
      <v-container class="py-10" fluid style="background-color: #F7EFE4;">
        <h2 class="text-h4 text-center mb-8 font-weight-bold featured-tshirts-title-line">
          Yeni Çıkan Ürünler
        </h2>

        <div class="d-flex align-center justify-center">
          <!-- Prev -->
          <v-btn
            class="mx-2 rounded-circle elevation-3"
            color="#1A2F4B"
            :disabled="page === 0"
            icon
            size="large"
            @click="prevPage"
          >
            <v-icon size="28">mdi-chevron-left</v-icon>
          </v-btn>

          <!-- Kartlar -->
          <v-window v-model="page" class="flex-grow-1">
            <v-window-item
              v-for="(group, i) in pages"
              :key="i"
              :value="i"
            >
              <div class="d-flex justify-center flex-wrap">
                <v-card
                  v-for="tshirt in group"
                  :key="tshirt.id"
                  class="mx-3 my-2 rounded-xl elevation-4"
                  height="400"
                  :width="cardWidth"
                >
                  <v-img
                    contain
                    height="250"
                    :src="tshirt.image"
                  />
                  <v-card-text class="pa-4">
                    <div class="d-flex justify-space-between align-start mb-2">
                      <div>
                        <v-card-title class="pa-0 text-body-1 font-weight-bold">
                          {{ tshirt.name }}
                        </v-card-title>
                        <v-card-subtitle class="pa-0 mt-1 text-caption text-grey-darken-1">
                          {{ tshirt.category }}
                        </v-card-subtitle>
                      </div>
                      <span class="text-h6 font-weight-bold text-orange-darken-3">
                        {{ tshirt.price }} TL
                      </span>
                    </div>
                    <v-btn block class="mt-2" color="#1A2F4B" variant="flat">
                      Sepete Ekle
                    </v-btn>
                  </v-card-text>
                </v-card>
              </div>
            </v-window-item>
          </v-window>

          <!-- Next -->
          <v-btn
            class="mx-2 rounded-circle elevation-3"
            color="#1A2F4B"
            :disabled="page >= pages.length - 1"
            icon
            size="large"
            @click="nextPage"
          >
            <v-icon size="28">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

  </v-container>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const page = ref(0)
  const perPage = ref(5) // default masaüstü
  const router = useRouter()

  // Responsive perPage ayarı
  function updatePerPage () {
    const width = window.innerWidth
    if (width < 600) {
      perPage.value = 1
    } else if (width < 960) {
      perPage.value = 4
    } else {
      perPage.value = 6
    }
  }

  onMounted(() => {
    updatePerPage()
    window.addEventListener('resize', updatePerPage)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updatePerPage)
  })

  // Öne çıkan ler için örnek veri (öncekiyle aynı kaldı)
  const featuredTshirts = ref([
    {
      id: 1,
      name: 'Grafik Tasarım',
      category: 'Erkek',
      price: '249.90',
      image: 'https://i.imgur.com/7IUW1bi.jpeg', // Güncellenmiş resim linki
      link: '/products/1', // Güncellenmiş link yapısı
    },
    {
      id: 2,
      name: 'Minimal Desen',
      category: 'Kadın',
      price: '219.90',
      image: 'https://i.imgur.com/d9jY4nE.jpeg', // Güncellenmiş resim linki
      link: '/products/2', // Güncellenmiş link yapısı
    },
    {
      id: 3,
      name: 'Soyut Sanat',
      category: 'Unisex',
      price: '279.90',
      image: 'https://i.imgur.com/E5J01Lw.jpeg', // Güncellenmiş resim linki
      link: '/products/3', // Güncellenmiş link yapısı
    },
    {
      id: 4,
      name: 'Şehir Manzarası',
      category: 'Erkek',
      price: '239.90',
      image: 'https://i.imgur.com/rM1iC5l.jpeg', // Güncellenmiş resim linki
      link: '/products/4', // Güncellenmiş link yapısı
    },
  ])

  // Yeni Gelen ler için örnek veri
  const newArrivalTshirts = [
    { id: 1, name: 'T-Shirt 1', price: 199, category: 'Erkek', image: 'https://via.placeholder.com/250' },
    { id: 2, name: 'T-Shirt 2', price: 249, category: 'Kadın', image: 'https://via.placeholder.com/250' },
    { id: 3, name: 'T-Shirt 3', price: 299, category: 'Unisex', image: 'https://via.placeholder.com/250' },
    { id: 4, name: 'T-Shirt 4', price: 179, category: 'Erkek', image: 'https://via.placeholder.com/250' },
    { id: 5, name: 'T-Shirt 5', price: 159, category: 'Kadın', image: 'https://via.placeholder.com/250' },
    { id: 6, name: 'T-Shirt 6', price: 189, category: 'Unisex', image: 'https://via.placeholder.com/250' },
    { id: 7, name: 'T-Shirt 7', price: 229, category: 'Erkek', image: 'https://via.placeholder.com/250' },
    { id: 8, name: 'T-Shirt 8', price: 199, category: 'Kadın', image: 'https://via.placeholder.com/250' },
    { id: 9, name: 'T-Shirt 9', price: 269, category: 'Unisex', image: 'https://via.placeholder.com/250' },
    { id: 1, name: 'T-Shirt 1', price: 199, category: 'Erkek', image: 'https://via.placeholder.com/250' },
    { id: 2, name: 'T-Shirt 2', price: 249, category: 'Kadın', image: 'https://via.placeholder.com/250' },
    { id: 3, name: 'T-Shirt 3', price: 299, category: 'Unisex', image: 'https://via.placeholder.com/250' },
    { id: 4, name: 'T-Shirt 4', price: 179, category: 'Erkek', image: 'https://via.placeholder.com/250' },
    { id: 5, name: 'T-Shirt 5', price: 159, category: 'Kadın', image: 'https://via.placeholder.com/250' },
    { id: 6, name: 'T-Shirt 6', price: 189, category: 'Unisex', image: 'https://via.placeholder.com/250' },
    { id: 7, name: 'T-Shirt 7', price: 229, category: 'Erkek', image: 'https://via.placeholder.com/250' },
    { id: 8, name: 'T-Shirt 8', price: 199, category: 'Kadın', image: 'https://via.placeholder.com/250' },
    { id: 9, name: 'T-Shirt 9', price: 269, category: 'Unisex', image: 'https://via.placeholder.com/250' },
  ]

  // Kartları perPage’e göre grupluyoruz
  const pages = computed(() => {
    const arr = []
    for (let i = 0; i < newArrivalTshirts.length; i += perPage.value) {
      arr.push(newArrivalTshirts.slice(i, i + perPage.value))
    }
    return arr
  })

  // Kart genişliği hesaplama
  const cardWidth = computed(() => {
    if (perPage.value === 2) return 300
    if (perPage.value === 3) return 260
    return 250
  })

  function prevPage () {
    if (page.value > 0) page.value--
  }

  function nextPage () {
    if (page.value < pages.value.length - 1) page.value++
  }

</script>

<style scoped>
.featured-tshirts-title-line {
  position: relative;
  padding-bottom: 10px; /* Çizgi ile yazı arasına boşluk */
  color: #1A2F4B !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Hafif gölgeyi koru */
}

.featured-tshirts-title-line::after {
  content: '';
  position: absolute;
  left: 50%; /* Ortalamak için */
  transform: translateX(-50%); /* Ortalamak için */
  bottom: 0;
  width: 300px; /* Çizginin genişliği */
  height: 4px; /* Çizginin kalınlığı */
  background-color: #FF6F00; /* Vurgu rengi */
  border-radius: 2px; /* Köşeleri yuvarla */
}

/* Daha modern ve hafif bir metin gölgesi */
.text-shadow-subtle {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

/* Kartların üzerine gelince hafifçe kalkma efekti */
.hover-lift {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.hover-lift:hover {
  transform: translateY(-5px); /* Hafifçe yukarı kalk */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Daha belirgin gölge */
}

/* Vuetify'nin varsayılan container padding'ini sıfırlama */
.pa-0 {
  padding: 0 !important;
}

/* Genel renkler */
.text--darken-4 { /* Vurgu renkleri için - Ör: H2 başlıkları */
  color: #1A2F4B !important;
}

.text-orange-darken-3 { /* Fiyatlar ve vurgu renkleri için */
  color: #FF6F00 !important;
}

.hover-lift {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

</style>
