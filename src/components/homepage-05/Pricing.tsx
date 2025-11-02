'use client';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

{
  /* =========================
Pricing section
===========================*/
}
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <section className="relative pb-20 md:pb-[100px] lg:pb-[150px] xl:pb-[200px] ">
      <div className="main-container flex flex-col gap-[70px]">

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8">
            {/* Price Card 1 */}
            <RevealAnimation delay={0.3} instant>
              <div className="bg-background-3 dark:bg-background-5 flex-1 p-8 rounded-[20px] max-lg:w-full">
                <h3 className="mb-2 font-normal text-heading-5">Bireysel Ücretsiz Başlangıç Paketi</h3>
                <p className="mb-6 max-w-[250px]">Bireysel kullanıcılar için aylık 10 imzalama hakkı (1 kullanıcı limiti).</p>
                {isAnnual ? (
                  <div className="price-year mb-7">
                    <h4 className="text-heading-4 font-normal">
                      $<span>230.00</span>
                    </h4>
                    <p className="text-secondary dark:text-accent">Per Year</p>
                  </div>
                ) : (
                  <div className="price-month mb-7">
                    <h4 className="text-heading-4 font-normal">
                      <span>Ücretsiz</span>
                    </h4>
                  </div>
                )}

                <Link
                  href="/contact-us"
                  className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent w-full block text-center mb-8 before:content-none first-letter:uppercase">
                  Aktif Et
                </Link>
                <ul className="relative list-none space-y-2.5">
                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Kredi
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      10
                    </span>
                  </li>

                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Kullanıcı Limiti
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      1
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Bonus
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      0%
                    </span>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            {/* Price Card 2 */}
            <RevealAnimation delay={0.4} instant>
              <div className="bg-background-3 dark:bg-background-5 flex-1 p-8 rounded-[20px] max-lg:w-full">

                <h3 className="mb-2.5 font-normal text-heading-5">Kurumsal 100 İmza Paketi</h3>
                <p className="mb-6 text-secondary/60 dark:text-accent/60 max-w-[250px]">
                  Kurumsal hesaplar için <br></br>100 + 10 = 110 imzalama hakkı verir.
                </p>
                {isAnnual ? (
                  <div className="price-year mb-7">
                    <h4 className="text-heading-4 font-normal">
                      $<span>4420.00</span>
                    </h4>
                    <p className="text-secondary dark:text-accent">Per Year</p>
                  </div>
                ) : (
                  <div className="price-month mb-7">
                    <h4 className="text-heading-4 font-normal">
                      <span>1500</span>₺
                    </h4>
                  </div>
                )}

                <Link
                  href="/contact-us"
                  className="btn btn-md btn-secondary dark:btn-accent hover:btn-primary w-full block mb-8 before:content-none first-letter:uppercase">
                  Aktif Et
                </Link>
                <ul className="relative list-none space-y-2.5">
                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Kredi
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      100
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Kullanıcı Limiti
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      3
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Bonus
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      10%
                    </span>
                  </li>

                </ul>
              </div>

            </RevealAnimation>

            {/* Price Card 3 */}
            <RevealAnimation delay={0.5} instant>
              <div className="p-2.5 rounded-[20px] flex-1 bg-[url('/images/home-page-2/price-bg.png')] bg-no-repeat bg-center bg-cover max-lg:w-full">
                <div className="bg-white dark:bg-background-8 p-8 rounded-[12px]">                <h3 className="mb-2 font-normal text-heading-5">Kurumsal 300 İmza Paketi</h3>
                  <p className="mb-6 max-w-[250px]">Kurumsal hesaplar için <br></br> 300 + 45 = 345 imzalama hakkı verir.</p>
                  {isAnnual ? (
                    <div className="price-year mb-7">
                      <h4 className="text-heading-4 font-normal">
                        $<span>230.00</span>
                      </h4>
                      <p className="text-secondary dark:text-accent">Per Year</p>
                    </div>
                  ) : (
                    <div className="price-month mb-7">
                      <h4 className="text-heading-4 font-normal">
                        <span>4000</span>₺
                      </h4>
                      <p className="text-secondary dark:text-accent">Popüler</p>

                    </div>
                  )}

                  <Link
                    href="/contact-us"
                    className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent w-full block text-center mb-8 before:content-none first-letter:uppercase">
                    Aktif Et
                  </Link>
                  <ul className="relative list-none space-y-2.5">
                    <li className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect
                            width={20}
                            height={20}
                            rx={10}
                            className="fill-secondary dark:fill-accent"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                        <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                          Kredi
                        </span>
                      </div>

                      <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                        300
                      </span>
                    </li>

                    <li className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect
                            width={20}
                            height={20}
                            rx={10}
                            className="fill-secondary dark:fill-accent"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                        <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                          Kullanıcı Limiti
                        </span>
                      </div>

                      <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                        5
                      </span>
                    </li>
                    <li className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect
                            width={20}
                            height={20}
                            rx={10}
                            className="fill-secondary dark:fill-accent"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                        <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                          Bonus
                        </span>
                      </div>

                      <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                        15%
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>
            {/* Price Card 4 */}
            <RevealAnimation delay={0.6} instant>
              <div className="bg-background-3 dark:bg-background-5 flex-1 p-8 rounded-[20px] max-lg:w-full">
                <h3 className="mb-2 font-normal text-heading-5">Kurumsal 500 İmza Paketi</h3>
                <p className="mb-6 max-w-[250px]">Kurumsal hesaplar için <br></br> 500 + 100 = 600 imzalama hakkı verir.</p>
                {isAnnual ? (
                  <div className="price-year mb-7">
                    <h4 className="text-heading-4 font-normal">
                      $<span>230.00</span>
                    </h4>
                    <p className="text-secondary dark:text-accent">Per Year</p>
                  </div>
                ) : (
                  <div className="price-month mb-7">
                    <h4 className="text-heading-4 font-normal">
                      <span>6000</span>₺
                    </h4>
                  </div>
                )}

                <Link
                  href="/contact-us"
                  className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent w-full block text-center mb-8 before:content-none first-letter:uppercase">
                  Aktif Et
                </Link>
                <ul className="relative list-none space-y-2.5">
                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Kredi
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      500
                    </span>
                  </li>

                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Kullanıcı Limiti
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      10
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Bonus
                      </span>
                    </div>

                    <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                      20%
                    </span>
                  </li>
                </ul>
              </div>
            </RevealAnimation>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
