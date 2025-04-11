import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FrontPageBanner = (props) => {
  return (
    <>
      <div className="front-page-banner-container1 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="front-page-banner-image thq-img-ratio-16-9"
        />
        <div className="front-page-banner-max-width thq-section-max-width">
          <div className="front-page-banner-container2">
            <h2 className="front-page-banner-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="front-page-banner-text">
                    Welcome to our Website!
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .front-page-banner-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .front-page-banner-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .front-page-banner-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .front-page-banner-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .front-page-banner-title {
            text-align: center;
          }
          .front-page-banner-text {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

FrontPageBanner.defaultProps = {
  heading1: undefined,
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image1Alt: 'Banner Image',
}

FrontPageBanner.propTypes = {
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default FrontPageBanner
