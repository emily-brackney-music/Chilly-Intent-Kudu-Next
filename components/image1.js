import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Image1 = (props) => {
  return (
    <>
      <div className={`image1-container ${props.rootClassName} `}></div>
      <style jsx>
        {`
          .image1-container {
            display: flex;
            position: relative;
          }
          .image1root-class-name {
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

Image1.defaultProps = {
  rootClassName: '',
}

Image1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Image1
