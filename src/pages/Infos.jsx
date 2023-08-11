import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import '../style/Infos.scss'

function Infos() {
  const infos = [
    {
      titleText: 'Fiabilité',
      contentText:
        'Le annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      titleText: 'Respect',
      contentText:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      titleText: 'Service',
      contentText:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      titleText: 'Sécurité',
      contentText:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
    {
      titleText: 'array test',
      contentText: [
        'Bouilloire',
        'SDB',
        'Cuisine équipée',
        'Frigo',
        'WIFI',
        'TV',
        'Cintres',
        'Four',
        'Micro-Ondes',
        'Parking',
      ],
    },
  ]
  return (
    <div>
      <div>
        <Banner landscape="landscape_2" />
      </div>
      <div className="infos">
        {infos.map((info) => (
          <Collapse
            key={info.titleText}
            titleText={info.titleText}
            contentText={info.contentText}
          />
        ))}
      </div>
    </div>
  )
}

export default Infos
