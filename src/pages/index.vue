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

    <v-sheet>
      <v-container class="py-10" fluid style="background-color: #F7EFE4;">
        <h2 class="text-h4 text-center mb-8 font-weight-bold text--darken-4">
          Yeni Gelen Ürünler
        </h2>
        <v-slide-group
          center-active
          class="pa-4"
          show-arrows
        >
          <template #prev="{ isPrevDisabled, onClick }">
            <v-btn
              class="mx-2"
              color="#1A2F4B"
              :disabled="isPrevDisabled"
              icon
              size="large"
              variant="flat"
              @click="onClick"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          <template #next="{ isNextDisabled, onClick }">
            <v-btn
              class="mx-2"
              color="#1A2F4B"
              :disabled="isNextDisabled"
              icon
              size="large"
              variant="flat"
              @click="onClick"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </template>

          <v-slide-group-item v-for="tshirt in newArrivalTshirts" :key="tshirt.id">
            <v-card class="mx-3 rounded-lg elevation-2 hover-lift " :to="tshirt.link" width="280">
              <v-img
                :alt="tshirt.name"
                cover
                height="250px"
                :src="tshirt.image"
              />
              <v-card-title class="font-weight-medium bg">{{ tshirt.name }}</v-card-title>
              <v-card-subtitle class="text-caption text-grey-darken-1">{{ tshirt.category }}</v-card-subtitle>
              <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-h6 font-weight-bold text-orange-darken-3">{{ tshirt.price }} TL</span>
                <v-btn color="#1A2F4B" icon size="small">
                  <v-icon>mdi-cart-plus</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
        <v-spacer />
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // Öne çıkan tişörtler için örnek veri (öncekiyle aynı kaldı)
  const featuredTshirts = ref([
    {
      id: 1,
      name: 'Grafik Tasarım Tişörtü',
      category: 'Erkek',
      price: '249.90',
      image: 'https://i.imgur.com/7IUW1bi.jpeg', // Güncellenmiş resim linki
      link: '/products/1', // Güncellenmiş link yapısı
    },
    {
      id: 2,
      name: 'Minimal Desen Tişörtü',
      category: 'Kadın',
      price: '219.90',
      image: 'https://i.imgur.com/d9jY4nE.jpeg', // Güncellenmiş resim linki
      link: '/products/2', // Güncellenmiş link yapısı
    },
    {
      id: 3,
      name: 'Soyut Sanat Tişörtü',
      category: 'Unisex',
      price: '279.90',
      image: 'https://i.imgur.com/E5J01Lw.jpeg', // Güncellenmiş resim linki
      link: '/products/3', // Güncellenmiş link yapısı
    },
    {
      id: 4,
      name: 'Şehir Manzarası Tişörtü',
      category: 'Erkek',
      price: '239.90',
      image: 'https://i.imgur.com/rM1iC5l.jpeg', // Güncellenmiş resim linki
      link: '/products/4', // Güncellenmiş link yapısı
    },
  ])

  // Yeni Gelen Tişörtler için örnek veri
  const newArrivalTshirts = ref([
    {
      id: 7,
      name: 'Anime Temalı Tişört',
      category: 'Unisex',
      price: '289.90',
      image: 'https://i.imgur.com/y1vO0xO.jpeg',
      link: '/products/7',
    },
    {
      id: 8,
      name: 'Geometrik Desen Tişörtü',
      category: 'Erkek',
      price: '259.90',
      image: 'https://i.imgur.com/Z4w0M0n.jpeg',
      link: '/products/8',
    },
    {
      id: 9,
      name: 'Doğa Çizimli Tişört',
      category: 'Kadın',
      price: '229.90',
      image: 'https://i.imgur.com/V7R3h9B.jpeg',
      link: '/products/9',
    },
    {
      id: 10,
      name: 'Pop Art Tişörtü',
      category: 'Unisex',
      price: '299.90',
      image: 'https://i.imgur.com/L3r0kQy.jpeg',
      link: '/products/10',
    },
    {
      id: 11,
      name: 'Uzay Temalı Tişört',
      category: 'Unisex',
      price: '319.90',
      image: 'https://i.imgur.com/cE0124g.jpeg',
      link: '/products/11',
    },
    {
      id: 12,
      name: 'Retro Oyun Tişörtü',
      category: 'Erkek',
      price: '279.90',
      image: 'https://i.imgur.com/qU3g15F.jpeg',
      link: '/products/12',
    },
    {
      id: 13,
      name: 'Minimalist Çizgi Tişörtü',
      category: 'Kadın',
      price: '209.90',
      image: 'https://i.imgur.com/Gj3H0Qc.jpeg',
      link: '/products/13',
    },
  ])
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
  width: 700px; /* Çizginin genişliği */
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
</style>
