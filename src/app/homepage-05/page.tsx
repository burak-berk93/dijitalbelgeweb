import Blog from '@/components/homepage-05/Blog';
import Faq from '@/components/homepage-05/Faq';
import Feature from '@/components/homepage-05/Feature';
import Hero from '@/components/homepage-05/Hero';
import Scenarios from '@/components/homepage-05/Scenarios';
import Integration from '@/components/homepage-05/Integration';
import Pricing from '@/components/homepage-05/Pricing';
import OurMission from '@/components/homepage-05/OurMission'
import Process from '@/components/homepage-05/Process';
import Services from '@/components/homepage-05/Services';
import Team from '@/components/homepage-05/Team';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Analytics - NextSaaS',
};

const HomePage02 = () => {
  return (
    <>
      <NavbarOne
        className="border-stroke-2 bg-accent/60 dark:bg-background-9 dark:border-stroke-6 border backdrop-blur-[25px]"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent border-0"
      />
      <main className="bg-background-2 dark:bg-background-7">
        <Hero />
        <Services />
         <OurMission />
       
       
       <Pricing/>
        <Faq />
        <Integration />
     
        <FooterOne className="dark:bg-background-8" />
      </main>
    </>
  );
};

export default HomePage02;
