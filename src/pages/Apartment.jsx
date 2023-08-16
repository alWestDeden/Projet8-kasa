import { useParams } from 'react-router-dom'
import apartments from '../assets/json/logements.json'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import '../style/Apartment.scss'
import fullStar from '../assets/image/fullStar.png'
import emptyStar from '../assets/image/emptyStar.png'

function Apartment() {
  const { id } = useParams()
  const selectedApartment = apartments.filter(
    (apartment) => apartment.id === id,
  )
  //   const apartment = selectedApartment[0]
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = selectedApartment[0]

  let stars = [false, false, false, false, false]
  for (let r = 0; r < rating; r++) {
    stars[r] = true
  }

  return (
    <section className="apartment">
      <Slideshow pictures={pictures} title={title} />
      <div className="top-infos">
        <div className="left-infos">
          <div className="title-location">
            <h1>{title}</h1>
            <h2>{location}</h2>
            <ul className="tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-infos">
          <div className="profile">
            <h2>{host.name}</h2>
            <img className="photo" src={host.picture} alt={host.name} />
            <div></div>
          </div>
          <div className="rating">
            {stars.map((star, i) =>
              star ? (
                <img key={i} src={fullStar} alt="note" />
              ) : (
                <img key={i} src={emptyStar} alt="note" />
              ),
            )}
          </div>
        </div>
      </div>
      <div className="bottom-infos">
        <Collapse
          className="collapse"
          titleText="Description"
          contentText={description}
        />
        <Collapse
          className="collapse"
          titleText="Équipments"
          contentText={equipments}
        />
      </div>
    </section>
  )
}

export default Apartment
