import { Link } from 'react-router-dom'
import RedLogo from '../assets/image/RedLogo.svg'
import '../style/header.scss'

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img src={RedLogo} alt="kasa logo" />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/infos">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
