import React from 'react'
import './ImageComp.css'

// eslint-disable-next-line react/prop-types
function ImageComp({ src }) {
    return (
        // eslint-disable-next-line react/jsx-filename-extension
      <img className="catSlideImg" src={src} alt="slide-img" />
    )
}

export default ImageComp;