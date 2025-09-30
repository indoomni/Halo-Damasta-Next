import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Check = (props) => {
  return (
    <>
      <div className={`check-check ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="check-icon1">
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
        <span className="check-text1">
          {props.text ?? (
            <Fragment>
              <span className="check-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .check-check {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .check-icon1 {
            width: 18px;
            height: 24px;
          }
          .check-text1 {
            width: 100%;
            font-size: 14px;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .check-text2 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .check-text1 {
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Check.defaultProps = {
  rootClassName: '',
  text: undefined,
}

Check.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default Check
