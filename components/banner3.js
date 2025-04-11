import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner3 = (props) => {
  return (
    <>
      <div className="banner3-container1 thq-section-padding">
        <div className="banner3-max-width thq-section-max-width">
          <div className="banner3-container2">
            <h2 className="banner3-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner3-text">Prop Content</span>
                </Fragment>
              )}
            </h2>
          </div>
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
          .banner3-text {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner3.defaultProps = {
  heading1: undefined,
}

Banner3.propTypes = {
  heading1: PropTypes.element,
}

export default Banner3
