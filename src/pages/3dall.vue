<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold mb-6 text-center text-grey-darken-2">
      Tüm Ürünler
    </h2>

    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xl="2"
      >
        <v-card
          class="mx-auto rounded-lg elevation-2"
          style="height: 350px; display: flex; flex-direction: column;"
          :to="'/urun/' + product.id"
        >
          <v-img
            class="rounded-t-lg"
            cover
            height="180"
            :src="product.imageUrl"
          />

          <v-card-title class="text-subtitle-1 font-weight-semibold pt-2 pb-1">
            {{ product.name.substring(0, 50) }}<span v-if="product.name.length > 50">...</span>
          </v-card-title>

          <v-card-text class="pt-0 pb-1" style="flex-grow: 1;">
            <v-rating
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
              :value="product.rating"
            />
            <span class="text-caption ml-1">({{ product.ratingCount }})</span>
          </v-card-text>

          <v-card-actions class="pa-3 d-flex align-center justify-space-between">
            <div class="font-weight-bold text-h6">{{ product.price }} TL</div>
            <v-btn
              color="primary"
              icon="mdi-cart-plus"
              variant="text"
              @click.stop="addToCart(product)"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const fakeProducts = [
    { id: 1, name: 'Gigabyte A520M-K V2 DDR4 5100MHz PCI-e Gen3 M.2 USB 3.2 VGA HDMI...', price: 2179, imageUrl: 'https://via.placeholder.com/300/ABCDEF/000000?Text=Gigabyte%20Anakart', rating: 4.2, ratingCount: 121 },
    { id: 2, name: 'MSI A520M-A PRO AMD A520 Soket AM4 DDR4 4600(OC)MHz mATX...', price: 2299, imageUrl: 'https://via.placeholder.com/300/FEDCBA/FFFFFF?Text=MSI%20Anakart', rating: 4.7, ratingCount: 287 },
    { id: 3, name: 'Izoly B450M-VDH-PLUS DDR4 AM4 mATX Anakart', price: 3006, imageUrl: 'https://via.placeholder.com/300/AAAAAA/FFFFFF?Text=Izoly%20Anakart', rating: 5, ratingCount: 1 },
    { id: 4, name: 'Arduino Mega 2560 R3', price: 800, imageUrl: 'https://via.placeholder.com/300/BBBBBB/FFFFFF?Text=Arduino', rating: 4.5, ratingCount: 5 },
    { id: 5, name: 'Asus PRIME B650M-R-AMD DDR5 7200+(OC) HDMI M.2 AM5', price: 4815.5, imageUrl: 'https://via.placeholder.com/300/CCEEFF/000000?Text=Asus%20Anakart', rating: 4.6, ratingCount: 22 },
    { id: 6, name: 'MSI MPG B550 Gaming Plus AM4 DDR4 4400(OC) HDMI DP M.2 USB3.2 RGB...', price: 5779, imageUrl: 'https://via.placeholder.com/300/DDEEFF/000000?Text=MSI%20Gaming', rating: 4.8, ratingCount: 321 },
    { id: 7, name: 'MSI PRO H610M-E SOKET 1700 DDR5 5600MHz(OC) HDMI VGA M.2...', price: 3444.7, imageUrl: 'https://via.placeholder.com/300/EEFFDD/000000?Text=MSI%20PRO', rating: 4.6, ratingCount: 42 },
    { id: 8, name: 'Asus PRIME H610M-K ARGB DDR5 5600MHz M.2 HDMI VGA mAT...', price: 3134.05, imageUrl: 'https://via.placeholder.com/300/FFDDCC/000000?Text=Asus%20PRIME', rating: 4.5, ratingCount: 91 },
  ]

  const products = ref(fakeProducts)

  const addToCart = product => {
    console.log(`${product.name} sepete eklendi.`)
  }
</script>

<style scoped>
/* Vuetify sınıfları çoğu stil ihtiyacını karşıladığı için bu bölüm genellikle boş kalabilir. */
</style>
