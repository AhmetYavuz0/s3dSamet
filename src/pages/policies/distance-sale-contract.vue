<template>
  <v-container class="pa-4 pa-sm-6 pa-md-8 bg-grey-lighten-4 min-h-screen d-flex align-center justify-center">
    <v-card
      class="pa-6 pa-md-8 rounded-xl elevation-10"
      max-width="900"
      width="100%"
    >
      <v-card-title class="text-h4 text-sm-h3 text-center mb-6 font-weight-bold text-primary">
        MESAFELİ SATIŞ SÖZLEŞMESİ
      </v-card-title>
      <v-card-text>
        <v-expansion-panels
          class="expansion-panels-custom"
          flat
          multiple
        >
          <v-expansion-panel
            v-for="(item, index) in contractItems"
            :key="index"
            class="mb-3 rounded-lg overflow-hidden"
          >
            <v-expansion-panel-title
              class="text-subtitle-1 text-md-h6 font-weight-bold text-white bg-secondary py-4"
            >
              {{ item.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-4 bg-blue-grey-lighten-5">
              <div class="text-body-1 text-grey-darken-3" v-html="item.content" />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <div class="mt-10 pt-4 border-t-sm border-opacity-100 border-primary-lighten-3">
          <p class="text-body-1 text-grey-darken-2"><strong>Tarih:</strong> <span class="text-primary">{{ today() }}</span> </p>
          <p class="mt-4 text-body-1 text-grey-darken-2"><strong>Taraflar:</strong></p>
          <p class="text-body-1 text-grey-darken-3"><strong>SATICI:</strong> <span class="text-primary font-weight-medium">S3D Baskı Tasarım</span></p>
          <p class="text-body-1 text-grey-darken-3"><strong>ALICI:</strong> <span class="text-secondary font-weight-medium">[Ad Soyad]</span></p>
        </div>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  function today () {
    return new Date().toLocaleDateString('tr-TR')
  }

  const contractItems = ref([
    {
      title: '1. Taraflar',
      content: `
      <p><strong>Satıcı (Hizmet Sağlayıcı) Bilgileri:</strong></p>
      <p>Firma Adı: S3D Baskı Tasarım</p>
      <p>Adres: Ankara/Yenimahalle</p>
      <p>Telefon: +90 544 340 8473</p>
      <p>E-posta: s3dbaskitasarim@gmail.com</p>
      <br>
      <p><strong>Alıcı (Müşteri) Bilgileri:</strong></p>
      <p>Ad, Soyad: …</p>
      <p>Adres: …</p>
      <p>Telefon: …</p>
      <p>E-posta: …</p>
    `,
    },
    {
      title: '2. Sözleşmenin Konusu',
      content: `
      <p>İşbu sözleşmenin konusu, ALICI’nın SATICI’ya ait internet sitesi üzerinden
      elektronik ortamda siparişini verdiği ürünün/ürünlerin satışı ve teslimine
      ilişkin olarak tarafların hak ve yükümlülüklerinin belirlenmesidir.</p>
    `,
    },
    {
      title: '3. Ürün/Hizmet Bilgileri',
      content: `
      <p>Sipariş esnasında ürün/hizmetin adı, adedi, satış fiyatı (KDV dahil), kargo
      ücreti ve ödeme şekli elektronik ortamda ALICI’ya sunulur ve onaylanır.</p>
    `,
    },
    {
      title: '4. Teslimat ve İfa',
      content: `
      <p>Ürün, ALICI’nın siparişte belirttiği adrese teslim edilir.</p>
      <p>Teslim süresi, sipariş onayından itibaren en geç 30 gündür.</p>
      <p>Teslim masrafları aksi belirtilmedikçe ALICI’ya aittir.</p>
    `,
    },
    {
      title: '5. Cayma Hakkı',
      content: `
      <p>ALICI, ürünü teslim aldığı tarihten itibaren 14 gün içinde herhangi bir gerekçe
      göstermeksizin ve cezai şart ödemeksizin cayma hakkına sahiptir.</p>
      <br>
      <p><strong>Cayma hakkının kullanılamayacağı haller:</strong></p>
      <ul>
        <li>ALICI’nın istekleri doğrultusunda üretilen, kişiselleştirilmiş ürünler (ör. özel ölçülü veya kişisel tasarımlı 3D baskılar)</li>
      </ul>
    `,
    },
    {
      title: '6. Cayma Hakkının Kullanılması',
      content: `
      <p>Cayma hakkı süresi içinde SATICI’ya yazılı olarak veya kalıcı veri saklayıcısı
      ile bildirim yapılmalıdır.</p>
      <p>İade edilecek ürün, fatura ve iade formu ile birlikte eksiksiz ve hasarsız
      şekilde gönderilmelidir.</p>
    `,
    },
    {
      title: '7. Ödeme ve İade',
      content: `
      <p>Cayma hakkı kullanıldığında, ürünün SATICI’ya ulaşmasından itibaren 14 gün
      içinde ürün bedeli, ALICI’nın ödeme yaptığı yöntemle iade edilir.</p>
      <p>İade kargo masrafları ALICI’ya aittir (aksi belirtilmedikçe).</p>
    `,
    },
    {
      title: '8. Uyuşmazlıkların Çözümü',
      content: `
      <p>İşbu sözleşmeden doğabilecek uyuşmazlıklarda, ALICI’nın yerleşim yerindeki veya
      malın satın alındığı yerdeki Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri
      yetkilidir.</p>
    `,
    },
    {
      title: '9. Yürürlük',
      content: `
      <p>ALICI, internet sitesi üzerinden verdiği siparişin ödeme işlemini
      gerçekleştirdiğinde işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.</p>
    `,
    },
  ])
</script>

<style scoped>
/* Vuetify varsayılan renklerini kullanmak için sadece classları kullanmak yeterli */
/* Ekstra CSS gerekirse buraya ekleyebilirsin */
.min-h-screen {
  min-height: 100vh;
}

/* Panel başlıklarındaki ok simgesinin rengini kontrol etmek için */
.v-expansion-panel-title__overlay {
  background-color: transparent !important; /* Vuetify'nin kendi stilini ezmek gerekebilir */
}

/* Panel açıldığında ok rengi */
.v-expansion-panel-title--active .v-expansion-panel-title__icon {
  color: #FFFFFF !important; /* Beyaz ok */
}

/* Genel ok rengi */
.v-expansion-panel-title__icon {
  color: #FFFFFF !important; /* Beyaz ok */
}

/* İçerik div'indeki p etiketlerine biraz boşluk ekleyelim */
.v-expansion-panel-text div p {
  margin-bottom: 8px;
  line-height: 1.6;
}

.v-expansion-panel-text div ul {
  margin-left: 20px;
  margin-top: 5px;
}

.v-expansion-panel-text div li {
  margin-bottom: 4px;
  line-height: 1.5;
}
</style>
