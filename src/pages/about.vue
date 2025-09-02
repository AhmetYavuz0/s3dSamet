<template>
  <v-container class="pa-4 pa-sm-6 pa-md-8 bg-grey-lighten-4 min-h-screen d-flex align-center justify-center">
    <v-card
      class="pa-6 pa-md-8 rounded-xl elevation-10"
      max-width="1200"
      width="100%"
    >
      <v-row no-gutters>
        <v-col class="pr-md-8 d-flex flex-column justify-center" cols="12" md="7">
          <v-card-title class="text-h4 text-sm-h3 font-weight-bold text-primary mb-4">
            Hakkımızda
          </v-card-title>
          <v-card-text class="text-body-1 text-grey-darken-3">
            <h2 class="text-h6 text-secondary font-weight-bold mb-2">🚀 Biz Kimiz?</h2>
            <p class="mb-4">
              S3D Baskı Tasarım, fikirlerinizi üç boyutlu gerçeğe dönüştüren genç ve dinamik bir ekip. 3D yazıcı teknolojisini yaratıcı dokunuşlarla birleştiriyor, hayallerinize yepyeni bir boyut katıyoruz.
            </p>

            <h2 class="text-h6 text-secondary font-weight-bold mb-2">🎨 Ne Yapıyoruz?</h2>
            <ul class="mb-4 list-style-none">
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle-outline</v-icon>Prototip üretimi</li>
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle-outline</v-icon>Kişisel ve özel tasarımlar</li>
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle-outline</v-icon>Dekoratif ve fonksiyonel objeler</li>
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle-outline</v-icon>Endüstriyel parça baskıları</li>
            </ul>
            <p class="mb-4 font-italic">
              Kısacası, aklınıza gelen her şeyi “fikrinden ürününe” dönüştürüyoruz.
            </p>

            <h2 class="text-h6 text-secondary font-weight-bold mb-2">💡 Neden Biz?</h2>
            <ul class="mb-4 list-style-none">
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle</v-icon>Hızlı ve kaliteli baskı</li>
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle</v-icon>Müşteri odaklı yaklaşım</li>
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle</v-icon>Yaratıcı çözümler</li>
              <li><v-icon class="mr-2" color="secondary" size="small">mdi-check-circle</v-icon>Samimi iletişim</li>
            </ul>
            <p class="mb-4">
              Bizim için her baskı, bir hayalin hayat bulmuş hali.
            </p>

            <div class="slogan-box pa-4 rounded-lg bg-primary-lighten-4">
              <p class="text-center text-h6 font-weight-bold text-primary">
                🖤 Sloganımız: “Biz hayallerinizi basıyoruz!”
              </p>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
// Görsel için Vue script kısmına özel bir şey eklemeye gerek yok.
// Vue 3 + Vuetify otomatik olarak çalışır.
</script>

<style scoped>
/* İçerik listelerinin stilini düzenlemek için */
.list-style-none {
  list-style: none;
  padding-left: 0;
}

.list-style-none li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
</style>
