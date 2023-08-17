import { Link } from 'react-router-dom'
import RedLogo from '../assets/image/RedLogo.svg'
import '../style/header.scss'

function Header() {
  return (
    <nav className="header">
      {/* link to the Home's URL */}
      <Link to="/">
        <img src={RedLogo} alt="kasa logo" />
      </Link>
      <div>
        {/* link to the Home's URL */}
        <Link to="/">Accueil</Link>
        {/* link to the Info' URL */}
        <Link to="/infos">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
