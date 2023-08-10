import SeaShore from '../assets/image/SeaShore.jpeg'
import Mountains from '../assets/image/Mountains.jpeg'
import '../style/banner.scss'

function Banner({ landscape }) {
  return (
    <div className="banner">
      {landscape === 'landscape_1' ? (
        <>
          <img src={SeaShore} alt="un paysage" />
          <div className="overlay">
            <p>Chez vous, partout et ailleurs</p>
          </div>
        </>
      ) : (
        <>
          <img src={Mountains} alt="un paysage" />
          <div className="overlay"></div>
        </>
      )}
    </div>
  )
}

export default Banner
