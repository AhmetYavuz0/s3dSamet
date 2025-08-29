<template>
  <v-container v-if="product" class="my-3">
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="rounded-xl elevation-6 mb-4">
          <v-img
            v-if="product.images && product.images.length > 0"
            :alt="`${product.name} - Görsel`"
            class="rounded-xl"
            cover
            height="auto"
            :src="product.images[selectedImageIndex]"
          >
            <template #placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate />
              </div>
            </template>
          </v-img>

          <div v-else class="d-flex align-center justify-center fill-height" style="height: 400px; background-color: #f5f5f5;">
            <p>Fotoğraf bulunamadı.</p>
          </div>
        </v-card>

        <v-row
          v-if="product.images && product.images.length > 1"
          class="mt-4 flex-nowrap"
          no-gutters
          style="overflow-x: auto;"
        >
          <v-col v-for="(image, i) in product.images" :key="i" class="pr-2">
            <v-img
              :alt="`${product.name} Küçük Resim ${i + 1}`"
              class="rounded-lg cursor-pointer"
              :class="{ 'thumbnail-active': selectedImageIndex === i }"
              contain
              height="auto"
              max-width="150"
              :src="image"
              @click="selectedImageIndex = i"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col class="d-flex flex-column justify-center pa-4 pa-md-8" cols="12" md="6">
        <h1 class="text-h4 font-weight-bold mb-2 text-md-h3">{{ product.name }}</h1>
        <p class="text-subtitle-1 text-grey-darken-1 mb-4">{{ product.category }}</p>

        <v-divider class="my-4" />

        <p class="text-h5 text-orange-darken-3 font-weight-bold mb-6 text-md-h4">
          {{ product.price }} TL
        </p>

        <p class="text-body-1 text-grey-darken-2 mb-4">
          {{ product.description }}
        </p>
        <p class="text-body-2 text-grey-darken-1 mb-6">
          {{ product.details }}
        </p>

        <v-spacer />

        <v-row no-gutters>
          <v-col class="pr-md-2 mb-2 mb-md-0" cols="12" md="6">
            <v-btn
              block
              class="text-white rounded-pill elevation-4"
              color="orange-darken-3"
              size="large"
            >
              <v-icon left>mdi-cart-plus</v-icon> Sepete Ekle
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn
              block
              class="rounded-pill elevation-4"
              color="grey-darken-2"
              size="large"
              variant="outlined"
              @click="$router.back()"
            >
              Geri Dön
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else class="text-center my-10">
    <v-alert
      border="start"
      prominent
      type="error"
      variant="tonal"
    >
      <h2 class="text-h5">Ürün Bulunamadı</h2>
      <p class="mt-2">Aradığınız ürün mevcut değil veya sayfaya yanlış yönlendirildiniz.</p>
    </v-alert>
    <v-btn
      class="mt-6"
      color="primary"
      size="large"
      @click="$router.push('/')"
    >
      Ana Sayfaya Dön
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { products } from '@/data.js'

  const route = useRoute()
  const product = ref(null)
  const selectedImageIndex = ref(0) // Yeni: Seçili resim için state

  onMounted(() => {
    const productId = Number.parseInt(route.params.id as string)
    product.value = products.find(p => p.id === productId)

    // Ürün bulunursa ve resimleri varsa ilk resmin seçili olduğunu varsayalım
    if (product.value && product.value.images && product.value.images.length > 0) {
      selectedImageIndex.value = 0
    }
  })
</script>

<style scoped>
/* Aktif küçük resme vurgu eklemek için CSS */
.thumbnail-active {
  border: 2px solid #ff9800; /* Koyu turuncu vurgu */
  transition: border-color 0.2s ease-in-out;
}

.cursor-pointer {
  cursor: pointer;
}

.elevation-6:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) !important;
  transition: box-shadow 0.3s ease-in-out;
}
</style>
