import { useState } from 'react'
import leftArrow from '../assets/image/leftArrow.png'
import rightArrow from '../assets/image/rightArrow.png'
import '../style/slideshow.scss'

function Slideshow({ pictures, title }) {
  // manage the position index
  const [pictureIndex, setPictureIndex] = useState(0)
  // backward function
  function prevPicture() {
    // when at first picture go to to last
    pictureIndex === 0
      ? setPictureIndex(pictures.length - 1)
      : // otherwise just go to previous picture
        setPictureIndex(pictureIndex - 1)
  }
  // forward function
  function nextPicture() {
    // when at latest picture go to to first one
    pictureIndex === pictures.length - 1
      ? setPictureIndex(0)
      : // otherwise just go to next picture
        setPictureIndex(pictureIndex + 1)
  }
  return (
    <div className="slideshow">
      {/* render the picture corresponding to picture's index */}
      <img className="pictures" src={pictures[pictureIndex]} alt={title} />
      {/* if there's only one picture in the gallery don't show the navigation arrows and the slideshow position's */}
      {pictures.length > 1 ? (
        <>
          <p className="position">
            {pictureIndex + 1}/{pictures.length}
          </p>
          <img
            className="leftArrow"
            src={leftArrow}
            // on click run backward function
            onClick={() => prevPicture()}
            alt="navigation vers précédente"
          />
          <img
            className="rightArrow"
            src={rightArrow}
            // on click run forward function
            onClick={() => nextPicture()}
            alt="navigation vers suivante"
          />
        </>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default Slideshow
