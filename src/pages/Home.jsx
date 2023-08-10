import '../style/home.scss'
import '../style/global.scss'
import Banner from '../components/Banner'
import Card from '../components/Card'
import apartments from '../assets/json/logements.json'

function Home() {
  return (
    <div className="home">
      <Banner key="landscape_1" landscape="landscape_1" />
      <section className="apartments">
        {apartments.map((apartment) => (
          <Card
            key={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
