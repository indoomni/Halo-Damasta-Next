import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Announcement from '../components/announcement'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Accordion from '../components/accordion'
import Feature from '../components/feature'
import Quote from '../components/quote'
import Question from '../components/question'
import Check from '../components/check'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Damasta</title>
          <meta
            name="description"
            content="DAMASTA lahir dari mimpi bersama — membangun masa depan digital yang adil, inklusif, dan penuh harapan bagi seluruh koperasi di Indonesia."
          />
          <meta property="og:title" content="Damasta" />
          <meta
            property="og:description"
            content="DAMASTA lahir dari mimpi bersama — membangun masa depan digital yang adil, inklusif, dan penuh harapan bagi seluruh koperasi di Indonesia."
          />
        </Head>
        <div className="home-hero">
          <header className="home-heading10">
            <div id="notifcation" className="home-notification">
              <Link href="/">
                <a>
                  <Announcement
                    rootClassName="announcementroot-class-name"
                    className="home-component10"
                  ></Announcement>
                </a>
              </Link>
            </div>
            <header className="home-navbar">
              <div className="home-desktop">
                <div className="home-main">
                  <div className="home-branding">
                    <Link href="/">
                      <a className="home-link11">
                        <img
                          alt="pastedImage"
                          src="/Damasta/logo-damasta-without-tagline-200h.png"
                          className="home-finbest"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="home-links1">
                    <Link href="/">
                      <a className="home-link13 link">Tentang Kami</a>
                    </Link>
                    <a href="#Program" className="home-link14 link">
                      Program
                    </a>
                    <a href="#Syarat" className="home-link15 link">
                      Persyaratan
                    </a>
                  </div>
                </div>
                <div className="home-quick-actions">
                  <a
                    href="https://app.damastacoop.com/signup"
                    className="home-log-in link"
                  >
                    Belum punya akun?
                  </a>
                  <a href="https://app.damastacoop.com" className="home-link16">
                    <div className="home-sign-up-btn">
                      <span className="home-sign-up1">Masuk</span>
                    </div>
                  </a>
                  <img
                    id="open-mobile-menu"
                    alt="pastedImage"
                    src="/pastedimage-8o98.svg"
                    className="home-hamburger-menu"
                  />
                </div>
              </div>
              <div id="mobile-menu" className="home-mobile">
                <div className="home-top1">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-image1"
                  />
                  <svg
                    id="close-mobile-menu"
                    viewBox="0 0 1024 1024"
                    className="home-icon10"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
                <div className="home-links2">
                  <Link href="/">
                    <a className="home-link17">Features</a>
                  </Link>
                  <Link href="/">
                    <a className="home-link18">How it works</a>
                  </Link>
                  <Link href="/">
                    <a className="home-link19">Prices</a>
                  </Link>
                  <Link href="/">
                    <a className="home-link20">Contact</a>
                  </Link>
                  <div className="home-buttons1">
                    <Link href="/">
                      <a className="home-link21">
                        <div className="home-btn1">
                          <span className="home-text100">Log in</span>
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="home-link22">
                        <div className="home-btn2">
                          <span className="home-text101">Sign up</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="home-container12">
                  <Script
                    html={` <script defer>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
                  ></Script>
                </div>
              </div>
            </header>
          </header>
          <div className="home-content10">
            <div className="home-content11">
              <h1 className="home-title1">
                <span className="home-text102">
                  Bukan sekedar platform digital.
                </span>
                <br className="home-text103"></br>
                <span className="home-text104">Tapi sebuah gerakan.</span>
                <br></br>
              </h1>
              <span className="home-caption1">
                DAMASTA lahir dari mimpi bersama - membangun masa depan digital
                yang adil, inklusif, dan penuh harapan bagi seluruh koperasi di
                Kota Bekasi khususnya dan seluruh Indonesia umumnya.DAMASTA
                bukan sekadar nama — ini adalah sebuah GERAKAN. Gerakan untuk
                membuka akses, memperluas peluang dan menciptakan kemakmuran
                bersama bagi seluruh koperasi di Kota Bekasi.
              </span>
              <div className="home-hero-buttons1">
                <div className="home-ios-btn1">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-zmzg.svg"
                    className="home-apple1"
                  />
                  <span className="home-caption2">Download for iOS</span>
                </div>
                <div className="home-android-btn1">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-ld65.svg"
                    className="home-android1"
                  />
                  <span className="home-caption3">Download for Android</span>
                </div>
              </div>
            </div>
            <div className="home-images">
              <div className="home-column1"></div>
              <img
                alt="pastedImage"
                src="/Damasta/klik-home-1500h.png"
                className="home-pasted-image1"
              />
              <div className="home-column2">
                <img
                  alt="pastedImage"
                  src="/Damasta/core-handphone-1500h.png"
                  className="home-pasted-image2"
                />
                <img
                  alt="pastedImage"
                  src="/Damasta/chat-1500h.png"
                  className="home-pasted-image3"
                />
              </div>
              <div className="home-column3">
                <img
                  alt="pastedImage"
                  src="/Damasta/pos-product-700w.png"
                  className="home-pasted-image4"
                />
                <img
                  alt="pastedImage"
                  src="/Damasta/core-tablet-1500h.png"
                  className="home-pasted-image5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-video1">
          <div className="home-content12">
            <div className="home-header1">
              <h2 className="home-text106">
                Built specifically for people who want faster transactions
              </h2>
            </div>
            <div className="home-video-container">
              <video
                src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
                loop
                muted
                poster="/pastedimage-v2-900w.png"
                autoPlay
                className="home-video2"
              ></video>
              <div className="home-heading-container">
                <div className="home-heading11">
                  <span className="home-text107">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text108">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="home-explore1">
                  <span className="home-text109">
                    Explore pricing plans -&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat1">
            <span className="home-caption4">200k</span>
            <span className="home-description1">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat2">
            <span className="home-caption5">$3,5 billions</span>
            <span className="home-description2">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat3">
            <span className="home-caption6">10.000 +</span>
            <span className="home-description3">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="home-sections1">
          <div className="home-section1">
            <div className="home-image2">
              <div className="home-image-highlight">
                <span className="home-text110">
                  <span>
                    always know your in and out
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-content13">
              <h2 className="home-text113">Everything you get with Finbest</h2>
              <Highlight
                text={
                  <Fragment>
                    <span className="home-text114">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliquat enim ad minim veniam, quis nostrud
                    </span>
                  </Fragment>
                }
                title="Lorem ipsum dolor sit amet, consectetur "
                description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
              ></Highlight>
              <Highlight
                text={
                  <Fragment>
                    <span className="home-text115">
                      Sed do eiusmod tempor incididunt ut labore et dolore
                    </span>
                  </Fragment>
                }
                title="Lorem ipsum dolor sit amet, consectetur "
                description="Sed do eiusmod tempor incididunt ut labore et dolore"
              ></Highlight>
              <div className="home-explore2">
                <span>Explore pricing plans -&gt;</span>
              </div>
            </div>
          </div>
          <div className="home-section2">
            <div className="home-content14">
              <div className="home-heading12">
                <h2 className="home-text117">
                  Keep track with all transactions
                </h2>
                <span className="home-text118">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-content15">
                <div className="home-points1">
                  <Point
                    text1={
                      <Fragment>
                        <span className="home-text119">
                          {' '}
                          5. Sinergi program-programnya.
                        </span>
                      </Fragment>
                    }
                  ></Point>
                  <Point
                    text="Quis nostrud exercitation ullamco"
                    text1={
                      <Fragment>
                        <span className="home-text120">
                          Quis nostrud exercitation ullamco
                        </span>
                      </Fragment>
                    }
                  ></Point>
                  <Point
                    text="Reprehenderit qui in ea voluptate velit"
                    text1={
                      <Fragment>
                        <span className="home-text121">
                          Reprehenderit qui in ea voluptate velit
                        </span>
                      </Fragment>
                    }
                  ></Point>
                </div>
                <Link href="/">
                  <a className="home-link23">
                    <div className="home-get-started1">
                      <span className="home-sign-up2">Get started now</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image3"></div>
          </div>
          <div className="home-section3">
            <div className="home-image4">
              <div className="home-image-overlay"></div>
            </div>
            <div className="home-content16">
              <h2 className="home-text122">
                <span>Create milestones</span>
                <br></br>
              </h2>
              <Accordion
                text={
                  <Fragment>
                    <span className="home-text125">
                      Nemo enim ipsam voluptatem quia voluptas
                    </span>
                  </Fragment>
                }
                text6={
                  <Fragment>
                    <span className="home-text126">
                      Aliquam quaerat voluptatem
                    </span>
                  </Fragment>
                }
              ></Accordion>
            </div>
          </div>
        </div>
        <div className="home-banner-container">
          <div className="home-banner">
            <div className="home-overlay1">
              <span className="home-text127">
                Mulai perjalanan koperasi Anda.
              </span>
              <div className="home-book-btn">
                <span className="home-text128">Hubungi kami</span>
              </div>
            </div>
            <img
              alt="pastedImage"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-pasted-image6"
            />
          </div>
        </div>
        <div className="home-header76 thq-section-padding">
          <div className="home-max-width1 thq-section-max-width">
            <div className="home-column4 thq-section-padding">
              <div className="home-content17">
                <h2 className="home-text129">
                  Solusi untuk pengurus, anggota dan unit usaha koperasi
                </h2>
                <Highlight
                  text={
                    <Fragment>
                      <span className="home-text130">
                        <span>
                          Sistem
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="home-text132">core banking</span>
                        <span>
                          {' '}
                          koperasi untuk pengurus dan pengawas untuk melakukan
                          pelayanan dan pengawasan koperasi. 
                        </span>
                      </span>
                    </Fragment>
                  }
                  title="Aplikasi JDpos"
                  description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
                ></Highlight>
                <Highlight
                  text={
                    <Fragment>
                      <span className="home-text134">
                        Aplikasi untuk unit usaha milik koperasi dan anggota,
                        terhubung secara real-time dengan JDpos dan ekosistem
                        lain.
                      </span>
                    </Fragment>
                  }
                  title="JDpos"
                  description="Sed do eiusmod tempor incididunt ut labore et dolore"
                ></Highlight>
                <div className="home-explore3">
                  <span>Explore pricing plans -&gt;</span>
                </div>
              </div>
            </div>
            <div className="home-content18">
              <div className="home-column-container1 thq-mask-image-vertical thq-animated-group-container-vertical">
                <div className="thq-animated-group-vertical">
                  <img
                    alt="Cooperative members embracing technology"
                    src="/Damasta/klik-bisnis-700w.png"
                    className="home-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members engaging in a meeting"
                    src="/Damasta/klik-transfer-700w.png"
                    className="home-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members discussing digital solutions"
                    src="/Damasta/klik-700w.png"
                    className="home-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
                  />
                </div>
                <div className="thq-animated-group-vertical">
                  <img
                    alt="Cooperative members embracing technology"
                    src="/Damasta/pos-home-600h.png"
                    className="home-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members engaging in a meeting"
                    src="/Damasta/pos-login-700w.png"
                    className="home-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members discussing digital solutions"
                    src="/Damasta/pos-product-700w.png"
                    className="home-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
                  />
                </div>
              </div>
              <div className="home-column-container2 thq-mask-image-vertical thq-animated-group-container-vertical">
                <div className="thq-animated-group-vertical-reverse">
                  <img
                    alt="Cooperative members collaborating on a project"
                    src="/Damasta/klik-home-1500h.png"
                    className="home-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members networking at an event"
                    src="/Damasta/klik-profile-700w.png"
                    className="home-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members strategizing for growth"
                    src="/Damasta/klik-bisnis-700w.png"
                    className="home-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
                  />
                </div>
                <div className="thq-animated-group-vertical-reverse">
                  <img
                    alt="Cooperative members collaborating on a project"
                    src="/Damasta/pos-home-600h.png"
                    className="home-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members networking at an event"
                    src="/Damasta/pos-login-700w.png"
                    className="home-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
                  />
                  <img
                    alt="Cooperative members strategizing for growth"
                    src="/Damasta/pos-product-700w.png"
                    className="home-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container14">
              <Script
                html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="home-header2">
            <div className="home-tag1">
              <span className="home-text136">Fitur &amp; Ekosistem</span>
            </div>
            <div className="home-heading13">
              <h2 className="home-text137">
                <span>Halo, </span>
                <span>Damasta!</span>
              </h2>
              <span className="home-text140">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
          </div>
          <div className="home-feature-list">
            <Feature
              title="Anggota"
              description="Informasi anggota dengan aplikasi web dan WhatsApp."
            ></Feature>
            <Feature
              title="Notifikasi"
              thumbnail="/vector6113-r6dl.svg"
              description="Otomatis ingatkan anggota atas kewajiban simpanan wajib dan tagihan-tagihan."
            ></Feature>
            <Feature
              title="Core banking"
              thumbnail="/vector6113-6zj.svg"
              description="Kelola anggota, transaksi dan laporan-laporan dalam satu aplikasi untuk pengurus."
            ></Feature>
            <Feature
              title="Pembiayaan"
              thumbnail="/vector6113-lvvs.svg"
              description="Mitra institusi keuangan berlisensi untuk membantu pemodalan koperasi."
            ></Feature>
            <Feature
              title="Transaksi real-time"
              thumbnail="/vector6114-cupp.svg"
              description="Transaksi dapat dimonitor langsung secara real-time."
            ></Feature>
            <Feature
              title="Sisa Hasil Usaha"
              thumbnail="/vector6114-6m1e.svg"
              description="Penghitungan dan pembagian SHU secara otomatis."
            ></Feature>
            <Feature
              title="Supply Chain"
              thumbnail="/vector6114-yjl.svg"
              description="Mitra supplier setingkat nasional, distributor dan agen."
            ></Feature>
          </div>
        </div>
        <div className="home-container15 thq-section-padding">
          <img
            alt="Cooperative members discussing digital solutions"
            src="/Damasta/core-laptop-1200w.png"
            className="home-image5 thq-img-ratio-16-9"
          />
          <div className="home-max-width2 thq-section-max-width">
            <div className="home-container16">
              <h2 className="home-title2 thq-heading-2">
                Welcome to KOPERASI DAMASTA ABHIPRAYA MANDIRI
              </h2>
              <h3 className="home-text141 thq-heading-3">
                Empowering cooperatives through digitalization and innovation
              </h3>
            </div>
            <button type="button" className="thq-button-filled">
              <span>Learn More</span>
            </button>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-logo-container">
            <img
              alt="pastedImage"
              src="/pastedimage-idcu.svg"
              className="home-logo"
            />
          </div>
          <div className="home-content19">
            <div id="quotes" className="home-quotes">
              <div className="quote active-quote">
                <Quote rootClassName="quoteroot-class-name"></Quote>
              </div>
              <div className="quote">
                <Quote
                  quote='"Testing these templates is a pleasure."'
                  title="Developer @ Vista La Vista"
                  author="Author 2"
                  rootClassName="quoteroot-class-name"
                ></Quote>
              </div>
              <div className="quote">
                <Quote
                  quote='"Wow, awesome works!'
                  title="Designer @ OhBoy"
                  rootClassName="quoteroot-class-name"
                ></Quote>
              </div>
            </div>
            <div className="home-buttons2">
              <div id="quote-before" className="home-left">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                </svg>
              </div>
              <div id="quote-next" className="home-right">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="home-container18">
                <Script
                  html={` <script>
    /* Quote Slider - Code Embed */

    let current = 1;

    const nextButton = document.querySelector("#quote-next");
    const previousButton = document.querySelector("#quote-before");
    const quotes = document.querySelectorAll(".quote");

    if (nextButton && previousButton && quotes) {
      nextButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == quotes.length ? (current = 1) : current++;
        quotes[current - 1].classList.add("active-quote");
      });

      previousButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == 1 ? (current = quotes.length) : current--;
        quotes[current - 1].classList.add("active-quote");
      });
    }
  </script>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div id="Program" className="home-program5-tahun">
          <div className="home-content20">
            <div className="home-header3">
              <div className="home-tag2">
                <span className="home-text143">
                  <span>Program</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading14">
                <h2 className="home-text146">Program 5 Tahun</h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column5">
                <Question
                  title={
                    <Fragment>
                      <span className="home-text147">
                        Digitalisasi Koperasi
                      </span>
                    </Fragment>
                  }
                  description={
                    <Fragment>
                      <span className="home-description4">
                        <span>
                          Bantuan teknologi untuk pelayanan, administrasi,
                          pelaporan dan penerapan standar koperasi dengan
                          teknologi informasi yang mencakup sistem pengelolaan
                          (back end) dan sistem antar muka/user interface (front
                          end) untuk koperasi melayani anggotanya. Platform
                          Damasta adalah platform koperasi yang disediakan dan
                          dikembangkan secara khusus oleh
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="home-text149">
                          PT Sinergitas Untuk Negeri
                        </span>
                        <span>
                          {' '}
                          dengan basis platform Jurnal Digital untuk jaringan
                          Koperasi Damasta Abhipraya Mandiri (Skd).
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Platform Damasta inklusif, inovatif, dan menerapkan
                          praktek bisnis terbaik (kami menempatkan koperasi
                          sebagai mitra bukan vendor), biaya terjangkau dan
                          mudah dikustomisasi dan dikonfigurasi. Selain itu
                          proses migrasi data yang sangat simpel dan cepat.
                          Dapat dioperasikan oleh siapa saja, dimana saja, kapan
                          saja.
                        </span>
                        <br></br>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  }
                ></Question>
                <Question
                  title={
                    <Fragment>
                      <span className="home-text156">Pembiayaan</span>
                    </Fragment>
                  }
                  description={
                    <Fragment>
                      <span className="home-description5">
                        <span>
                          Adalah program bantuan finansial berupa pembinaan,
                          pengembangan dan peningkatan kapasitas Koperasi
                          Peserta Apex dalam bentuk pembiayaan atau pinjaman
                          atau inter lending atau bantuan likuiditas penempatan
                          dana untuk disalurkan kepada anggota koperasi DAM
                          dengan memenuhi standar operasi yang ditetapkan. Untuk
                          program ini, Koperasi DAM bekerja sama dengan beberapa
                          lembaga keuangan, antara lain BPRS Patriot Kota Bekasi
                          dan Koperasi-koperasi besar Kota Bekasi
                        </span>
                        <br></br>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  }
                ></Question>
                <Question
                  title={
                    <Fragment>
                      <span className="home-text160">
                        Logistik dan Distribusi
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  }
                  description={
                    <Fragment>
                      <span className="home-description6">
                        <span>
                          Adalah suatu program pengadaan, penyaluran,
                          perdagangan dan penyimpanan suatu produk dengan
                          pemanfaatan jaringan distribusi yang lebih efisien
                          yang diwujudkan dalam perdagangan secara digital atau
                          ecommerce sehingga dapat disalurkan kepada anggota
                          koperasi dengan jenis, jumlah dan harga yang
                          kompetitif sehingga barang atau jasa tersebut sampai
                          ke konsumen
                        </span>
                        <br></br>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  }
                ></Question>
                <Question
                  title={
                    <Fragment>
                      <span className="home-text164">
                        Pendampingan dan Penguatan Kelembagaan Koperasi dan UMKM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  }
                  description={
                    <Fragment>
                      <span className="home-description7">
                        <span>
                          Dalam menjalankan fungsi Apex, Koperasi DAM turut
                          membantu terselenggaranya kegiatan-kegiatan yang
                          berkaitan dengan kebutuhan jaringan peserta apex.
                          Misalkan kegiatan pelatihan dan pengembangan
                          keterampilan bagi perangkat organisasi koperasi
                          ataupun bagi anggota koperasi primer. Untuk
                          menjalankan kegiatan ini, tidak semua koperasi
                          memiliki kapabilitas dari sisi pendanaan dan
                          kompetensi, maka koperasi perlu bersama-sama dengan
                          koperasi lain yang ada dalam jaringan peserta apex
                          untuk melaksanakannya. Koperasi DAM bekerja sama
                          dengan LSP Dekopin dapat melaksanakan pendidikan,
                          pelatihan dan uji kompetensi (bersertifikasi BNSP)
                          bagi pengurus, pengawas, dan manajer koperasi.
                          Koperasi DAM juga sedang mempersiapkan Team Inkubasi
                          yang dapat membantu lahirnya wirausaha-wirausaha yang
                          tangguh dan berdaya saing melalui PROGRAM INKUBASI.
                          Begitu halnya dengan kegiatan lainnya yang bisa
                          difasilitasi melalui program ini antara lain
                          pelaksanaan bazaar UMKM, pembuatan filler atau video
                          pendek (rumah produksi / PH), podcast dan event-event
                          lainnya yang melibatkan massa.
                        </span>
                        <br></br>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  }
                ></Question>
              </div>
              <div className="home-column6">
                <Question
                  title={
                    <Fragment>
                      <span className="home-text168">
                        Program Perlindungan Sosial Ketenagakerjaan
                      </span>
                    </Fragment>
                  }
                  description={
                    <Fragment>
                      <span className="home-description8">
                        <span>
                          Koperasi DAM adalah salah satu Lembaga yang ditunjuk
                          sebagai Wadah/Kantor perisai BPJS Ketenagakerjaan
                          sejak tahun 2021. Lembaga ini membantu dalam
                          penyelenggaraan program Jaminan Sosial Ketenagakerjaan
                          baik di jaringan Koperasi seluruh Kota Bekasi, maupun
                          masyarakat umum. Organisasi ini bertugas sebagai
                          koordinator dari para agen Perisai (Penggerak Jaminan
                          Sosial Indonesia) BPJS Ketenagakerjaan melalui
                          Perjanjian Kerjasama (PKS) yang sudah disepakti
                          bersama. Kantor/Wadah Perisai juga bertugas memastikan
                          agar seluruh perkerja Indonesia, khususnya pekerja
                          informal (Bukan Penerima Upah/BPU) dalam komunitas
                          gerakan koperasi dapat segera memperoleh akses jaminan
                          sosial, yaitu Jaminan Kecelakaan Kerja (JKK), Jaminan
                          Kematian (JKM) dan Jaminan Hari Tua (JHT). Koperasi
                          DAM bersama Dekopinda Kota Bekasi juga turut
                          mensosialisasikan kepesertaan BPJS Ketenagakerjaan di
                          kalangan Pengurus dan Pengawas serta Karyawan
                          Koperasi-koperasi di Kota Bekasi sebagai peserta PU
                          (Penerima Upah). Hingga saat ini kami dibantu oleh 14
                          orang agen Perisai aktif.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          JAMINAN KECELAKAAN KERJA (JKK) | JAMINAN KEMATIAN
                          (JKM) | JAMINAN HARI TUA
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  }
                ></Question>
                <Question
                  title={
                    <Fragment>
                      <span className="home-text175">Bisnis Sektor Riil</span>
                    </Fragment>
                  }
                  description={
                    <Fragment>
                      <span className="home-description9">
                        <span>
                          Dalam menjalankan fungsi Apex, Koperasi DAM turut
                          membantu terselenggaranya kegiatan-kegiatan yang
                          berkaitan dengan kebutuhan jaringan peserta apex.
                          Misalkan kegiatan pelatihan dan pengembangan
                          keterampilan bagi perangkat organisasi koperasi
                          ataupun bagi anggota koperasi primer. Untuk
                          menjalankan kegiatan ini, tidak semua koperasi
                          memiliki kapabilitas dari sisi pendanaan dan
                          kompetensi, maka koperasi perlu bersama-sama dengan
                          koperasi lain yang ada dalam jaringan peserta apex
                          untuk melaksanakannya. Koperasi DAM bekerja sama
                          dengan LSP Dekopin dapat melaksanakan pendidikan,
                          pelatihan dan uji kompetensi (bersertifikasi BNSP)
                          bagi pengurus, pengawas, dan manajer koperasi.
                          Koperasi DAM juga sedang mempersiapkan Team Inkubasi
                          yang dapat membantu lahirnya wirausaha-wirausaha yang
                          tangguh dan berdaya saing melalui PROGRAM INKUBASI.
                          Begitu halnya dengan kegiatan lainnya yang bisa
                          difasilitasi melalui program ini antara lain
                          pelaksanaan bazaar UMKM, pembuatan filler atau video
                          pendek (rumah produksi / PH), podcast dan event-event
                          lainnya yang melibatkan massa.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  }
                ></Question>
              </div>
            </div>
          </div>
        </div>
        <div className="home-roadmap">
          <div className="home-content21">
            <div className="home-header4">
              <div className="home-tag3">
                <span className="home-text179">Roadmap</span>
              </div>
              <div className="home-heading15">
                <h2 className="home-text180">
                  <span>Rencana Bisnis</span>
                  <br></br>
                  <span>2025-2026 </span>
                </h2>
              </div>
            </div>
            <div className="home-pricing-plans">
              <div className="home-plans1">
                <div className="home-plan1">
                  <div className="home-top2">
                    <div className="home-heading16">
                      <span className="home-text184">Semester I - 2025</span>
                      <span className="home-text185">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost1">
                      <span className="home-text186">Free</span>
                    </div>
                  </div>
                  <div className="home-bottom1">
                    <div className="home-check-list10">
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text187">
                              Penguatan infrastuktur Pemodalan dan Operasional
                              Koperasi DAM.
                            </span>
                          </Fragment>
                        }
                        feature="Penguatan infrastuktur Pemodalan dan Operasinal Koperasi DAM"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text188">
                              Perencanaan dan Pengembangan IT Core System
                              (platform digital Damasta) sebagai pendukung
                              utama, bekerjasama dengan PT Sinergitas Untuk
                              Negeri.
                            </span>
                          </Fragment>
                        }
                        feature="Perencanaan dan Pengembangan IT Core System (Platform Digital Damasta) sebagai pendukung utama, bekerjasama dengan PT Sinergitas Untuk Negeri"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text189">
                              <span>Penyusunan program prioritas DAM.</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Voluptas sit aspernatur aut odit"
                      ></Check>
                    </div>
                    <div className="home-button11">
                      <span className="home-text192">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan2">
                  <div className="home-top3">
                    <div className="home-heading17">
                      <span className="home-text193">Semester II - 2025</span>
                      <span className="home-text194">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost2">
                      <span className="home-text195">$8</span>
                      <span className="home-text196">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom2">
                    <div className="home-check-list11">
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text197">
                              <span>
                                Penguatan Infrastruktur Lembaga Pendukung.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text200">
                              <span>
                                Sosialisasi Program kepada Calon Anggota dan
                                Mitra.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Quis nostrud exercitation ulla"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text203">
                              <span>
                                Fasilitasi Non Keuangan kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Duis aute irure dolor intuit"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text206">
                              <span>Fasilitasi Pembiayaan.</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Voluptas sit aspernatur aut odit"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text209">
                              <span>
                                Fasilitasi Distribusi Barang dan Jasa.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Corporis suscipit laboriosam"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text212">
                              <span>
                                Pendampingan Teknis dan Inkubasi kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Corporis suscipit laboriosam"
                      ></Check>
                    </div>
                    <div className="home-button12">
                      <span className="home-text215">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan3">
                  <div className="home-top4">
                    <div className="home-heading18">
                      <span className="home-text216">Semester II - 2025</span>
                      <span className="home-text217">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost3">
                      <span className="home-text218">$8</span>
                      <span className="home-text219">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom3">
                    <div className="home-check-list12">
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text220">
                              <span>
                                Penguatan Infrastruktur Lembaga Pendukung.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text223">
                              <span>
                                Sosialisasi Program kepada Calon Anggota dan
                                Mitra.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Quis nostrud exercitation ulla"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text226">
                              <span>
                                Fasilitasi Non Keuangan kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Duis aute irure dolor intuit"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text229">
                              <span>Fasilitasi Pembiayaan.</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Voluptas sit aspernatur aut odit"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text232">
                              <span>
                                Fasilitasi Distribusi Barang dan Jasa.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Corporis suscipit laboriosam"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text235">
                              <span>
                                Pendampingan Teknis dan Inkubasi kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Corporis suscipit laboriosam"
                      ></Check>
                    </div>
                    <div className="home-button13">
                      <span className="home-text238">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan4">
                  <div className="home-top5">
                    <div className="home-heading19">
                      <span className="home-text239">Semester II - 2026</span>
                      <span className="home-text240">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost4">
                      <span className="home-text241">$16</span>
                      <span className="home-text242">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom4">
                    <div className="home-check-list13">
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text243">
                              <span>
                                Fasilitasi dan Koordinasi Pembiayaan, Distribusi
                                Barang dan Jasa, Peningkatan SDM melalui
                                Sertifikasi Kompetensi.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text246">
                              <span>
                                Perencanaan dan Persiapan Bisnis Sektor Riil
                                melibatkan jaringan Apex, memanfaatkan lahan
                                seluas 1 hektar di Cikalong Kulon, Cianjur.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Quis nostrud exercitation ulla"
                      ></Check>
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text249">
                              <span>
                                Menjadi Pilot Project Apex Koperasi di
                                Indonesia.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        feature="Duis aute irure dolor intuit"
                      ></Check>
                    </div>
                    <div className="home-button14">
                      <span className="home-text252">Get Standard</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-expand1">
                <div className="home-overlay2">
                  <div className="home-header5">
                    <div className="home-heading20">
                      <span className="home-text253">Expand</span>
                      <span className="home-text254">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </div>
                    <div className="home-check-list14">
                      <div className="home-check1">
                        <svg viewBox="0 0 1024 1024" className="home-icon16">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text255">
                          Sed ut perspiciatis unde
                        </span>
                      </div>
                      <div className="home-check2">
                        <svg viewBox="0 0 1024 1024" className="home-icon18">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text256">
                          Quis nostrud exercitation ulla
                        </span>
                      </div>
                      <div className="home-check3">
                        <svg viewBox="0 0 1024 1024" className="home-icon20">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text257">
                          Duis aute irure dolor intuit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-button15">
                    <span className="home-text258">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-plans2">
              <div className="home-plan5">
                <div className="home-top6">
                  <div className="home-heading21">
                    <span className="home-text261">Semester I - 2025</span>
                    <span className="home-text262">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost5">
                    <span className="home-text263">Free</span>
                  </div>
                </div>
                <div className="home-bottom5">
                  <div className="home-check-list15">
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text264">
                            Penguatan infrastuktur Pemodalan dan Operasional
                            Koperasi DAM.
                          </span>
                        </Fragment>
                      }
                      feature="Penguatan infrastuktur Pemodalan dan Operasinal Koperasi DAM"
                      rootClassName="checkroot-class-name2"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text265">
                            Perencanaan dan Pengembangan IT Core System
                            (platform digital Damasta) sebagai pendukung utama,
                            bekerjasama dengan PT Sinergitas Untuk Negeri.
                          </span>
                        </Fragment>
                      }
                      feature="Perencanaan dan Pengembangan IT Core System (Platform Digital Damasta) sebagai pendukung utama, bekerjasama dengan PT Sinergitas Untuk Negeri"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text266">
                            <span>Penyusunan program prioritas DAM.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Voluptas sit aspernatur aut odit"
                    ></Check>
                  </div>
                  <div className="home-button16">
                    <span className="home-text269">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan6">
                <div className="home-top7">
                  <div className="home-heading22">
                    <span className="home-text270">Semester II - 2025</span>
                    <span className="home-text271">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost6">
                    <span className="home-text272">$8</span>
                    <span className="home-text273">/month</span>
                  </div>
                </div>
                <div className="home-bottom6">
                  <div className="home-check-list16">
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text274">
                            <span>
                              Penguatan Infrastruktur Lembaga Pendukung.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text277">
                            <span>
                              Sosialisasi Program kepada Calon Anggota dan
                              Mitra.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Quis nostrud exercitation ulla"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text280">
                            <span>Fasilitasi Non Keuangan kepada Anggota.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Duis aute irure dolor intuit"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text283">
                            <span>Fasilitasi Pembiayaan.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Voluptas sit aspernatur aut odit"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text286">
                            <span>Fasilitasi Distribusi Barang dan Jasa.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Corporis suscipit laboriosam"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text289">
                            <span>
                              Pendampingan Teknis dan Inkubasi kepada Anggota.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Corporis suscipit laboriosam"
                    ></Check>
                  </div>
                  <div className="home-button17">
                    <span className="home-text292">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan7">
                <div className="home-top8">
                  <div className="home-heading23">
                    <span className="home-text293">Semester II - 2025</span>
                    <span className="home-text294">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost7">
                    <span className="home-text295">$8</span>
                    <span className="home-text296">/month</span>
                  </div>
                </div>
                <div className="home-bottom7">
                  <div className="home-check-list17">
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text297">
                            <span>
                              Penguatan Infrastruktur Lembaga Pendukung.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text300">
                            <span>
                              Sosialisasi Program kepada Calon Anggota dan
                              Mitra.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Quis nostrud exercitation ulla"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text303">
                            <span>Fasilitasi Non Keuangan kepada Anggota.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Duis aute irure dolor intuit"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text306">
                            <span>Fasilitasi Pembiayaan.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Voluptas sit aspernatur aut odit"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text309">
                            <span>Fasilitasi Distribusi Barang dan Jasa.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Corporis suscipit laboriosam"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text312">
                            <span>
                              Pendampingan Teknis dan Inkubasi kepada Anggota.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Corporis suscipit laboriosam"
                    ></Check>
                  </div>
                  <div className="home-button18">
                    <span className="home-text315">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan8">
                <div className="home-top9">
                  <div className="home-heading24">
                    <span className="home-text316">Semester II - 2026</span>
                    <span className="home-text317">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost8">
                    <span className="home-text318">$16</span>
                    <span className="home-text319">/month</span>
                  </div>
                </div>
                <div className="home-bottom8">
                  <div className="home-check-list18">
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text320">
                            <span>
                              Fasilitasi dan Koordinasi : Pembiayaan, Distribusi
                              Barang dan Jasa, Peningkatan SDM melalui
                              Sertifikasi Kompetensi.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text323">
                            <span>
                              Perencanaan dan Persiapan Bisnis Sektor Riil
                              melibatkan jaringan Apex, memanfaatkan lahan
                              seluas 1 hektar di Cikalong Kulon, Cianjur.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Quis nostrud exercitation ulla"
                    ></Check>
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text326">
                            <span>
                              Menjadi Pilot Project Apex Koperasi di Indonesia.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      feature="Duis aute irure dolor intuit"
                    ></Check>
                  </div>
                  <div className="home-button19">
                    <span className="home-text329">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-expand2">
                <div className="home-overlay3">
                  <div className="home-header6">
                    <div className="home-heading25">
                      <span className="home-text330">Expand</span>
                      <span className="home-text331">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </div>
                    <div className="home-check-list19">
                      <div className="home-check4">
                        <svg viewBox="0 0 1024 1024" className="home-icon22">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text332">
                          Sed ut perspiciatis unde
                        </span>
                      </div>
                      <div className="home-check5">
                        <svg viewBox="0 0 1024 1024" className="home-icon24">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text333">
                          Quis nostrud exercitation ulla
                        </span>
                      </div>
                      <div className="home-check6">
                        <svg viewBox="0 0 1024 1024" className="home-icon26">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text334">
                          Duis aute irure dolor intuit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-button20">
                    <span className="home-text335">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-help">
            <span className="home-text338">Ingin membantu?</span>
            <div className="home-explore4">
              <a href="#Hubungi" className="home-link24">
                Bergabung dengan kami -&gt;
              </a>
            </div>
          </div>
        </div>
        <div className="home-container19">
          <div id="Syarat" className="home-sections2">
            <div className="home-section4">
              <div className="home-content22">
                <div className="home-heading26">
                  <h2 className="home-text339">Syarat Keanggotaan</h2>
                  <span className="home-text340">
                    Sesuai Pasal 10 AD Koperasi Damasta Abhipraya Mandiri (Skd),
                    Anggota Koperasi DAM adalah Koperasi Primer yang telah
                    berbadan Hukum, dan berdomisili di Kota Bekasi
                  </span>
                </div>
                <div className="home-content23">
                  <div className="home-points2">
                    <Point
                      text1={
                        <Fragment>
                          <span className="home-text341">
                            {' '}
                            Mengisi formulir pendaftaran sebagai anggota
                          </span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text=" Membayar Simpanan Pokok sebesar Rp.5.000.000 dan Simpanan Wajib minimal sebesar Rp.100.000 per bulan."
                      text1={
                        <Fragment>
                          <span className="home-text342">
                            {' '}
                            Membayar Simpanan Pokok sebesar Rp.5.000.000 dan
                            Simpanan Wajib minimal sebesar Rp.100.000 per bulan.
                          </span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text=" Berlangganan platform koperasi digital Damasta."
                      text1={
                        <Fragment>
                          <span className="home-text343">
                            {' '}
                            Berlangganan platform koperasi digital Damasta.
                          </span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text="  Menyetujui AD/ART serta peraturan-peraturan yang berlaku di Koperasi Damasta Abhipraya Mandiri (Skd)."
                      text1={
                        <Fragment>
                          <span className="home-text344">
                            {' '}
                            Menyetujui AD/ART serta peraturan-peraturan yang
                            berlaku di Koperasi Damasta Abhipraya Mandiri (Skd).
                          </span>
                        </Fragment>
                      }
                    ></Point>
                  </div>
                  <a
                    href="https://app.damastacoop.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link25"
                  >
                    <div className="home-get-started2">
                      <span className="home-sign-up3">Bergabung sekarang</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-image6"></div>
            </div>
            <div className="home-section5">
              <div className="home-content24">
                <div className="home-heading27">
                  <h2 className="home-text345">Syarat Kemitraan</h2>
                  <span className="home-text346">
                    Fungsi Apex DAM bertujuan untuk mewujudkan tata kelola
                    koperasi yang baik dan sehat, serta dapat menolong dirinya
                    sendiri. Kerja sama antar koperasi dan/dengan lembaga
                    lainnya yang memilikii visi yang sama, menjadi bagian
                    penting untuk koperasi ke depannya menjadi mandiri dan kokoh
                    dalam menghadapi dinamika ke depan.
                  </span>
                </div>
                <div className="home-content25">
                  <div className="home-points3">
                    <Point
                      text=" Organisasi atau Badan Usaha yang memiliki  legalitas yang jelas."
                      text1={
                        <Fragment>
                          <span className="home-text347">
                            {' '}
                            Organisasi atau Badan Usaha yang memiliki legalitas
                            yang jelas.
                          </span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text="   Mempunyai tujuan umum yang sama."
                      text1={
                        <Fragment>
                          <span className="home-text348">
                            {' '}
                            Mempunyai tujuan umum yang sama.
                          </span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text="   Kesetaraan."
                      text1={
                        <Fragment>
                          <span className="home-text349"> Kesetaraan.</span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text="     Saling menghargai dan saling memberi kontribusi."
                      text1={
                        <Fragment>
                          <span className="home-text350">
                            {' '}
                            Saling menghargai dan saling memberi kontribusi.
                          </span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text="       Sinergi program-programnya."
                      text1={
                        <Fragment>
                          <span className="home-text351">
                            {' '}
                            Sinergi program-programnya.
                          </span>
                        </Fragment>
                      }
                    ></Point>
                    <Point
                      text="       Saling menguntungkan."
                      text1={
                        <Fragment>
                          <span className="home-text352">
                            {' '}
                            Saling menguntungkan.
                          </span>
                        </Fragment>
                      }
                    ></Point>
                  </div>
                  <Link href="/">
                    <a className="home-link26">
                      <div className="home-get-started3">
                        <span className="home-sign-up4">
                          Bergabung sekarang
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Hubungi" className="home-get-started4">
          <div className="home-content26">
            <div className="home-heading28">
              <h2 className="home-text353">Jadi bagian gerakan ini!</h2>
              <span className="home-text354">
                Hubungi kami untuk mendapatkan informasi lebih lanjut.
              </span>
            </div>
            <div className="home-hero-buttons2">
              <a
                href="https://wa.me/6285179896939"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link27"
              >
                <div className="home-ios-btn2">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-zmzg.svg"
                    className="home-apple2"
                  />
                  <span className="home-caption7">Hubungi kami</span>
                </div>
              </a>
              <div className="home-android-btn2">
                <img
                  alt="pastedImage"
                  src="/pastedimage-ld65.svg"
                  className="home-android2"
                />
                <span className="home-caption8">Download for Android</span>
              </div>
            </div>
          </div>
        </div>
        <Footer
          text2={
            <Fragment>
              <span className="home-text355">
                <span>KOPERASI DAMASTA ABHIPRAYA MANDIRI (Skd)</span>
                <br></br>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text358">
                <span>Jl. Letnan Arsyad No. 23 RT006/012</span>
                <br></br>
                <span>Kel. Kayuringin Jaya</span>
                <br></br>
                <span>Kec. Bekasi Selatan, Kota Bekasi</span>
                <br></br>
                <span>Email : kop.DAM@gmail.com</span>
                <br></br>
              </span>
            </Fragment>
          }
          pastedImageSrc="/Damasta/logo-damasta-without-tagline-white-200h.png"
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            margin-bottom: 128px;
            flex-direction: column;
          }
          .home-heading10 {
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-notification {
            width: 100%;
          }
          .home-component10 {
            text-decoration: none;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .home-desktop {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link11 {
            display: contents;
          }
          .home-finbest {
            width: 148px;
            height: 37px;
            text-decoration: none;
          }
          .home-links1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: 12px;
            border-radius: 6px;
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
          }
          .home-link13 {
            display: none;
          }
          .home-link14 {
            text-decoration: none;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-quick-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-log-in {
            text-decoration: none;
          }
          .home-link16 {
            display: contents;
          }
          .home-sign-up-btn {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-sign-up-btn:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up1 {
            font-style: normal;
            font-weight: 500;
          }
          .home-hamburger-menu {
            width: 20px;
            height: 12px;
            display: none;
          }
          .home-mobile {
            gap: var(--dl-layout-space-fourunits);
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            z-index: 200;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-top1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 150px;
            object-fit: cover;
          }
          .home-icon10 {
            width: 28px;
            height: 28px;
          }
          .home-links2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link17 {
            text-decoration: none;
          }
          .home-link18 {
            text-decoration: none;
          }
          .home-link19 {
            text-decoration: none;
          }
          .home-link20 {
            text-decoration: none;
          }
          .home-buttons1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-link21 {
            display: contents;
          }
          .home-btn1 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-text100 {
            font-style: normal;
            font-weight: 500;
          }
          .home-link22 {
            display: contents;
          }
          .home-btn2 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-text101 {
            font-style: normal;
            font-weight: 500;
          }
          .home-container12 {
            display: contents;
          }
          .home-content10 {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 10;
            position: relative;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content11 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0.5;
            display: flex;
            z-index: 20;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .home-title1 {
            font-size: 64px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 76px;
          }
          .home-text102 {
            color: #ade2df;
          }
          .home-text103 {
            color: #ade2df;
          }
          .home-text104 {
            color: #124b80;
          }
          .home-caption1 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 27px;
          }
          .home-hero-buttons1 {
            gap: var(--dl-layout-space-unit);
            display: none;
            z-index: 15;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-ios-btn1 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-ios-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple1 {
            width: 16px;
            height: 20px;
          }
          .home-caption2 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-android-btn1 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-android-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-android1 {
            width: 18px;
            height: 20px;
          }
          .home-caption3 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-images {
            gap: var(--dl-layout-space-oneandhalfunits);
            right: -210px;
            bottom: 0px;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: rotate(-30deg);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image1 {
            width: 240px;
          }
          .home-column2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image2 {
            width: 240px;
          }
          .home-pasted-image3 {
            width: 240px;
          }
          .home-column3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image4 {
            width: 240px;
          }
          .home-pasted-image5 {
            width: 240px;
          }
          .home-video1 {
            color: white;
            width: 100%;
            display: none;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #000000;
          }
          .home-content12 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text106 {
            width: 640px;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-video-container {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-video2 {
            width: 100%;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s;
            border-color: rgba(0, 0, 0, 0);
            border-width: 2px;
          }
          .home-video2:hover {
            opacity: 0.5;
            border-color: #ade2df;
            border-width: 2px;
            border-radius: 8px;
          }
          .home-heading-container {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text107 {
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .home-text108 {
            color: #eaeaea;
            width: 600px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-explore1 {
            color: #fff;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore1:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .home-text109 {
            width: Size-XSmall;
          }
          .home-stats {
            width: 100%;
            display: none;
            z-index: 10;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-stat1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption4 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description1 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-caption5 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description2 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-left-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption6 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description3 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-sections1 {
            width: 100%;
            display: none;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-section1 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image2 {
            width: 400px;
            height: 540px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Damasta/pos-home-600h.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-highlight {
            top: 0px;
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #375ee0;
          }
          .home-text110 {
            color: rgb(193, 255, 252);
            width: 100%;
            max-width: 90px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-content13 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text113 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-explore2 {
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore2:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-section2 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-content14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text117 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text118 {
            font-size: 18px;
            max-width: 535px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-content15 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-link23 {
            display: contents;
          }
          .home-get-started1 {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-get-started1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up2 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image3 {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/group%201309.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-section3 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .home-image4 {
            width: 400px;
            height: 590px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/group%201281.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-overlay {
            right: 0px;
            width: 180px;
            bottom: 0px;
            height: 320px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/pastedimage-v31-400h.png');
          }
          .home-content16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            margin-top: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text122 {
            font-size: 40px;
            max-width: 640px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-banner-container {
            width: 100%;
            display: none;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-banner {
            width: 100%;
            height: 360px;
            display: flex;
            overflow: hidden;
            max-width: 1200px;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: #375ee0;
          }
          .home-overlay1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-size: cover;
            justify-content: center;
            background-image: url('/mask%20group.svg');
          }
          .home-text127 {
            color: rgb(193, 255, 252);
            width: 100%;
            font-size: 40px;
            max-width: 490px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-book-btn {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-book-btn:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text128 {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 490px;
            font-style: normal;
            font-weight: 500;
          }
          .home-pasted-image6 {
            display: none;
          }
          .home-header76 {
            display: none;
          }
          .home-max-width1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            animation-name: fadeInLeft;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-content17 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text129 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text132 {
            font-style: italic;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-explore3 {
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore3:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-content18 {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            height: 900px;
            display: flex;
          }
          .home-column-container1 {
            width: 50%;
          }
          .home-placeholder-image10 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image11 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image12 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image13 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image14 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image15 {
            width: 100%;
            height: 400px;
          }
          .home-column-container2 {
            width: 50%;
          }
          .home-placeholder-image16 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image17 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image18 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image19 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image20 {
            width: 100%;
            height: 400px;
          }
          .home-placeholder-image21 {
            width: 100%;
            height: 400px;
          }
          .home-container14 {
            display: contents;
          }
          .home-features {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: flex-start;
          }
          .home-header2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag1 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text136 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text137 {
            width: 100%;
            font-size: 40px;
            max-width: 400px;
            font-style: normal;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text140 {
            width: 100%;
            display: none;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-feature-list {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container15 {
            gap: var(--dl-layout-space-unit);
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-image5 {
            width: auto;
            height: auto;
            display: block;
            max-width: 80%;
          }
          .home-max-width2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: none;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-container16 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-title2 {
            text-align: center;
          }
          .home-text141 {
            text-align: center;
          }
          .home-testimonials {
            width: 100%;
            display: none;
            max-width: 900px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-logo-container {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: center;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            margin-bottom: var(--dl-layout-space-threeunits);
            flex-direction: column;
            background-color: #375ee0;
          }
          .home-logo {
            width: 25px;
            height: 24px;
          }
          .home-content19 {
            display: flex;
            position: relative;
            align-items: stretch;
            flex-direction: column;
          }
          .home-quotes {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-buttons2 {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 500px;
            align-self: center;
            margin-top: -55px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left {
            fill: #dbdbdb;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
          }
          .home-left:hover {
            fill: #000;
            border-color: #000;
          }
          .home-icon12 {
            width: 19px;
            height: 19px;
          }
          .home-right {
            fill: #dbdbdb;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
          }
          .home-right:hover {
            fill: #000;
            border-color: #000;
          }
          .home-icon14 {
            width: 19px;
            height: 19px;
          }
          .home-container18 {
            display: contents;
          }
          .home-program5-tahun {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content20 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag2 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text143 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text146 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 56px;
          }
          .home-rows {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column5 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-description4 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text149 {
            font-weight: 700;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-description5 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-description6 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-description7 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-column6 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-description8 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-description9 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-roadmap {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content21 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag3 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text179 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text180 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 56px;
          }
          .home-pricing-plans {
            flex: 1;
            width: 100%;
            display: grid;
            overflow: hidden;
            align-items: flex-start;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #375ee0;
            grid-template-columns: auto auto;
          }
          .home-plans1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: grid;
            overflow: hidden;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: TwoUnits;
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #ffffff;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-plan1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 20%;
            min-width: 260px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-right-width: 1px;
          }
          .home-top2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text184 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text185 {
            display: none;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .home-cost1 {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text186 {
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 40px;
          }
          .home-bottom1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list10 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-button11 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button11:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text192 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan2 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 20%;
            min-width: 260px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text193 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text194 {
            display: none;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: none;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text195 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text196 {
            font-family: Poppins;
          }
          .home-bottom2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list11 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-button12 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button12:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text215 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan3 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 20%;
            min-width: 260px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text216 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text217 {
            display: none;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: none;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text218 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text219 {
            font-family: Poppins;
          }
          .home-bottom3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list12 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text220 {
            display: inline-block;
          }
          .home-text223 {
            display: inline-block;
          }
          .home-text226 {
            display: inline-block;
          }
          .home-text229 {
            display: inline-block;
          }
          .home-text232 {
            display: inline-block;
          }
          .home-text235 {
            display: inline-block;
          }
          .home-button13 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button13:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text238 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan4 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 20%;
            min-width: 260px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-top5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text239 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text240 {
            display: none;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost4 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: none;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text241 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text242 {
            font-family: Poppins;
          }
          .home-bottom4 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list13 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text243 {
            display: inline-block;
          }
          .home-text246 {
            display: inline-block;
          }
          .home-text249 {
            display: inline-block;
          }
          .home-button14 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button14:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text252 {
            font-style: normal;
            font-weight: 500;
          }
          .home-expand1 {
            flex: 0.3;
            height: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-overlay2 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/planbackground.svg');
          }
          .home-header5 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading20 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text253 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text254 {
            color: #c1fffc;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list14 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon16 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text255 {
            color: #ffffff;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon18 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text256 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon20 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text257 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-button15 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-button15:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text258 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 500;
          }
          .home-plans2 {
            width: 100%;
            height: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
          }
          .home-plan5 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-right-width: 1px;
          }
          .home-top6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text261 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text262 {
            display: none;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .home-cost5 {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text263 {
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 40px;
          }
          .home-bottom5 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list15 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text264 {
            display: inline-block;
          }
          .home-text265 {
            display: inline-block;
          }
          .home-text266 {
            display: inline-block;
          }
          .home-button16 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button16:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text269 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan6 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text270 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text271 {
            display: none;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: none;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text272 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text273 {
            font-family: Poppins;
          }
          .home-bottom6 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list16 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text274 {
            display: inline-block;
          }
          .home-text277 {
            display: inline-block;
          }
          .home-text280 {
            display: inline-block;
          }
          .home-text283 {
            display: inline-block;
          }
          .home-text286 {
            display: inline-block;
          }
          .home-text289 {
            display: inline-block;
          }
          .home-button17 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button17:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text292 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan7 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text293 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text294 {
            display: none;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost7 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: none;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text295 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text296 {
            font-family: Poppins;
          }
          .home-bottom7 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list17 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text297 {
            display: inline-block;
          }
          .home-text300 {
            display: inline-block;
          }
          .home-text303 {
            display: inline-block;
          }
          .home-text306 {
            display: inline-block;
          }
          .home-text309 {
            display: inline-block;
          }
          .home-text312 {
            display: inline-block;
          }
          .home-button18 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button18:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text315 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan8 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top9 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text316 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text317 {
            display: none;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost8 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: none;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text318 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text319 {
            font-family: Poppins;
          }
          .home-bottom8 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list18 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text320 {
            display: inline-block;
          }
          .home-text323 {
            display: inline-block;
          }
          .home-text326 {
            display: inline-block;
          }
          .home-button19 {
            width: 100%;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button19:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text329 {
            font-style: normal;
            font-weight: 500;
          }
          .home-expand2 {
            flex: 0.3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-overlay3 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/planbackground.svg');
          }
          .home-header6 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading25 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text330 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text331 {
            color: #c1fffc;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list19 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon22 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text332 {
            color: #ffffff;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check5 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon24 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text333 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check6 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon26 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text334 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-button20 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-button20:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text335 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 500;
          }
          .home-help {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: row;
          }
          .home-text338 {
            font-family: 'Poppins';
          }
          .home-explore4 {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore4:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-link24 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-container19 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f3f5fa;
          }
          .home-sections2 {
            width: 100%;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-section4 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-content22 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text339 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text340 {
            font-size: 18px;
            max-width: 535px;
            font-family: 'Poppins';
            line-height: 27px;
          }
          .home-content23 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text341 {
            display: inline-block;
          }
          .home-text342 {
            display: inline-block;
          }
          .home-text343 {
            display: inline-block;
          }
          .home-text344 {
            display: inline-block;
          }
          .home-link25 {
            display: contents;
          }
          .home-get-started2 {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-get-started2:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up3 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image6 {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/Damasta/core-tablet-1500h.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-section5 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-content24 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text345 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text346 {
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 27px;
          }
          .home-content25 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text347 {
            display: inline-block;
          }
          .home-text348 {
            display: inline-block;
          }
          .home-text349 {
            display: inline-block;
          }
          .home-text350 {
            display: inline-block;
          }
          .home-text351 {
            display: inline-block;
          }
          .home-text352 {
            display: inline-block;
          }
          .home-link26 {
            display: contents;
          }
          .home-get-started3 {
            display: none;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-get-started3:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up4 {
            font-style: normal;
            font-weight: 500;
          }
          .home-get-started4 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #375ee0;
          }
          .home-content26 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text353 {
            color: rgb(193, 255, 252);
            font-size: 64px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text354 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            text-align: center;
            font-family: 'Poppins';
            line-height: 30px;
          }
          .home-hero-buttons2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            z-index: 15;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link27 {
            display: contents;
          }
          .home-ios-btn2 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #000000;
          }
          .home-ios-btn2:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple2 {
            width: 16px;
            height: 20px;
            display: none;
          }
          .home-caption7 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-android-btn2 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-android-btn2:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-android2 {
            width: 18px;
            height: 20px;
          }
          .home-caption8 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-text355 {
            display: inline-block;
          }
          .home-text358 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-navbar {
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-links1 {
              display: none;
            }
            .home-log-in {
              display: none;
            }
            .home-sign-up-btn {
              display: none;
            }
            .home-hamburger-menu {
              display: flex;
            }
            .home-content10 {
              flex-direction: column;
            }
            .home-content11 {
              gap: var(--dl-layout-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: 0px;
            }
            .home-title1 {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-text102 {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-caption1 {
              font-size: 16px;
            }
            .home-hero-buttons1 {
              width: 100%;
            }
            .home-ios-btn1 {
              flex: 1;
            }
            .home-android-btn1 {
              flex: 1;
            }
            .home-images {
              left: 0px;
              right: -100px;
              bottom: -325px;
              margin: auto;
            }
            .home-pasted-image1 {
              width: 200px;
            }
            .home-pasted-image2 {
              width: 200px;
            }
            .home-pasted-image3 {
              width: 321px;
            }
            .home-pasted-image4 {
              width: 200px;
            }
            .home-pasted-image5 {
              width: 200px;
            }
            .home-content12 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-stats {
              padding-top: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .home-stat1 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-layout-space-threeunits);
              border-right-width: 0px;
            }
            .home-caption4 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat2 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-caption5 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat3 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              border-left-width: 0px;
            }
            .home-caption6 {
              text-align: center;
              line-height: 32px;
            }
            .home-section1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: column-reverse;
            }
            .home-content13 {
              gap: var(--dl-layout-space-unit);
            }
            .home-explore2 {
              margin-top: var(--dl-layout-space-halfunit);
            }
            .home-section2 {
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content14 {
              gap: var(--dl-layout-space-unit);
            }
            .home-content15 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-section3 {
              align-items: center;
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-layout-space-fourunits);
              border-top-width: 1px;
            }
            .home-content16 {
              margin-top: 0px;
            }
            .home-max-width1 {
              flex-direction: column;
            }
            .home-column4 {
              width: 100%;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-content17 {
              gap: var(--dl-layout-space-unit);
            }
            .home-explore3 {
              margin-top: var(--dl-layout-space-halfunit);
            }
            .home-content18 {
              width: 100%;
              height: 100vh;
              justify-content: center;
            }
            .home-roadmap {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content21 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header4 {
              gap: var(--dl-layout-space-unit);
            }
            .home-pricing-plans {
              grid-template-columns: none;
            }
            .home-plans1 {
              overflow: auto;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-overlay2 {
              width: 100%;
              background-size: contain;
              justify-content: space-between;
              background-repeat: no-repeat;
              background-position: right;
            }
            .home-header5 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading20 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 600px;
            }
            .home-text253 {
              font-size: 18px;
            }
            .home-text254 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text255 {
              line-height: 21px;
            }
            .home-text256 {
              line-height: 21px;
            }
            .home-text257 {
              line-height: 21px;
            }
            .home-button15 {
              margin-top: var(--dl-layout-space-threeunits);
            }
            .home-overlay3 {
              width: 100%;
              justify-content: space-between;
            }
            .home-header6 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading25 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 600px;
            }
            .home-text330 {
              font-size: 18px;
            }
            .home-text331 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text332 {
              line-height: 21px;
            }
            .home-text333 {
              line-height: 21px;
            }
            .home-text334 {
              line-height: 21px;
            }
            .home-button20 {
              margin-top: var(--dl-layout-space-threeunits);
            }
            .home-section4 {
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: column;
            }
            .home-content22 {
              gap: var(--dl-layout-space-unit);
              max-width: 560px;
            }
            .home-content23 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-section5 {
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: column;
            }
            .home-content24 {
              gap: var(--dl-layout-space-unit);
              max-width: 560px;
            }
            .home-content25 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-get-started4 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content26 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading28 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text353 {
              font-size: 40px;
            }
            .home-text354 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              align-items: center;
            }
            .home-mobile {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-title1 {
              font-size: 40px;
              line-height: 48px;
            }
            .home-text102 {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-images {
              bottom: -250px;
            }
            .home-text106 {
              width: 100%;
              font-size: 32px;
              max-width: 640px;
            }
            .home-video-container {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-heading11 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text107 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-text108 {
              width: 100%;
              max-width: 600px;
            }
            .home-caption4 {
              font-size: 32px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption5 {
              font-size: 32px;
            }
            .home-description2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption6 {
              font-size: 32px;
            }
            .home-description3 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text113 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text117 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text118 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started1 {
              display: none;
            }
            .home-section3 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-banner {
              height: 520px;
              position: relative;
            }
            .home-overlay1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex: 1;
              z-index: 50;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
              background-image: none;
            }
            .home-text127 {
              font-size: 32px;
            }
            .home-pasted-image6 {
              right: 0px;
              bottom: 0px;
              height: 300px;
              display: flex;
              position: absolute;
              align-self: flex-end;
            }
            .home-column4 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text129 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-features {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text136 {
              font-size: 14px;
            }
            .home-text137 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text140 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-feature-list {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: column;
            }
            .home-container15 {
              height: auto;
            }
            .home-image5 {
              height: auto;
            }
            .home-testimonials {
              width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-logo-container {
              padding: 12px;
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-logo {
              width: 16px;
              height: 16px;
            }
            .home-left {
              display: flex;
            }
            .home-right {
              display: flex;
            }
            .home-program5-tahun {
              width: 100%;
            }
            .home-content20 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-text143 {
              font-size: 14px;
            }
            .home-text146 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-rows {
              flex-direction: column;
            }
            .home-text180 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-plans1 {
              display: none;
              place-items: center;
            }
            .home-top2 {
              padding-top: var(--dl-layout-space-twounits);
            }
            .home-check-list10 {
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-top3 {
              padding-top: var(--dl-layout-space-twounits);
            }
            .home-check-list11 {
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-top4 {
              padding-top: var(--dl-layout-space-twounits);
            }
            .home-check-list12 {
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-top5 {
              padding-top: var(--dl-layout-space-twounits);
            }
            .home-plans2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              display: flex;
            }
            .home-plan5 {
              max-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              background-color: #ffffff;
            }
            .home-top6 {
              width: 100%;
            }
            .home-check-list15 {
              padding-bottom: 0px;
            }
            .home-plan6 {
              max-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top7 {
              width: 100%;
            }
            .home-check-list16 {
              padding-bottom: 0px;
            }
            .home-plan7 {
              max-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top8 {
              width: 100%;
            }
            .home-check-list17 {
              padding-bottom: 0px;
            }
            .home-plan8 {
              max-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top9 {
              width: 100%;
            }
            .home-check-list18 {
              padding-bottom: 0px;
            }
            .home-expand2 {
              flex: 0 0 auto;
              width: 100%;
              display: none;
              border-radius: 16px;
              background-color: #375ee0;
            }
            .home-overlay3 {
              align-items: center;
              background-size: contain;
              justify-content: center;
              background-repeat: no-repeat;
              background-position: top right;
            }
            .home-text339 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text340 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started2 {
              display: none;
            }
            .home-text345 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text346 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started3 {
              display: none;
            }
            .home-get-started4 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-hero-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-ios-btn1 {
              width: 100%;
            }
            .home-android-btn1 {
              width: 100%;
            }
            .home-images {
              bottom: -300px;
            }
            .home-pasted-image1 {
              width: 150px;
            }
            .home-pasted-image2 {
              width: 150px;
            }
            .home-pasted-image3 {
              width: 150px;
            }
            .home-pasted-image4 {
              width: 150px;
            }
            .home-pasted-image5 {
              width: 150px;
            }
            .home-image2 {
              width: 100%;
              max-width: 400px;
            }
            .home-image4 {
              width: 100%;
              max-width: 400px;
            }
            .home-pasted-image6 {
              height: 225px;
            }
            .home-column4 {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-buttons2 {
              margin-top: -40px;
            }
            .home-left {
              padding: var(--dl-layout-space-halfunit);
            }
            .home-right {
              padding: var(--dl-layout-space-halfunit);
            }
            .home-text180 {
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 44px;
            }
            .home-help {
              align-items: center;
              padding-top: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-hero-buttons2 {
              width: 100%;
              flex-direction: column;
            }
            .home-ios-btn2 {
              width: 100%;
            }
            .home-android-btn2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
