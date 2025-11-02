import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroPerspective from './HeroPerspective';

const Hero = () => {
  return (
    <section className="bg-[url('/images/home-page-5/hero-bg.svg')] bg-top bg-no-repeat pt-[160px] lg:pt-[180px] xl:pt-[228px] dark:bg-[url('/images/home-page-5/hero-bg-dark.svg')]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="flex flex-col items-center">
        
            <div className="space-y-3 md:mx-10 md:space-y-4 lg:mx-0">
             <RevealAnimation delay={0.2}>
  <h1 className="max-w-[842px] text-center">
    Belgelerinizi yönetin,<br />  
    <span className="font-bold" style={{ color: "#FAB613" }}>e-imzanızı</span> kolayca atın.
  </h1>
</RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="text-center  mx-auto max-w-[700px] leading-relaxed">
                Belgelerinizi yönetin, güvenle depolayın ve paylaşın. Toplu imzalama ile zamandan tasarruf edin, her türlü e-imza sürecini kolayca tamamlayın. İster bireysel ister kurumsal, tüm imza ve onay süreçleriniz tek bir platformda.
                </p>
              </RevealAnimation>
            </div>
            <ul className="flex w-full flex-col items-center justify-center gap-y-3 pt-8 text-center sm:w-auto sm:flex-row md:gap-x-4 md:pt-10 lg:pt-12 xl:pt-14">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="/login-01"
                    className="btn btn-primary hover:btn-secondary btn-w btn-xl dark:hover:btn-white w-[90%] sm:w-auto">
                    Hemen Başlayın
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white hover:btn-primary btn-xl dark:btn-transparent w-[90%] sm:w-auto">
                    Book a call
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* video  */}
          <HeroPerspective />
        </div>
      </div>
    </section>
  );
};

export default Hero;
