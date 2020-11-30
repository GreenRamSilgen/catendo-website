import React from 'react'

// eslint-disable-next-line react/prop-types
function ImageComp({ src }) {
    const imgStyles = {
        width: `80%`,
        height: "100%", // auto
    }
    return (
        // eslint-disable-next-line react/jsx-filename-extension
      <img src={src} alt="slide-img" style={imgStyles} />
    )
}

export default ImageComp;