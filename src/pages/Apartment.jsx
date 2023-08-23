import { Navigate, useParams } from 'react-router-dom'
import apartments from '../assets/json/logements.json'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import '../style/Apartment.scss'
import fullStar from '../assets/image/fullStar.png'
import emptyStar from '../assets/image/emptyStar.png'

function Apartment() {
  // get the apartment's id from the URL
  const { id } = useParams()
  // get the selected apartment properties' (an array)
  const selectedApartment = apartments.filter(
    (apartment) => apartment.id === id,
  )
  // verify that the selected apartment exists
  if (selectedApartment.length !== 0) {
    // extract the various apartment's properties from the array
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
    // declare an array of 0/5 stars
    let stars = [false, false, false, false, false]
    // modify the array for rating/5 stars
    for (let r = 0; r < rating; r++) {
      stars[r] = true
    }
    return (
      <section className="apartment">
        <Slideshow pictures={pictures} title={title} />
        <div className="top-infos">
          <div className="left-infos">
            {/* render apartment's title and location */}
            <div className="title-location">
              <h1>{title}</h1>
              <h2>{location}</h2>
              <ul className="tags">
                {/* render apartment's tags as a list */}
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right-infos">
            <div className="profile">
              {/* render profile */}
              <h2>{host.name}</h2>
              <img className="photo" src={host.picture} alt={host.name} />
            </div>
            <div className="rating">
              {/* render apartment's rating */}
              {stars.map((star, i) =>
                star ? (
                  // render rating as stars
                  <img key={i} src={fullStar} alt="note" />
                ) : (
                  // render empty stars for rating < 5
                  <img key={i} src={emptyStar} alt="note" />
                ),
              )}
            </div>
          </div>
        </div>
        <div className="bottom-infos">
          {/* render apartment's description and equipments */}
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
    // if the selected apartment doesn't exist (id not in the JSON) show the 404 page
  } else {
    return <Navigate to="*" replace={true} />
  }
}

export default Apartment
