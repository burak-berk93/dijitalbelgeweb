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
import Testimonial from '@/components/homepage-01/Testimonial';
import TimelineIntegration from '@/components/homepage-01/TimelineIntegration';
import CTAV1 from '@/components/shared/cta/CTAV1';

import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';






export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Crypto - NextSaaS',
};

const Homepage01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5">
         <Hero />
            <Scenarios />
        <Services />
         <OurMission />
      
       
       
       <Pricing/>
        <Faq />
        <Integration />
  
      </main>
      <FooterOne />
    </Fragment>
  );
};
Homepage01.displayName = 'Homepage01';
export default Homepage01;
