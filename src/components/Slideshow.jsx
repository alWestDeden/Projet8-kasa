import { useState } from 'react'
import leftArrow from '../assets/image/leftArrow.png'
import rightArrow from '../assets/image/rightArrow.png'
import '../style/slideshow.scss'

function Slideshow({ pictures, title }) {
  const [pictureIndex, setPictureIndex] = useState(0)
  function prevPicture() {
    pictureIndex === 0
      ? setPictureIndex(pictures.length - 1)
      : setPictureIndex(pictureIndex - 1)
  }
  function nextPicture() {
    pictureIndex === pictures.length - 1
      ? setPictureIndex(0)
      : setPictureIndex(pictureIndex + 1)
  }
  return (
    <div className="slideshow">
      <img className="pictures" src={pictures[pictureIndex]} alt={title} />
      <p className="position">
        {pictureIndex + 1}/{pictures.length}
      </p>
      <img
        className="leftArrow"
        src={leftArrow}
        onClick={() => prevPicture()}
        alt="navigation vers précédente"
      />
      <img
        className="rightArrow"
        src={rightArrow}
        onClick={() => nextPicture()}
        alt="navigation vers suivante"
      />
    </div>
  )
}

export default Slideshow
