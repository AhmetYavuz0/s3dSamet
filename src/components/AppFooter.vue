<template>
  <v-footer class="py-8" color="#4ECDC4">
    <v-container>
      <v-row class="px-4">
        <v-col class="text-center text-md-left mb-6 mb-md-0 text-white" cols="12" md="4">
          <v-img
            alt="Şirket Logosu"
            class="mb-3 mx-auto mx-md-0 cursor-pointer"
            contain
            height="auto"
            max-width="300"
            src="https://i.imgur.com/gft7KWu.png"
            @click="goToHome"
          />
          <p class="text-subtitle-2 text-black">
            İhtiyaç duyduğunuz her şey için yanınızdayız. En kaliteli ürünler, en uygun fiyatlarla.
          </p>
        </v-col>

        <v-col class="text-center  text-md-left mb-6 mb-md-0 d-flex flex-column" cols="12" md="4">
          <v-card-title class="pa-0 text-h6 font-weight-bold text-black mb-2 text-center ">
            Hızlı Erişim
          </v-card-title>
          <div class="d-flex flex-column">
            <v-btn
              v-for="(item, i) in quickLinks"
              :key="i"
              class="text-black text-md-left text-capitalize pa-0"
              :to="item.to"
              variant="text"
            >
              {{ item.title }}
            </v-btn>
          </div>
        </v-col>

        <v-col class="text-center text-md-left text-black" cols="12" md="4">
          <v-card-title class="pa-0 text-h6 font-weight-bold mb-2">
            Bize Ulaşın
          </v-card-title>
          <div class="d-flex flex-column">
            <p class="text-subtitle-2 text-md-left mb-1">
              <v-icon color="black" size="18" start>mdi-email</v-icon>
              Email: info@marka.com
            </p>
            <p class="text-subtitle-2 text-md-left mb-1">
              <v-icon color="black" size="18" start>mdi-phone</v-icon>
              Telefon: +90 555 123 45 67
            </p>
            <p class="text-subtitle-2 text-md-left mb-1">
              <v-icon color="black" size="18" start>mdi-map-marker</v-icon>
              Adres: Örnek Cad. No: 123, İstanbul
            </p>
          </div>
          <div class="d-flex ga-2 justify-center justify-md-start mt-4">
            <v-btn
              v-for="icon in socialIcons"
              :key="icon.name"
              color="white"
              :href="icon.link"
              icon
              size="small"
              target="_blank"
              variant="flat"
            >
              <v-icon size="20">{{ icon.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6" color="white" />

      <v-row>
        <v-col class="text-center text-body-2 text-black" cols="12">
          &copy; {{ new Date().getFullYear() }} MARKA ADI. Tüm Hakları Saklıdır.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  function gotologin () {
    router.push('/login')
  }

  const quickLinks = ref([
    { title: 'Hakkımızda', to: '/about' },
    { title: 'Kariyer', to: '/careers' },
    { title: 'Sıkça Sorulan Sorular', to: '/faq' },
    { title: 'Gizlilik Politikası', to: '/privacy' },
  ])

  const socialIcons = ref([
    { name: 'facebook', icon: 'mdi-facebook', link: '#' },
    { name: 'twitter', icon: 'mdi-twitter', link: '#' },
    { name: 'instagram', icon: 'mdi-instagram', link: '#' },
    { name: 'tiktok', icon: 'mdi-music-note-outline', link: '#' },
  ])

  const goToHome = () => {
    router.push('/')
  }
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.v-btn:hover {
  color: #212121 !important; /* Vurgu için koyu gri */
}
</style>
