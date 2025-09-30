import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner3 = (props) => {
  return (
    <>
      <div className="banner3-container1 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="banner3-image thq-img-ratio-16-9"
        />
        <div className="banner3-max-width thq-section-max-width">
          <div className="banner3-container2">
            <h2 className="banner3-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner3-text3">
                    Welcome to KOPERASI DAMASTA ABHIPRAYA MANDIRI
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner3-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner3-text4">
                    Empowering cooperatives through digitalization and
                    innovation
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner3-text5">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner3-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner3-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .banner3-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-title {
            text-align: center;
          }
          .banner3-text1 {
            text-align: center;
          }
          .banner3-text3 {
            display: inline-block;
          }
          .banner3-text4 {
            display: inline-block;
          }
          .banner3-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner3.defaultProps = {
  heading1: undefined,
  image1Alt: 'Cooperative members discussing digital solutions',
  image1Src:
    'https://images.unsplash.com/photo-1704734320094-f0e8d879b8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTI0MjYxOHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  action1: undefined,
}

Banner3.propTypes = {
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default Banner3
