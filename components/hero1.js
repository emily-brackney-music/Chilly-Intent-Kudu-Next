import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero1 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero1-max-width thq-section-max-width">
          <div className="thq-flex-row hero1-container">
            <div className="hero1-column">
              <div className="hero1-content">
                <h1 className="thq-heading-1 hero1-heading1">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="hero1-text2">
                        Engaging hero headline for your website
                      </span>
                    </Fragment>
                  )}
                </h1>
                <p className="thq-body-large hero1-content1">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="hero1-text1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="hero1-actions"></div>
            </div>
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="hero1-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero1-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero1-column {
            gap: 24px;
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero1-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero1-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero1-image {
            width: 438px;
            height: 413px;
            object-fit: cover;
          }
          .hero1-text1 {
            display: inline-block;
          }
          .hero1-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .hero1-container {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .hero1-heading1 {
              text-align: center;
            }
            .hero1-content1 {
              text-align: center;
            }
            .hero1-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero1-actions {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Hero1.defaultProps = {
  content1: undefined,
  imageSrc2: '/emily_brackney_headshot_(copy)-500h.jpg',
  imageAlt2: 'image',
  heading1: undefined,
}

Hero1.propTypes = {
  content1: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero1
