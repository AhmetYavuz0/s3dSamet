<template>
  <v-container class="pa-4 pa-sm-6 pa-md-8 bg-grey-lighten-4 min-h-screen d-flex align-center justify-center">
    <v-card
      class="pa-6 pa-md-8 rounded-xl elevation-10"
      max-width="900"
      width="100%"
    >
      <v-card-title class="text-h5 text-sm-h3 text-center mb-6 font-weight-bold text-primary">
        GİZLİLİK SÖZLEŞMESİ
      </v-card-title>
      <v-card-text>
        <v-expansion-panels class="expansion-panels-custom" flat multiple>
          <v-expansion-panel
            v-for="(item, index) in privacyPolicyItems"
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
          <p class="text-body-1 text-grey-darken-2"><strong>Firma Adı:</strong> <span class="text-primary font-weight-medium">S3D Baskı Tasarım</span></p>
          <p class="text-body-1 text-grey-darken-3"><strong>Adres:</strong> ANKARA/YENİMAHALLE</p>
          <p class="text-body-1 text-grey-darken-3"><strong>Telefon:</strong> +90 544 340 8473</p>
          <p class="text-body-1 text-grey-darken-3"><strong>E-posta:</strong> s3dbaskitasarim@gmail.com </p>
        </div>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const privacyPolicyItems = ref([
    {
      title: '1. Genel Hükümler',
      content: `
      <p>S3D Baskı Tasarım olarak müşterilerimizin gizliliğine büyük önem
      veriyoruz.</p>
      <p>Bu Gizlilik ve Kişisel Verilerin Korunması Politikası, web sitemiz üzerinden
      toplanan kişisel verilerin hangi amaçlarla işlendiğini, nasıl korunduğunu ve
      kullanıcı haklarını açıklamaktadır.</p>
    `,
    },
    {
      title: '2. Toplanan Kişisel Veriler',
      content: `
      <p>Web sitemiz üzerinden aşağıdaki kişisel veriler toplanabilir:</p>
      <ul>
        <li>Ad, soyad</li>
        <li>İletişim bilgileri (adres, telefon, e-posta)</li>
        <li>Ödeme ve fatura bilgileri</li>
        <li>Sipariş ve teslimat bilgileri</li>
        <li>Site kullanımına ilişkin veriler (IP adresi, tarayıcı bilgileri vb.)</li>
      </ul>
    `,
    },
    {
      title: '3. Kişisel Verilerin İşlenme Amaçları',
      content: `
      <p>Toplanan kişisel veriler şu amaçlarla kullanılmaktadır:</p>
      <ul>
        <li>Siparişlerin alınması, işlenmesi ve teslim edilmesi</li>
        <li>Faturalama ve muhasebe süreçlerinin yürütülmesi</li>
        <li>Müşteri hizmetleri desteği sağlanması</li>
        <li>Kullanıcı deneyiminin geliştirilmesi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>
    `,
    },
    {
      title: '4. Kişisel Verilerin Paylaşılması',
      content: `
      <p>Kişisel verileriniz, yalnızca yasal yükümlülükler çerçevesinde veya
      siparişlerinizi yerine getirebilmek amacıyla lojistik, kargo, ödeme altyapısı
      sağlayıcıları gibi hizmet aldığımız üçüncü kişilerle paylaşılabilir.</p>
      <p>Hiçbir koşulda ticari amaçlarla üçüncü kişilerle paylaşılmaz.</p>
    `,
    },
    {
      title: '5. Veri Saklama Süresi',
      content: `
      <p>Kişisel veriler, ilgili mevzuatta öngörülen süreler boyunca veya işleme
      amaçları doğrultusunda gerekli olan süre kadar saklanır.</p>
    `,
    },
    {
      title: '6. Kişisel Verilerin Korunması',
      content: `
      <p>Şirketimiz, kişisel verilerin gizliliğini ve güvenliğini sağlamak için gerekli
      teknik ve idari tedbirleri almaktadır.</p>
    `,
    },
    {
      title: '7. Kullanıcı Hakları (KVKK kapsamında)',
      content: `
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kullanıcılar:</p>
      <ul>
        <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>Hangi amaçla işlendiğini öğrenme</li>
        <li>Yanlış veya eksik işlenmişse düzeltilmesini talep etme</li>
        <li>Silinmesini veya yok edilmesini talep etme</li>
        <li>İşlemenin kanuna aykırı olması sebebiyle zarar görürse zararın giderilmesini talep etme</li>
      </ul>
      <p>haklarına sahiptir.</p>
    `,
    },
    {
      title: '8. İletişim',
      content: `
      <p>Bu Gizlilik Politikası hakkında her türlü soru ve talepleriniz için bize
      aşağıdaki bilgilerden ulaşabilirsiniz:</p>
    `,
    },
  ])
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}

.v-expansion-panel-title__overlay {
  background-color: transparent !important;
}

.v-expansion-panel-title--active .v-expansion-panel-title__icon {
  color: #FFFFFF !important;
}

.v-expansion-panel-title__icon {
  color: #FFFFFF !important;
}

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
