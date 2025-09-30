import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero16 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero16-max-width thq-section-max-width">
          <div className="hero16-column thq-section-padding">
            <h1 className="thq-heading-1 hero16-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero16-text6">
                    Empowering Cooperatives Through Digitalization
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="thq-body-large hero16-text2">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero16-text5">
                    Join us in revolutionizing the cooperative sector through
                    innovative digital solutions.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero16-actions">
              <button className="thq-button-filled hero16-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero16-text8">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero16-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero16-text7">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="hero16-content">
            <div className="hero16-column-container1 thq-mask-image-vertical thq-animated-group-container-vertical">
              <div className="thq-animated-group-vertical">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="hero16-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="hero16-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="hero16-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
                />
              </div>
              <div className="thq-animated-group-vertical">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="hero16-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="hero16-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="hero16-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
                />
              </div>
            </div>
            <div className="hero16-column-container2 thq-mask-image-vertical thq-animated-group-container-vertical">
              <div className="thq-animated-group-vertical-reverse">
                <img
                  alt={props.image4Alt}
                  src={props.image4Src}
                  className="hero16-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image5Alt}
                  src={props.image5Src}
                  className="hero16-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image6Alt}
                  src={props.image6Src}
                  className="hero16-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
                />
              </div>
              <div className="thq-animated-group-vertical-reverse">
                <img
                  alt={props.image4Alt}
                  src={props.image4Src}
                  className="hero16-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image5Alt}
                  src={props.image5Src}
                  className="hero16-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
                />
                <img
                  alt={props.image6Alt}
                  src={props.image6Src}
                  className="hero16-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero16-container2">
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
      <style jsx>
        {`
          .hero16-max-width {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .hero16-column {
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
          .hero16-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero16-content {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            height: 900px;
            display: flex;
          }
          .hero16-column-container1 {
            width: 50%;
          }
          .hero16-placeholder-image10 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image11 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image12 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image13 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image14 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image15 {
            width: 100%;
            height: 400px;
          }
          .hero16-column-container2 {
            width: 50%;
          }
          .hero16-placeholder-image16 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image17 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image18 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image19 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image20 {
            width: 100%;
            height: 400px;
          }
          .hero16-placeholder-image21 {
            width: 100%;
            height: 400px;
          }
          .hero16-container2 {
            display: contents;
          }
          .hero16-text5 {
            display: inline-block;
          }
          .hero16-text6 {
            display: inline-block;
          }
          .hero16-text7 {
            display: inline-block;
          }
          .hero16-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .hero16-max-width {
              flex-direction: column;
            }
            .hero16-column {
              width: 100%;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .hero16-content {
              width: 100%;
              height: 100vh;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .hero16-column {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .hero16-text1 {
              text-align: center;
            }
            .hero16-text2 {
              text-align: center;
            }
            .hero16-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero16-column {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .hero16-text1 {
              text-align: center;
            }
            .hero16-text2 {
              text-align: center;
            }
            .hero16-actions {
              flex-direction: column;
            }
            .hero16-button1 {
              width: 100%;
            }
            .hero16-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero16.defaultProps = {
  content1: undefined,
  image4Src:
    'https://images.unsplash.com/photo-1600010897947-57420d01a57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTI0MjYxOHw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1704734320094-f0e8d879b8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTI0MjYxOHw&ixlib=rb-4.1.0&q=80&w=1080',
  image6Alt: 'Cooperative members strategizing for growth',
  heading1: undefined,
  image3Alt: 'Cooperative members discussing digital solutions',
  image5Alt: 'Cooperative members networking at an event',
  action2: undefined,
  action1: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1737279721321-5b8637126a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTI0MjYxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Alt: 'Cooperative members collaborating on a project',
  image1Src:
    'https://images.unsplash.com/photo-1660044049389-405e739c2454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTI0MjYxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Cooperative members embracing technology',
  image3Src:
    'https://images.unsplash.com/photo-1504894577131-1ec09a4bc15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTI0MjYxNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Cooperative members engaging in a meeting',
  image5Src:
    'https://images.unsplash.com/photo-1705514753729-5598cebfd92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTI0MjYxN3w&ixlib=rb-4.1.0&q=80&w=1080',
}

Hero16.propTypes = {
  content1: PropTypes.element,
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image6Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
}

export default Hero16
