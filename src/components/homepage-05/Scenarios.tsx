import featureAsset1 from '@public/images/home-page-7/Ofiste-belge-hazirlayan-IK.png'
import featureAsset2 from '@public/images/home-page-7/Mail.png';
import featureAsset3 from '@public/images/home-page-7/imzalama.png';
import featureAsset4 from '@public/images/home-page-7/Onaylayan-IK-yöneticisi.png';
import featureAsset5 from '@public/images/home-page-7/e-imzatamamlandi.png';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    title: 'Belge Dijital Ortamda Hazırlanıyor',
    description: 'İK çalışanı, e-imza süreci için gerekli belgeyi dijital ortamda oluşturur. Belgede imza alanı belirgin şekilde tanımlanır ve sistem üzerinden imzaya hazır hale getirilir. Bu adım, sürecin başlangıç noktasıdır.',
    img: featureAsset1,
  },
  {
    id: 2,
    title: 'E-İmza Daveti Gönderiliyor',
    description: 'Hazırlanan belge, adayın e-imza atması için e-posta veya SMS yoluyla gönderilir. Dijital zarf içinde yer alan bağlantı, kullanıcıyı doğrudan imzalama ekranına yönlendirir. Güvenli ve hızlı iletişim sağlanır.',
    img: featureAsset2,
  },
  {
    id: 3,
    title: 'Personel Bilgisayardan Sümen Uygulaması ile İmza Atıyor',
    description: 'Aday, kendisine iletilen bağlantı üzerinden belgeyi açar ve dijital imza alanına tıklayarak imzasını oluşturur. Bu işlem tamamen bilgisayar üzerinden gerçekleşir; fiziksel imzaya gerek kalmaz.',
    img: featureAsset3,
  },
  {
    id: 4,
    title: 'İK Yöneticisi Dijital Onay Veriyor',
    description: 'İK yöneticisi, imzalanan belgeyi sistem üzerinden inceler ve “Onayla” butonuna tıklayarak süreci tamamlar. Bu adım, belgenin resmi olarak kabul edildiğini gösterir.',
    img: featureAsset4,
  },
  {
    id: 5,
    title: 'İşlem Tamamlandı – Dijital Olarak İmzalandı',
    description: 'Tüm dijital imza ve onay adımları başarıyla tamamlandıktan sonra belge, sistem üzerinde “İmzalandı” olarak işaretlenir. Bu durum, belgenin resmi olarak geçerli olduğunu ve sürecin dijital ortamda tamamlandığını gösterir. Ekstra rozet veya görsel simge kullanılmaz; belge durumu sistemsel olarak tanımlanır.',
    img: featureAsset5,
  },


];

const Features = () => {
  return (
    <section className="pb-[100px] pt-[100px] overflow-hidden">
      <div className="main-container">
        <div className="text-center space-y-3 mb-14">
          <RevealAnimation delay={0.3}>
            <h2 className="max-w-[742px] mx-auto">E-İmza Süreci: Dijital, Güvenli ve Hızlı</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[482px] mx-auto">
               Belgelerinizi dijital ortamda hazırlayın, imzalayın ve onaylayın. Tüm süreç tek platformda, tamamen dijital.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          {data.map((feature, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={feature.id}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure className="max-w-[360px] w-full">
                  <Image src={feature.img} alt={feature.title} className="w-full h-full object-cover rounded-2xl" />
                </figure>
                <div className="space-y-1">
                  <h3 className="text-heading-5">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
