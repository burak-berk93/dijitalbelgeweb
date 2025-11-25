import Client from '@/components/pricing-02/Client';
import Faq from '@/components/pricing-02/Faq';
import Pricing from '@/components/homepage-05/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing 02 - NextSaaS',
};

const Pricing02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="fiyatlandirma" heading="Fiyatlandırma " link="/fiyatlandirma" />
        <Pricing />
      
      </main>
      <FooterOne />
    </Fragment>
  );
};

Pricing02.displayName = 'Pricing02';
export default Pricing02;
