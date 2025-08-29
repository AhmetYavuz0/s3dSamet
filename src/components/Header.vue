<template>
  <v-app>
    <v-system-bar class="text-black mb-14 position-fixed" color="#4ECDC4">
      <v-container class="d-flex justify-center py-1">
        <span class="text-subtitle-2 font-weight-bold">
          <v-icon class="mr-2" size="small">mdi-truck-fast</v-icon>
          2500 TL ve Üzeri Siparişlerinizde KARGO ÜCRETSİZ!
        </span>
      </v-container>
    </v-system-bar>

    <v-app-bar
      app
      class="top-10 position-fixed"
      color="#F7EFE4"
      dark
    >
      <v-container class="d-flex align-center py-0">
        <v-img
          alt="Şirket Logosu"
          class="cursor-pointer"
          contain
          height="60"
          src="https://i.imgur.com/gft7KWu.png"
          width="0"
          @click="mainpage"
        />
        <v-spacer />

        <div class="d-none d-md-flex flex-grow-1 justify-center">
          <v-btn text to="/">Anasayfa</v-btn>

          <v-btn text to="/printers">3D YAZICILAR</v-btn>

          <v-menu offset-y open-on-hover>
            <template #activator="{ props }">
              <v-btn text v-bind="props">Filamentler</v-btn>
            </template>
            <v-list>
              <v-list-item to="/products/filamentler/pla">
                <v-list-item-title>PLA Filamentler</v-list-item-title>
              </v-list-item>
              <v-list-item to="/products/filamentler/pla">
                <v-list-item-title>PLA+ Filamentler</v-list-item-title>
              </v-list-item>
              <v-list-item to="/products/filamentler/pla">
                <v-list-item-title>TPU Filamentler</v-list-item-title>
              </v-list-item>
              <v-list-item to="/products/filamentler/abs">
                <v-list-item-title>ABS Filamentler</v-list-item-title>
              </v-list-item>
              <v-list-item to="/products/filamentler/petg">
                <v-list-item-title>PETG Filamentler</v-list-item-title>
              </v-list-item>
              <v-divider />
              <v-list-item to="/products/filamentler">
                <v-list-item-title>Tüm Filamentler</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu offset-y open-on-hover>
            <template #activator="{ props }">
              <v-btn text v-bind="props">3D Baskılar</v-btn>
            </template>
            <v-list>
              <v-list-item to="/products/3d-baskilar/model-figur">
                <v-list-item-title>Model & Figür</v-list-item-title>
              </v-list-item>
              <v-list-item to="/products/3d-baskilar/aksesuar">
                <v-list-item-title>Aksesuar</v-list-item-title>
              </v-list-item>
              <v-list-item to="/products/3d-baskilar/yedek-parca">
                <v-list-item-title>Yedek Parça</v-list-item-title>
              </v-list-item>
              <v-divider />
              <v-list-item to="/products/3d-baskilar">
                <v-list-item-title>Tüm 3D Baskılar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn text to="/products/iletisim">İletişim</v-btn>
        </div>

        <v-spacer v-if="!searchVisible" />
        <v-slide-x-reverse-transition>
          <v-text-field
            v-if="searchVisible"
            v-model="searchQuery"
            autofocus
            class="flex-grow-1 mx-4"
            clearable
            density="compact"
            hide-details
            label="Ürün veya tasarım ara..."
            prepend-inner-icon="mdi-magnify"
            single-line
            style="max-width: 300px;"
            variant="solo-filled"
            @click:clear="searchVisible = false; searchQuery = '';"
            @focusout="hideSearchIfEmpty"
            @keydown.enter="performSearchAndHide"
          />
        </v-slide-x-reverse-transition>

        <v-btn v-if="!searchVisible" icon @click="searchVisible = true">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn v-if="searchVisible" icon @click="searchVisible = false; searchQuery = '';">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-btn icon to="/sepet">
          <v-badge color="error" :content="cartItemCount" overlap :value="cartItemCount > 0">
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>

        <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="position-fixed" color="#4ECDC4" temporary>
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-title>Anasayfa</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/printers">
          <v-list-item-title>3D Yazıcılar</v-list-item-title>
        </v-list-item>

        <v-list-group value="Filamentler">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Filamentler"
            />
          </template>
          <v-list-item title="PLA Filamentler" to="/products/filamentler/pla" />
          <v-list-item title="ABS Filamentler" to="/products/filamentler/abs" />
          <v-list-item title="PETG Filamentler" to="/products/filamentler/petg" />
          <v-list-item title="Tüm Filamentler" to="/products/filamentler" />
        </v-list-group>

        <v-list-group value="3DBaskilar">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="3D Baskılar"
            />
          </template>
          <v-list-item title="Model & Figür" to="/products/3d-baskilar/model-figur" />
          <v-list-item title="Aksesuar" to="/products/3d-baskilar/aksesuar" />
          <v-list-item title="Yedek Parça" to="/products/3d-baskilar/yedek-parca" />
          <v-list-item title="Tüm 3D Baskılar" to="/products/3d-baskilar" />
        </v-list-group>

        <v-divider />

        <v-list-item link to="/sepet">
          <template #prepend>
            <v-icon>mdi-cart</v-icon>
          </template>
          <v-list-item-title>Sepetim ({{ cartItemCount }})</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useCartStore } from '@/stores/cart.ts'

  const cartStore = useCartStore()
  const router = useRouter()

  function mainpage () {
    router.push('/')
  }

  const cartItemCount = computed(() => {
    return cartStore.items.reduce((total, item) => total + item.quantity, 0)
  })

  const drawer = ref(false)

  // Arama görünürlüğü için yeni reaktif değişken
  const searchVisible = ref(false)
  const searchQuery = ref('')

  const performSearch = () => {
    if (searchQuery.value) {
      router.push({ path: '/search', query: { q: searchQuery.value } })
    }
  }

  // Arama yapıldıktan sonra arama kutusunu gizle ve temizle
  const performSearchAndHide = () => {
    performSearch()
    searchVisible.value = false
    searchQuery.value = ''
  }

  // Arama kutusundan focus çıkınca eğer içi boşsa kutuyu gizle
  const hideSearchIfEmpty = () => {
    if (!searchQuery.value) {
      searchVisible.value = false
    }
  }
</script>

<style scoped>
/* Genel uygulama stilini burada ayarlayabilirsiniz */

/* Logo ve sloganı içeren router-link için stil */
.v-app-bar-title .router-link-active {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Logoyu sola yasla */
  line-height: 1.2; /* Satır aralığını ayarla */
}
</style>
