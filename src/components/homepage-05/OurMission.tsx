import authorAvatarBgImg from '@public/images/avatar/author-avatar-bg.png';
import avatar1Img from '@public/images/avatar/avatar-1.png';

import avatar8Img from '@public/images/home-page-5/bekleyen-imza-sürecleri.png';
import avatar9Img from '@public/images/home-page-5/manuel-tekli-belge-imzalama.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">
          <div className="w-full lg:w-1/2">
           
            <div className="space-y-3 md:max-w-[540px]">
              <RevealAnimation delay={0.2}>
                <h2>Kurumunuzda E-İmzayı Kullanın</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                 İş süreçlerinizi hızlandırın ve kağıt kullanımını azaltın. E-imza ile sözleşmeler, onaylar ve resmi belgeler dijital olarak imzalanır, güvenle arşivlenir ve anında takip edilir. Zamandan tasarruf edin, verimliliği artırın ve işlemlerinizi modern bir şekilde yönetin.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="w-full lg:w-1/2 max-w-[650px] rounded-[20px] bg-background-2 dark:bg-background-5 p-5 md:p-8 xl:p-[50px]">
              <div className="flex gap-4 sm:gap-2.5 flex-wrap sm:flex-nowrap">
<div className="bg-blue-100 dark:bg-background-8 p-6 rounded-2xl w-full h-60 sm:w-[55%]">
                 
                  <div className="flex items-center gap-4 mb-7">
                      <Image src={avatar8Img} alt="avatar" className="max-w-full" />
                   
                  </div>
                 
                </div>
               <div className="bg-amber-100 dark:bg-background-8 p-6 rounded-2xl h-60  w-full sm:w-[55%]">
                 
                  <div className="flex items-center gap-4 mb-7">
                      <Image src={avatar9Img} alt="avatar" className="max-w-full" />
                   
                  </div>
                 
                </div>
                
              </div>
           <div className="flex gap-4 sm:gap-2.5 flex-wrap sm:flex-nowrap mt-2">
                <div className="bg-amber-100 dark:bg-background-8 p-6 rounded-2xl h-60 w-full sm:w-[55%]">
                 
                  <div className="flex items-center gap-4 mb-7">
                      <Image src={avatar8Img} alt="avatar" className="max-w-full" />
                   
                  </div>
                 
                </div>
               <div className="bg-blue-100 dark:bg-background-8 p-6 rounded-2xl h-60 w-full sm:w-[55%]">
                 
                  <div className="flex items-center gap-4 mb-7">
                      <Image src={avatar9Img} alt="avatar" className="max-w-full" />
                   
                  </div>
                 
                </div>
                
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
