import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
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
      <div className="home-container1">
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
            <Navbar
              imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              brandingSrc="/Damasta/logo-damasta-without-tagline-200h.png"
              link1="Tentang Kami"
              link2="Program"
              link3="Persyaratan"
            ></Navbar>
          </header>
          <div className="home-content10">
            <div className="home-content11">
              <h1 className="home-title">
                <span className="home-text100">
                  Bukan sekedar platform digital.
                </span>
                <br className="home-text101"></br>
                <span className="home-text102">Tapi sebuah gerakan.</span>
                <br></br>
              </h1>
              <span className="home-caption1">
                <span className="home-text104">
                  DAMASTA lahir dari mimpi bersama - membangun masa depan
                  digital yang adil, inklusif, dan penuh harapan bagi seluruh
                  koperasi di Kota Bekasi khususnya dan seluruh Indonesia
                  umumnya.
                </span>
                <br></br>
                <br></br>
                <span>
                  DAMASTA bukan sekadar nama — ini adalah sebuah GERAKAN.
                  Gerakan untuk membuka akses, memperluas peluang dan
                  menciptakan kemakmuran bersama bagi
                </span>
                <br></br>
                <span>seluruh koperasi di Kota Bekasi.</span>
                <br></br>
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
              <div className="home-column1">
                <img
                  alt="pastedImage"
                  src="/Damasta/klik-home-1500h.png"
                  className="home-pasted-image1"
                />
              </div>
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
                  src="/Damasta/logo-damasta-square-1500h.png"
                  className="home-pasted-image4"
                />
                <img
                  alt="pastedImage"
                  src="/pastedimage-06e.svg"
                  className="home-pasted-image5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-video1">
          <div className="home-content12">
            <div className="home-header1">
              <h2 className="home-text111">
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
                  <span className="home-text112">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text113">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="home-explore1">
                  <span className="home-text114">
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
            <div className="home-image1">
              <div className="home-image-highlight">
                <span className="home-text115">
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
              <h2 className="home-text118">Everything you get with Finbest</h2>
              <Highlight
                title="Lorem ipsum dolor sit amet, consectetur "
                description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
              ></Highlight>
              <Highlight
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
                <h2 className="home-text120">
                  Keep track with all transactions
                </h2>
                <span className="home-text121">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-content15">
                <div className="home-points1">
                  <Point></Point>
                  <Point text="Quis nostrud exercitation ullamco"></Point>
                  <Point text="Reprehenderit qui in ea voluptate velit"></Point>
                </div>
                <Link href="/">
                  <a className="home-link2">
                    <div className="home-get-started1">
                      <span className="home-sign-up1">Get started now</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image2"></div>
          </div>
          <div className="home-section3">
            <div className="home-image3">
              <div className="home-image-overlay"></div>
            </div>
            <div className="home-content16">
              <h2 className="home-text122">
                <span>Create milestones</span>
                <br></br>
              </h2>
              <Accordion
                text6={
                  <Fragment>
                    <span className="home-text125">
                      Aliquam quaerat voluptatem
                    </span>
                  </Fragment>
                }
                text={
                  <Fragment>
                    <span className="home-text126">
                      Nemo enim ipsam voluptatem quia voluptas
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
        <div className="home-features">
          <div className="home-header2">
            <div className="home-tag1">
              <span className="home-text129">Features</span>
            </div>
            <div className="home-heading13">
              <h2 className="home-text130">Everything you get with Finbest</h2>
              <span className="home-text131">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
          </div>
          <div className="home-feature-list">
            <Feature></Feature>
            <Feature
              title="Multiple Devices"
              thumbnail="/vector6113-r6dl.svg"
            ></Feature>
            <Feature
              title="Analytics"
              thumbnail="/vector6113-6zj.svg"
            ></Feature>
            <Feature
              title="Virtual Card"
              thumbnail="/vector6113-lvvs.svg"
            ></Feature>
            <Feature
              title="Safe Transactions"
              thumbnail="/vector6114-cupp.svg"
            ></Feature>
            <Feature
              title="Milestones"
              thumbnail="/vector6114-6m1e.svg"
            ></Feature>
            <Feature title="Trade" thumbnail="/vector6114-yjl.svg"></Feature>
            <Feature title="Wallet" thumbnail="/vector6113-lvvs.svg"></Feature>
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
          <div className="home-content17">
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
            <div className="home-buttons">
              <div id="quote-before" className="home-left">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                </svg>
              </div>
              <div id="quote-next" className="home-right">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="home-container3">
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
        <div className="home-program5-tahun">
          <div className="home-content18">
            <div className="home-header3">
              <div className="home-tag2">
                <span className="home-text132">
                  <span>Program</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading14">
                <h2 className="home-text135">Program 5 Tahun</h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column4">
                <Question
                  title={
                    <Fragment>
                      <span className="home-text136">
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
                        <span className="home-text138">
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
                      <span className="home-text145">Pembiayaan</span>
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
                      <span className="home-text149">
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
                      <span className="home-text153">
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
              <div className="home-column5">
                <Question
                  title={
                    <Fragment>
                      <span className="home-text157">
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
                      <span className="home-text164">Bisnis Sektor Riil</span>
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
          <div className="home-content19">
            <div className="home-header4">
              <div className="home-tag3">
                <span className="home-text168">Roadmap</span>
              </div>
              <div className="home-heading15">
                <h2 className="home-text169">Rencana Bisnis 2025-2026 </h2>
              </div>
            </div>
            <div className="home-pricing-plans">
              <div className="home-plans1">
                <div className="home-plan1">
                  <div className="home-top1">
                    <div className="home-heading16">
                      <span className="home-text170">Semester I - 2025</span>
                      <span className="home-text171">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost1">
                      <span className="home-text172">Free</span>
                    </div>
                  </div>
                  <div className="home-bottom1">
                    <div className="home-check-list1">
                      <Check
                        feature="Penguatan infrastuktur Pemodalan dan Operasinal Koperasi DAM"
                        text={
                          <Fragment>
                            <span className="home-text173">
                              Penguatan infrastuktur Pemodalan dan Operasional
                              Koperasi DAM.
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Perencanaan dan Pengembangan IT Core System (Platform Digital Damasta) sebagai pendukung utama, bekerjasama dengan PT Sinergitas Untuk Negeri"
                        text={
                          <Fragment>
                            <span className="home-text174">
                              Perencanaan dan Pengembangan IT Core System
                              (platform digital Damasta) sebagai pendukung
                              utama, bekerjasama dengan PT Sinergitas Untuk
                              Negeri.
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Voluptas sit aspernatur aut odit"
                        text={
                          <Fragment>
                            <span className="home-text175">
                              <span>Penyusunan program prioritas DAM.</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                    </div>
                    <div className="home-button1">
                      <span className="home-text178">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan2">
                  <div className="home-top2">
                    <div className="home-heading17">
                      <span className="home-text179">Semester II - 2025</span>
                      <span className="home-text180">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost2">
                      <span className="home-text181">$8</span>
                      <span className="home-text182">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom2">
                    <div className="home-check-list2">
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text183">
                              <span>
                                Penguatan Infrastruktur Lembaga Pendukung.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Quis nostrud exercitation ulla"
                        text={
                          <Fragment>
                            <span className="home-text186">
                              <span>
                                Sosialisasi Program kepada Calon Anggota dan
                                Mitra.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Duis aute irure dolor intuit"
                        text={
                          <Fragment>
                            <span className="home-text189">
                              <span>
                                Fasilitasi Non Keuangan kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Voluptas sit aspernatur aut odit"
                        text={
                          <Fragment>
                            <span className="home-text192">
                              <span>Fasilitasi Pembiayaan.</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Corporis suscipit laboriosam"
                        text={
                          <Fragment>
                            <span className="home-text195">
                              <span>
                                Fasilitasi Distribusi Barang dan Jasa.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Corporis suscipit laboriosam"
                        text={
                          <Fragment>
                            <span className="home-text198">
                              <span>
                                Pendampingan Teknis dan Inkubasi kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                    </div>
                    <div className="home-button2">
                      <span className="home-text201">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan3">
                  <div className="home-top3">
                    <div className="home-heading18">
                      <span className="home-text202">Semester II - 2025</span>
                      <span className="home-text203">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost3">
                      <span className="home-text204">$8</span>
                      <span className="home-text205">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom3">
                    <div className="home-check-list3">
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text206">
                              <span>
                                Penguatan Infrastruktur Lembaga Pendukung.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Quis nostrud exercitation ulla"
                        text={
                          <Fragment>
                            <span className="home-text209">
                              <span>
                                Sosialisasi Program kepada Calon Anggota dan
                                Mitra.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Duis aute irure dolor intuit"
                        text={
                          <Fragment>
                            <span className="home-text212">
                              <span>
                                Fasilitasi Non Keuangan kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Voluptas sit aspernatur aut odit"
                        text={
                          <Fragment>
                            <span className="home-text215">
                              <span>Fasilitasi Pembiayaan.</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Corporis suscipit laboriosam"
                        text={
                          <Fragment>
                            <span className="home-text218">
                              <span>
                                Fasilitasi Distribusi Barang dan Jasa.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Corporis suscipit laboriosam"
                        text={
                          <Fragment>
                            <span className="home-text221">
                              <span>
                                Pendampingan Teknis dan Inkubasi kepada Anggota.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                    </div>
                    <div className="home-button3">
                      <span className="home-text224">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan4">
                  <div className="home-top4">
                    <div className="home-heading19">
                      <span className="home-text225">Semester II - 2026</span>
                      <span className="home-text226">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost4">
                      <span className="home-text227">$16</span>
                      <span className="home-text228">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom4">
                    <div className="home-check-list4">
                      <Check
                        text={
                          <Fragment>
                            <span className="home-text229">
                              <span>
                                Fasilitasi dan Koordinasi : Pembiayaan,
                                Distribusi Barang dan Jasa, Peningkatan SDM
                                melalui Sertifikasi Kompetensi.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Quis nostrud exercitation ulla"
                        text={
                          <Fragment>
                            <span className="home-text232">
                              <span>
                                Perencanaan dan Persiapan Bisnis Sektor Riil
                                melibatkan jaringan Apex, memanfaatkan lahan
                                seluas 1 hektar di Cikalong Kulon, Cianjur.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                      <Check
                        feature="Duis aute irure dolor intuit"
                        text={
                          <Fragment>
                            <span className="home-text235">
                              <span>
                                Menjadi Pilot Project Apex Koperasi di
                                Indonesia.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                      ></Check>
                    </div>
                    <div className="home-button4">
                      <span className="home-text238">Get Standard</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-expand1">
                <div className="home-overlay2">
                  <div className="home-header5">
                    <div className="home-heading20">
                      <span className="home-text239">Expand</span>
                      <span className="home-text240">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </div>
                    <div className="home-check-list5">
                      <div className="home-check1">
                        <svg viewBox="0 0 1024 1024" className="home-icon14">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text241">
                          Sed ut perspiciatis unde
                        </span>
                      </div>
                      <div className="home-check2">
                        <svg viewBox="0 0 1024 1024" className="home-icon16">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text242">
                          Quis nostrud exercitation ulla
                        </span>
                      </div>
                      <div className="home-check3">
                        <svg viewBox="0 0 1024 1024" className="home-icon18">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text243">
                          Duis aute irure dolor intuit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-button5">
                    <span className="home-text244">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-plans2">
              <div className="home-plan5">
                <div className="home-top5">
                  <div className="home-heading21">
                    <span className="home-text247">Standard</span>
                    <span className="home-text248">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost5">
                    <span className="home-text249">Free</span>
                  </div>
                </div>
                <div className="home-bottom5">
                  <div className="home-check-list6">
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text250">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Quis nostrud exercitation ulla"
                      text={
                        <Fragment>
                          <span className="home-text251">
                            Quis nostrud exercitation ulla
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Duis aute irure dolor intuit"
                      text={
                        <Fragment>
                          <span className="home-text252">
                            Duis aute irure dolor intuit
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Voluptas sit aspernatur aut odit"
                      text={
                        <Fragment>
                          <span className="home-text253">
                            Voluptas sit aspernatur aut odit
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Corporis suscipit laboriosam"
                      text={
                        <Fragment>
                          <span className="home-text254">
                            Corporis suscipit laboriosam
                          </span>
                        </Fragment>
                      }
                    ></Check>
                  </div>
                  <div className="home-button6">
                    <span className="home-text255">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan6">
                <div className="home-top6">
                  <div className="home-heading22">
                    <span className="home-text256">Plus</span>
                    <span className="home-text257">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost6">
                    <span className="home-text258">$8</span>
                    <span className="home-text259">/month</span>
                  </div>
                </div>
                <div className="home-bottom6">
                  <div className="home-check-list7">
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text260">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Quis nostrud exercitation ulla"
                      text={
                        <Fragment>
                          <span className="home-text261">
                            Quis nostrud exercitation ulla
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Duis aute irure dolor intuit"
                      text={
                        <Fragment>
                          <span className="home-text262">
                            Duis aute irure dolor intuit
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Voluptas sit aspernatur aut odit"
                      text={
                        <Fragment>
                          <span className="home-text263">
                            Voluptas sit aspernatur aut odit
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Corporis suscipit laboriosam"
                      text={
                        <Fragment>
                          <span className="home-text264">
                            Corporis suscipit laboriosam
                          </span>
                        </Fragment>
                      }
                    ></Check>
                  </div>
                  <div className="home-button7">
                    <span className="home-text265">Get Plus</span>
                  </div>
                </div>
              </div>
              <div className="home-plan7">
                <div className="home-top7">
                  <div className="home-heading23">
                    <span className="home-text266">Premium</span>
                    <span className="home-text267">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost7">
                    <span className="home-text268">$16</span>
                    <span className="home-text269">/month</span>
                  </div>
                </div>
                <div className="home-bottom7">
                  <div className="home-check-list8">
                    <Check
                      text={
                        <Fragment>
                          <span className="home-text270">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Quis nostrud exercitation ulla"
                      text={
                        <Fragment>
                          <span className="home-text271">
                            Quis nostrud exercitation ulla
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Duis aute irure dolor intuit"
                      text={
                        <Fragment>
                          <span className="home-text272">
                            Duis aute irure dolor intuit
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Voluptas sit aspernatur aut odit"
                      text={
                        <Fragment>
                          <span className="home-text273">
                            Voluptas sit aspernatur aut odit
                          </span>
                        </Fragment>
                      }
                    ></Check>
                    <Check
                      feature="Corporis suscipit laboriosam"
                      text={
                        <Fragment>
                          <span className="home-text274">
                            Corporis suscipit laboriosam
                          </span>
                        </Fragment>
                      }
                    ></Check>
                  </div>
                  <div className="home-button8">
                    <span className="home-text275">Get Plus</span>
                  </div>
                </div>
              </div>
              <div className="home-expand2">
                <div className="home-overlay3">
                  <div className="home-header6">
                    <div className="home-heading24">
                      <span className="home-text276">Expand</span>
                      <span className="home-text277">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </div>
                    <div className="home-check-list9">
                      <div className="home-check4">
                        <svg viewBox="0 0 1024 1024" className="home-icon20">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text278">
                          Sed ut perspiciatis unde
                        </span>
                      </div>
                      <div className="home-check5">
                        <svg viewBox="0 0 1024 1024" className="home-icon22">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text279">
                          Quis nostrud exercitation ulla
                        </span>
                      </div>
                      <div className="home-check6">
                        <svg viewBox="0 0 1024 1024" className="home-icon24">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text280">
                          Duis aute irure dolor intuit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-button9">
                    <span className="home-text281">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-help">
            <span className="home-text284">Ingin membantu?</span>
            <div className="home-explore3">
              <span className="home-text285">Bergabung dengan kami -&gt;</span>
            </div>
          </div>
        </div>
        <div className="home-sections2">
          <div className="home-section4">
            <div className="home-content20">
              <div className="home-heading25">
                <h2 className="home-text286">Syarat Keanggotaan</h2>
                <span className="home-text287">
                  Sesuai Pasal 10 AD Koperasi Damasta Abhipraya Mandiri (Skd),
                  Anggota Koperasi DAM adalah Koperasi Primer yang telah
                  berbadan Hukum, dan berdomisili di Kota Bekasi
                </span>
              </div>
              <div className="home-content21">
                <div className="home-points2">
                  <Point></Point>
                  <Point text=" Membayar Simpanan Pokok sebesar Rp.5.000.000 dan Simpanan Wajib minimal sebesar Rp.100.000 per bulan."></Point>
                  <Point text=" Berlangganan platform koperasi digital Damasta."></Point>
                  <Point text="  Menyetujui AD/ART serta peraturan-peraturan yang berlaku di Koperasi Damasta Abhipraya Mandiri (Skd)."></Point>
                </div>
                <Link href="/">
                  <a className="home-link3">
                    <div className="home-get-started2">
                      <span className="home-sign-up2">Bergabung sekarang</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image4"></div>
          </div>
          <div className="home-section5">
            <div className="home-content22">
              <div className="home-heading26">
                <h2 className="home-text288">Syarat Kemitraan</h2>
                <span className="home-text289">
                  Fungsi Apex DAM bertujuan untuk mewujudkan tata kelola
                  koperasi yang baik dan sehat, serta dapat menolong dirinya
                  sendiri. Kerja sama antar koperasi dan/dengan lembaga lainnya
                  yang memilikii visi yang sama, menjadi bagian penting untuk
                  koperasi ke depannya menjadi mandiri dan kokoh dalam
                  menghadapi dinamika ke depan.
                </span>
              </div>
              <div className="home-content23">
                <div className="home-points3">
                  <Point text=" Organisasi atau Badan Usaha yang memiliki  legalitas yang jelas."></Point>
                  <Point text="   Mempunyai tujuan umum yang sama."></Point>
                  <Point text="   Kesetaraan."></Point>
                  <Point text="     Saling menghargai dan saling memberi kontribusi."></Point>
                  <Point text="       Sinergi program-programnya."></Point>
                  <Point text="       Saling menguntungkan."></Point>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-get-started3">
          <div className="home-content24">
            <div className="home-heading27">
              <h2 className="home-text290">Jadi bagian gerakan ini!</h2>
              <span className="home-text291">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore magna.
              </span>
            </div>
            <div className="home-hero-buttons2">
              <div className="home-ios-btn2">
                <img
                  alt="pastedImage"
                  src="/pastedimage-zmzg.svg"
                  className="home-apple2"
                />
                <span className="home-caption7">Download for iOS</span>
              </div>
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
              <span className="home-text292">
                <span>KOPERASI DAMASTA ABHIPRAYA MANDIRI (Skd)</span>
                <br></br>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text295">
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
          .home-container1 {
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
          .home-content10 {
            flex: 1;
            width: 100%;
            display: flex;
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
          .home-title {
            font-size: 64px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 76px;
          }
          .home-text100 {
            color: #ade2df;
          }
          .home-text101 {
            color: #ade2df;
          }
          .home-text102 {
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
            display: flex;
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
          .home-text111 {
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
          .home-text112 {
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .home-text113 {
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
          .home-text114 {
            width: Size-XSmall;
          }
          .home-stats {
            width: 100%;
            display: flex;
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
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
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
          .home-image1 {
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
          .home-text115 {
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
          .home-text118 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
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
          .home-text120 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text121 {
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
          .home-link2 {
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
          .home-sign-up1 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image2 {
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
          .home-image3 {
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
            display: flex;
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
          .home-text129 {
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
          .home-text130 {
            width: 100%;
            font-size: 40px;
            max-width: 400px;
            font-style: normal;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text131 {
            width: 100%;
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
          .home-testimonials {
            width: 100%;
            display: flex;
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
          .home-content17 {
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
          .home-buttons {
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
          .home-icon10 {
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
          .home-icon12 {
            width: 19px;
            height: 19px;
          }
          .home-container3 {
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
          .home-content18 {
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
          .home-text132 {
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
          .home-text135 {
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
          .home-column4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-description4 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text138 {
            font-weight: 700;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-description5 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-description6 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-description7 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-column5 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-description8 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-text164 {
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
          .home-content19 {
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
          .home-text168 {
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
          .home-text169 {
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
            height: 100%;
            display: grid;
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
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-right-width: 1px;
          }
          .home-top1 {
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
          .home-text170 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text171 {
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
          .home-text172 {
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
          .home-check-list1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-button1 {
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
          .home-button1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text178 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan2 {
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
          .home-heading17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text179 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text180 {
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
          .home-text181 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text182 {
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
          .home-check-list2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-button2 {
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
          .home-button2:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text201 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan3 {
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
          .home-heading18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text202 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text203 {
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
          .home-text204 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text205 {
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
          .home-check-list3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
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
          .home-text215 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text221 {
            display: inline-block;
          }
          .home-button3 {
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
          .home-button3:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text224 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan4 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
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
          .home-heading19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text225 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text226 {
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
          .home-text227 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text228 {
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
          .home-check-list4 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
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
          .home-button4 {
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
          .home-button4:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text238 {
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
          .home-text239 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text240 {
            color: #c1fffc;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list5 {
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
          .home-icon14 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text241 {
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
          .home-icon16 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text242 {
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
          .home-icon18 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text243 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-button5 {
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
          .home-button5:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text244 {
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
          .home-heading21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text247 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text248 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text249 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
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
          .home-check-list6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text250 {
            display: inline-block;
          }
          .home-text251 {
            display: inline-block;
          }
          .home-text252 {
            display: inline-block;
          }
          .home-text253 {
            display: inline-block;
          }
          .home-text254 {
            display: inline-block;
          }
          .home-button6 {
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
            background-color: #ade2df;
          }
          .home-button6:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text255 {
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
          .home-heading22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text256 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text257 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text258 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text259 {
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
          .home-check-list7 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text260 {
            display: inline-block;
          }
          .home-text261 {
            display: inline-block;
          }
          .home-text262 {
            display: inline-block;
          }
          .home-text263 {
            display: inline-block;
          }
          .home-text264 {
            display: inline-block;
          }
          .home-button7 {
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
            background-color: #ade2df;
          }
          .home-button7:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text265 {
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
          .home-heading23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text266 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text267 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost7 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text268 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text269 {
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
          .home-check-list8 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-text270 {
            display: inline-block;
          }
          .home-text271 {
            display: inline-block;
          }
          .home-text272 {
            display: inline-block;
          }
          .home-text273 {
            display: inline-block;
          }
          .home-text274 {
            display: inline-block;
          }
          .home-button8 {
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
            background-color: #ade2df;
          }
          .home-button8:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text275 {
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
          .home-heading24 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text276 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text277 {
            color: #c1fffc;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list9 {
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
          .home-icon20 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text278 {
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
          .home-icon22 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text279 {
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
          .home-icon24 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text280 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-button9 {
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
          .home-button9:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text281 {
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
          .home-text284 {
            font-family: 'Poppins';
          }
          .home-explore3 {
            cursor: pointer;
            display: flex;
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
          .home-text285 {
            font-style: normal;
            font-weight: 600;
          }
          .home-sections2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
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
            justify-content: center;
          }
          .home-content20 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text286 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text287 {
            font-size: 18px;
            max-width: 535px;
            font-family: 'Poppins';
            line-height: 27px;
          }
          .home-content21 {
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
          .home-link3 {
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
          .home-sign-up2 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image4 {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/Damasta/core-handphone-1500h.png');
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
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .home-content22 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading26 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text288 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text289 {
            width: 100%;
            font-size: 18px;
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
          .home-points3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-get-started3 {
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
          .home-content24 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text290 {
            color: rgb(193, 255, 252);
            font-size: 64px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text291 {
            color: #ffffff;
            font-size: 20px;
            text-align: center;
            font-family: Poppins;
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
            background-color: #000000;
          }
          .home-ios-btn2:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple2 {
            width: 16px;
            height: 20px;
          }
          .home-caption7 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-android-btn2 {
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
          .home-text292 {
            display: inline-block;
          }
          .home-text295 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-content10 {
              flex-direction: column;
            }
            .home-content11 {
              gap: var(--dl-layout-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: 0px;
            }
            .home-title {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-text100 {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-caption1 {
              font-size: 16px;
            }
            .home-text104 {
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
              width: 200px;
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
            .home-roadmap {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content19 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header4 {
              gap: var(--dl-layout-space-unit);
            }
            .home-pricing-plans {
              grid-template-columns: none;
            }
            .home-plans1 {
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
            .home-text239 {
              font-size: 18px;
            }
            .home-text240 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text241 {
              line-height: 21px;
            }
            .home-text242 {
              line-height: 21px;
            }
            .home-text243 {
              line-height: 21px;
            }
            .home-button5 {
              margin-top: var(--dl-layout-space-threeunits);
            }
            .home-overlay3 {
              width: 100%;
              justify-content: space-between;
            }
            .home-header6 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading24 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 600px;
            }
            .home-text276 {
              font-size: 18px;
            }
            .home-text277 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text278 {
              line-height: 21px;
            }
            .home-text279 {
              line-height: 21px;
            }
            .home-text280 {
              line-height: 21px;
            }
            .home-button9 {
              margin-top: var(--dl-layout-space-threeunits);
            }
            .home-section4 {
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content20 {
              gap: var(--dl-layout-space-unit);
            }
            .home-content21 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-section5 {
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content22 {
              gap: var(--dl-layout-space-unit);
            }
            .home-content23 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-get-started3 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content24 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading27 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text290 {
              font-size: 40px;
            }
            .home-text291 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .home-title {
              font-size: 40px;
              line-height: 48px;
            }
            .home-text100 {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text104 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-images {
              bottom: -250px;
            }
            .home-text111 {
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
            .home-text112 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-text113 {
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
            .home-text118 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text120 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text121 {
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
            .home-features {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text129 {
              font-size: 14px;
            }
            .home-text130 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text131 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-feature-list {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: column;
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
            .home-content18 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-text132 {
              font-size: 14px;
            }
            .home-text135 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-rows {
              flex-direction: column;
            }
            .home-text169 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-pricing-plans {
              display: none;
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
            .home-top5 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading21 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text247 {
              font-size: 18px;
            }
            .home-text249 {
              font-size: 32px;
              line-height: 32px;
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
            .home-top6 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading22 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text256 {
              font-size: 18px;
            }
            .home-text258 {
              font-size: 32px;
              line-height: 32px;
            }
            .home-text265 {
              font-weight: 500;
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
            .home-top7 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading23 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text266 {
              font-size: 18px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text268 {
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 32px;
            }
            .home-text275 {
              font-weight: 500;
            }
            .home-expand2 {
              flex: 0 0 auto;
              width: 100%;
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
            .home-text286 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text287 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started2 {
              display: none;
            }
            .home-text288 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text289 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started3 {
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
            .home-image1 {
              width: 100%;
              max-width: 400px;
            }
            .home-image3 {
              width: 100%;
              max-width: 400px;
            }
            .home-pasted-image6 {
              height: 225px;
            }
            .home-buttons {
              margin-top: -40px;
            }
            .home-left {
              padding: var(--dl-layout-space-halfunit);
            }
            .home-right {
              padding: var(--dl-layout-space-halfunit);
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
