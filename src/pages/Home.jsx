import '../style/Home.scss'
import '../style/global.scss'
import Banner from '../components/Banner'
import Card from '../components/Card'
// import data as 'apartments' from the JSON file
import apartments from '../assets/json/logements.json'

function Home() {
  return (
    <div className="home">
      <Banner key="landscape_1" landscape="landscape_1" />
      <section className="apartments">
        {/* render all apartment's cards from the JSON file */}
        {apartments.map((apartment) => (
          <Card
            key={apartment.id}
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
