import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NotFound1 = (props) => {
  return (
    <>
      <div className="not-found1-container1 thq-section-padding">
        <div className="not-found1-max-width thq-section-max-width">
          <div className="not-found1-container2">
            <div className="not-found1-container3">
              <h1 className="thq-heading-2 not-found1-text1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="not-found1-text4">Teaching Resources</span>
                  </Fragment>
                )}
              </h1>
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="not-found1-text6">Coming Soon</span>
                  </Fragment>
                )}
              </span>
              <div className="not-found1-container4">
                <div className="not-found1-container5"></div>
              </div>
            </div>
            <p className="thq-body-large not-found1-text3">
              {props.content1 ?? (
                <Fragment>
                  <span className="not-found1-text5">
                    This section of the website is still under development
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="not-found1-container6"></div>
        </div>
      </div>
      <style jsx>
        {`
          .not-found1-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .not-found1-max-width {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .not-found1-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .not-found1-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .not-found1-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .not-found1-container5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 60%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .not-found1-container6 {
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found1-text4 {
            display: inline-block;
          }
          .not-found1-text5 {
            display: inline-block;
          }
          .not-found1-text6 {
            display: inline-block;
            font-size: 28px;
          }
          @media (max-width: 767px) {
            .not-found1-container1 {
              align-items: center;
              justify-content: center;
            }
            .not-found1-text1 {
              text-align: center;
            }
            .not-found1-container5 {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .not-found1-text3 {
              text-align: center;
            }
            .not-found1-container6 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .not-found1-container1 {
              height: auto;
            }
            .not-found1-container5 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

NotFound1.defaultProps = {
  heading1: undefined,
  content1: undefined,
  text: undefined,
}

NotFound1.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  text: PropTypes.element,
}

export default NotFound1
