import '../style/card.scss'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    <Link className="link" to={`/apartment/${id}`}>
      <div className="card">
        <img src={cover} alt={title} />
        <div className="overlay">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
