<template>
  <v-container class="my-10">
    <v-card class="pa-8 mx-auto" elevation="4" max-width="900">
      <h1 class="text-h4 text-center mb-6 font-weight-bold">Mesafeli Satış Sözleşmesi</h1>
      <v-divider class="mb-6" />

      <h2 class="text-h6 font-weight-bold mb-2">1. TARAFLAR</h2>
      <v-row class="mb-4">
        <v-col cols="12" md="6">
          <p class="font-weight-medium">SATICI</p>
          <p>
            Ünvanı: S3D BASKI TASARIM <br>
            E-posta: s3dbaskitasarim@gmail.com
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <p class="font-weight-medium">ALICI</p>
          <p>www.s3dbaskitasarim.com adresinden alışveriş yapan müşteri</p>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <div v-for="(section, index) in contractSections" :key="index" class="mb-6">
        <h2 class="text-h6 font-weight-bold mb-2">{{ index + 2 }}. {{ section.title }}</h2>
        <p v-for="(paragraph, pIndex) in section.content" :key="pIndex" class="text-body-1 mb-2">
          {{ paragraph }}
        </p>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const contractSections = ref([
    {
      title: 'KONU',
      content: [
        'ALICI\'nın SATICI\'ya ait www.s3dbaskitasarim.com alan adlı internet sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürün veya ürünlerin satışı ve teslimi ile ilgili olarak, 4077 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.',
      ],
    },
    {
      title: 'SÖZLEŞME KONUSU ÜRÜN',
      content: [
        'Ürünler, Alıcı’nın kişisel tercihlerine göre hazırlanmış olup, cinsi ve türü, miktarı, satış bedeli yukarıda belirtildiği gibidir.',
      ],
    },
    {
      title: 'GENEL ŞARTLAR',
      content: [
        '4.1.ALICI, SATICI \'ya ait www.s3dbaskitasarim.com alan adlı internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup eksiksiz ve doğru bilgi sahibi olduğunu ve işbu Sözleşmenin geçerliliği için elektronik ortamda gerekli teyidi verdiğini beyan eder.',
        '4.2.Sözleşme konusu ürün, yasal 30 günlük süreyi aşmamak koşulu ile her bir ürün için ALICI\'nın yerleşim yerinin uzaklığına bağlı olarak internet sitesinde ön bilgiler içinde açıklanan süre içinde ALICI veya gösterdiği adresteki kişi/kuruluşa teslim edilir.',
        '4.3.ALICI, SATICI’ ya verdiği teslimat adresinin eksiksiz ve doğru olduğunu kabul ve beyan eder.',
        '4.4.Sözleşme konusu ürün, ALICI\'dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun teslimatı kabul etmemesinden SATICI sorumlu değildir.',
        '4.5.Sözleşme konusu ürünün taze ve siparişte belirtilen niteliklere uygun tesliminden SATICI sorumludur.',
        '4.6.Sözleşme konusu ürünün teslimatı için işbu sözleşmeye internet üzerinde onay verilmiş ve bedelinin ALICI\'nın tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedelinin ödenmemesi veya banka kayıtlarının iptal edilmesi halinde, SATICI’nın ürünün teslimi yükümlülüğünün ortadan kalkacağı taraflarca kabul edilmiştir.',
        '4.7.Ürünün tesliminden sonra ALICI\'ya ait kredi kartının ALICI\'nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeni ile, ilgili banka veya finans kuruluşunun ürün bedelini SATICI\'ya ödememesi halinde, kendisine teslim edilmiş olması kaydıyla ALICI\' nın ürünü 3 gün içinde SATICI\'ya göndermesi zorunludur. Bu takdirde nakliye giderleri ve tüm ödemeler ALICI\'ya aittir.',
        '4.8.SATICI mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeni ile sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu ALICI\' ya bildirmekle yükümlüdür. Bu takdirde ALICI siparişin iptal edilmesi veya sözleşme konusu ürünün teslimat süresinin engelleyici durumun ortadan kalkmasına kadar ertelenmesi haklarından birini kullanabilir. ALICI\' nın siparişi iptal etmesi halinde ödediği tutar 10 gün içinde kendisine ürün bedelini öderken seçtiği ödeme yöntemi ile iade edilir.',
        '4.9.Kargodaki gecikmelerden firmamız sorumlu değildir.',
      ],
    },
    {
      title: 'KİŞİSEL BİLGİLER ve GİZLİLİK',
      content: [
        'www.s3dbaskitasarim.com müşterilerine daha iyi hizmet verebilmek amacıyla isim, yaş, ilgi alanlarınız, e-posta gibi bazı kişisel bilgilerinizi sizlerden talep etmektedir. www.s3dbaskitasarim.com sunucularında toplanan bu bilgiler, siparişlerinizin işleme konulması ve hesabınızın yönetilmesi, hizmetlerimizin ve ilgili ürünlerimizin pazarlanması, pazar araştırması amacıyla temsilcileri vasıtası ile gerek e-posta, telefon, fax veya SMS yoluyla gerekse de posta yoluyla sizinle irtibat kurmak, internet sitemizi ne şekilde kullandığınıza dair analiz yapmak ve sizlere daha iyi hizmet için internet sitemizi size özgü hale getirmek, kimlik, doğrulama ve kayıt oluşturulması, ürünlerimizi ve hizmetlerimizi ve bunlara ilişkin kişisel seçim olanaklarınızı araştırmak ve geliştirmek, hizmetlerimizi veya ilgili ürünleri sizlere tanıtmak, yeni ürünler ve ilgi çekici bulacağınızı düşündüğü diğer bilgiler hakkındaki promosyon niteliğindeki e-postaları periyodik olarak gönderebilmek ve istenmeyen e-postaların iletilmemesine yönelik müşteri sınıflandırması çalışmaları için sadece firmamız tarafından kullanılmakta ve siparişinizin gerçekleştirilmesi için gerekli bilgiler gerektiği ölçüde banka ve kargo şirketi ile paylaşılmaktadır. Bu bilgiler, firmamızın ortaklarının ileride kuracakları şirketler tarafından da kullanılabilir. Üyelik formlarından toplanan bilgiler, siparişin gerçekleştirilmesi dışında söz konusu üyenin haberi ya da aksi bir talimatı olmaksızın, üçüncü şahıslarla kesinlikle paylaşılmamakta, faaliyet dışı hiçbir nedenle ticari amaçla kullanılmamakta ve satılmamaktadır.',
        'Ayrıca, istenilen kişisel bilgilerin haricinde site kullanımı sırasında izlenen ziyaretçi hareket ve tercihleri analiz edilerek yorumlamaktadır. Kişisel bilgiler içermeyen bu istatistiksel veriler, müşterilerimize daha özel ve etkin bir alışveriş deneyimi yaşatmak amaçlanmaktadır.',
        'Müşteri bilgileri, ancak resmi makamlarca usulü dairesinde bu bilgilerin talep edilmesi halinde ve yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapmak zorunda olduğu durumlarda resmi makamlara açıklanabilecektir.',
        'Müşterinin sisteme girdiği tüm bilgilere sadece Müşteri ulaşabilmekte ve bu bilgileri sadece Müşteri değiştirebilmektedir. Bir başkasının bu bilgilere ulaşması ve bunları değiştirmesi mümkün değildir. Siteye üye olduğunuzda karşınıza çıkan www.s3dbaskitasarim.com dan gönderilen maillerin alt kısmında bulunan "Kampanya duyurularından haberdar olmak istemiyorsanız lütfen tıklayınız.” linkine tıklayarak günlük mail gönderim listesinden kolayca çıkabilirsiniz.',
        'Ödeme sayfasında istenen kredi kartı bilgileriniz, siteden alışveriş yapan siz değerli müşterilerimizin güvenliğini en üst seviyede sağlamak dikkate edilen temel noktalardandır. Bu nedenle bu bilgiler hiçbir şekilde www.s3dbaskitasarim.com sunucularında tutulmamakta ve ödemeye yönelik tüm işlemlerin www.s3dbaskitasarim.com arayüzü üzerinden banka ve bilgisayarınız arasında gerçekleşmesi sağlanmaktadır. www.s3dbaskitasarim.com sitesindeki kredi kartı ödemeleri iyzico sistemi üzerinden gerçekleşmektedir. Bu ödeme sayfasının tasarımı, bakımı ve güvenliği iyzico tarafından sağlanmaktadır.',
      ],
    },
    {
      title: 'CAYMA HAKKI',
      content: [
        'ALICI, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa tesliminden itibaren 7 gün içinde cayma hakkına sahiptir. Bu konudaki istisna, malın tüketicinin istekleri ve onun kişisel ihtiyaçları doğrultusunda hazırlanması ve niteliği gereği iade edilemeyecek mallardan olması durumudur. Bu tip mallar Mesafeli Sözleşmelere Dair Yönetmelik çerçevesinde ayrı tutulduğu ve niteliği gereği tüketildiği anda sona eren mallar olduğu için iade edilmeleri söz konusu değildir.',
        'İşbu Sözleşme kapsamındaki gıda maddeleri ve içecekler ya da diğer günlük tüketim maddeleri; tüketicinin istekleri veya açıkça onun kişisel ihtiyaçları doğrultusunda kişiye özel hazırlanması, niteliği itibarıyla geri gönderilmeye elverişli olmaması ve çabuk bozulma tehlikesi olmasının yanı sıra elektronik ortamda anında ifa edilmesi ve tüketiciye anında teslim edilmesi, SATICI’nın teslimatları çerçevesinde ALICI’nın mesken ya da işyerine götürülmesine ilişkin olması sebebiyle cayma hakkı kullanımına ilişkin hükümlere tabi değildir.',
      ],
    },
    {
      title: 'SİPARİŞ İPTAL',
      content: [
        'ALICI internet üzerinden sipariş verdiği anda, SATICI ise ürünü kargo şirketine teslim ettiği anda Sözleşmeyi kabul etmiş ve Sözleşme kurulmuş sayılır. Satıcı siparişi kargo şirketine teslim ettiğine dair e-posta ile onay gönderecektir.',
        'Siparişlerinizde adres ve teslim tarihi değişiklikleri ile sipariş iptali, ürün kargo şirketine teslim edilmeden bildirilmelidir. Aksi halde sipariş iptali ile ilgili oluşacak sorunlardan SATICI sorumlu değildir.',
        'Yapılan yanlış ödeme veya sipariş iptallerinde kredi kartınıza ilgili tutarların iadeleri 10 gün süre içinde yapılacaktır. ALICI’nın bilgilerini vermiş olduğu kredi kartının bağlı olduğu bankanın kural ve işleyişine bağlı gecikmelerden SATICI sorumlu değildir.',
        'Alışverişiniz esnasında meydana gelecek anlaşmazlıklar sipariş bedeli ile sınırlıdır.',
      ],
    },
    {
      title: 'SİSTEM HATALARI',
      content: [
        'SATICI’nın Sözleşme’yi kabul etmemesi veya ALICI\' nın siparişi süresinde iptal etmesi halinde ALICI\' NIN ödediği tutar on gün içinde kendisine iade edilir.',
        'Dizgi ve sistem hatalarından meydana gelen fiyat yanlışlıklarından SATICI sorumlu değildir.',
      ],
    },
    {
      title: 'YETKİLİ MAHKEME',
      content: [
        'İşbu sözleşmenin uygulanmasında, Bilim Sanayi ve Teknoloji Bakanlığı’ nca (eski adı Sanayi ve Ticaret Bakanlığı) ilan edilen değere kadar Tüketici Hakem Heyetleri ile SATICI \'nın yerleşim yerindeki Tüketici Mahkemeleri yetkilidir.',
        'Siparişin gerçekleşmesi durumunda ALICI işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.',
      ],
    },
  ])
</script>
