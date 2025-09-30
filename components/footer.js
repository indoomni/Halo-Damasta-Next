import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Social from './social'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading">
              <img
                alt={props.pastedImageAlt}
                src={props.pastedImageSrc}
                className="footer-pasted-image"
              />
              <span className="footer-text10">
                {props.text2 ?? (
                  <Fragment>
                    <span className="footer-text13">
                      <span>KOPERASI DAMASTA ABHIPRAYA MANDIRI (Skd)</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text11">
                {props.text21 ?? (
                  <Fragment>
                    <span className="footer-text16">
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
                )}
              </span>
            </div>
            <div className="footer-socials">
              <Social rootClassName="socialroot-class-name"></Social>
              <Social
                insiderSrc="/pastedimage-k0l6.svg"
                rootClassName="socialroot-class-name1"
              ></Social>
              <Social
                insiderSrc="/pastedimage-ld65.svg"
                rootClassName="socialroot-class-name2"
              ></Social>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <span className="footer-header1">{props.header}</span>
              <span className="footer-link10">{props.link}</span>
              <span className="footer-link11">{props.link1}</span>
              <span className="footer-link12">{props.link2}</span>
              <span className="footer-link13">{props.link3}</span>
              <span className="footer-link14">{props.link4}</span>
            </div>
            <div className="footer-column2">
              <span className="footer-header2">{props.header1}</span>
              <span className="footer-link15">{props.link5}</span>
              <span className="footer-link16">{props.link6}</span>
              <span className="footer-link17">{props.link7}</span>
              <span className="footer-link18">{props.link8}</span>
              <span className="footer-link19">{props.link9}</span>
              <span className="footer-link20">{props.link10}</span>
            </div>
          </div>
        </div>
        <span className="footer-text12">{props.text}</span>
      </div>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-layout-space-threeunits);
            color: white;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #000000;
          }
          .footer-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-layout-space-unit);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-heading {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-pasted-image {
            width: 150px;
          }
          .footer-text10 {
            font-size: 16px;
            font-family: Poppins;
            font-weight: bold;
            line-height: 21px;
          }
          .footer-text11 {
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .footer-socials {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .footer-links {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-column1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header1 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link10 {
            color: #c4c4c4;
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link10:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link11 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link11:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link12 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link12:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link13 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link13:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link14 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link14:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header2 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link15 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link15:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link16 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link16:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link17 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link17:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link18 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link18:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link19 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link19:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link20 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link20:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-text12 {
            color: rgb(196, 196, 196);
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          .footer-text13 {
            display: inline-block;
          }
          .footer-text16 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .footer-footer {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-layout-space-twounits);
            }
            .footer-content {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-information {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-heading {
              gap: var(--dl-layout-space-halfunit);
            }
            .footer-pasted-image {
              width: 100px;
            }
            .footer-text10 {
              font-size: 12px;
              line-height: 18px;
            }
            .footer-text11 {
              font-size: 12px;
              line-height: 18px;
            }
            .footer-socials {
              gap: var(--dl-layout-space-halfunit);
            }
            .footer-links {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .footer-header1 {
              font-size: 16px;
              line-height: 24px;
            }
            .footer-header2 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  link9: 'Careers',
  link1: 'Responsive Prototypes',
  link: 'Responsive Web Design',
  link8: 'Partners',
  link3: 'Static Website Builder',
  link10: 'Press & Media',
  header1: 'Company',
  pastedImageSrc: '/Damasta/logo-damasta-without-tagline-white-200h.png',
  pastedImageAlt: 'pastedImage',
  link7: 'News',
  link2: 'Design to Code',
  link5: 'About',
  text: '© 2025 Damasta. All Rights Reserved.',
  header: 'Solutions',
  link6: 'Team',
  link4: 'Static Website Generator',
  text2: undefined,
  text21: undefined,
}

Footer.propTypes = {
  link9: PropTypes.string,
  link1: PropTypes.string,
  link: PropTypes.string,
  link8: PropTypes.string,
  link3: PropTypes.string,
  link10: PropTypes.string,
  header1: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  link7: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
  link6: PropTypes.string,
  link4: PropTypes.string,
  text2: PropTypes.element,
  text21: PropTypes.element,
}

export default Footer
