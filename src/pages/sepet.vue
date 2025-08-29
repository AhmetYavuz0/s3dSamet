<template>
  <v-container class="my-10">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h4 font-weight-light text-center text-primary mb-8">
          Alışveriş Sepeti
        </h1>

        <v-alert
          v-if="cartItems.length === 0"
          class="my-12 text-center"
          color="primary"
          icon="mdi-cart-off"
          type="info"
          variant="tonal"
        >
          Sepetiniz şu an boş.
        </v-alert>

        <v-row v-else>
          <v-col cols="12" md="8">
            <v-card class="elevation-0 border rounded-lg pa-4">
              <v-list class="bg-transparent py-0">
                <v-list-item v-for="(item, index) in cartItems" :key="item.id" class="px-0 py-4">
                  <v-row align="center" no-gutters>
                    <v-col cols="3" sm="2">
                      <v-img
                        :alt="item.name"
                        class="rounded-lg"
                        contain
                        height="80"
                        :src="item.image"
                      />
                    </v-col>

                    <v-col class="pl-4" cols="9" sm="5">
                      <div class="text-body-2 text-medium-emphasis">{{ item.category }}</div>
                      <div class="text-h6 font-weight-bold">{{ item.name }}</div>
                      <div class="text-subtitle-1 text-primary">{{ formatPrice(item.price) }}</div>
                    </v-col>

                    <v-col class="mt-4 mt-sm-0 d-flex flex-column flex-sm-row align-center justify-end" cols="12" sm="5">
                      <div class="d-flex align-center">
                        <v-btn icon size="x-small" variant="text" @click="changeQuantity(index, -1)">
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <span class="mx-2 text-h6 font-weight-medium">{{ item.quantity }}</span>
                        <v-btn icon size="x-small" variant="text" @click="changeQuantity(index, 1)">
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </div>

                      <v-btn
                        class="ml-sm-4 mt-2 mt-sm-0"
                        color="red"
                        icon
                        size="small"
                        variant="text"
                        @click="removeFromCart(index)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-divider v-if="index < cartItems.length - 1" class="mt-4" />
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-6 elevation-4 rounded-lg">
              <v-card-title class="text-h6 font-weight-bold mb-4 px-0">Sipariş Özeti</v-card-title>

              <v-list class="bg-transparent py-0">
                <v-list-item class="px-0">
                  <v-list-item-title class="font-weight-medium">Ara Toplam</v-list-item-title>
                  <template #append>
                    <span>{{ formatPrice(subtotalPrice) }}</span>
                  </template>
                </v-list-item>

                <v-list-item class="px-0">
                  <v-list-item-title class="font-weight-medium">Kargo</v-list-item-title>
                  <template #append>
                    <span>{{ formatPrice(shippingPrice) }}</span>
                  </template>
                </v-list-item>
              </v-list>

              <v-divider class="my-4" />

              <div class="d-flex justify-space-between text-h6 font-weight-bold">
                <span>Toplam</span>
                <span class="text-primary">{{ formatPrice(totalPrice) }}</span>
              </div>

              <v-btn
                class="w-100 mt-6 text-none"
                color="primary"
                size="large"
                variant="flat"
                @click="checkout"
              >
                Ödemeyi Tamamla
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed, ref } from 'vue'

  const shippingPrice = 25

  const cartItems = ref([
    { id: 1, name: 'Minimalist Koltuk', price: 1200, quantity: 1, image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', category: 'Mobilya' },
    { id: 2, name: 'Ergonomik Klavye', price: 850, quantity: 2, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', category: 'Elektronik' },
    { id: 3, name: 'Akıllı Saat', price: 1500, quantity: 1, image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Elektronik' },
  ])

  const subtotalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  const totalPrice = computed(() => {
    return subtotalPrice.value + shippingPrice
  })

  const removeFromCart = index => {
    cartItems.value.splice(index, 1)
  }

  const changeQuantity = (index, delta) => {
    const newQuantity = cartItems.value[index].quantity + delta
    if (newQuantity >= 1) {
      cartItems.value[index].quantity = newQuantity
    }
  }

  const formatPrice = price => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(price)
  }

  const checkout = () => {
    alert('Ödemeye devam ediliyor...')
  }
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}
</style>
