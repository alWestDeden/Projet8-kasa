import '../style/card.scss'

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <div className="overlay">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Card
