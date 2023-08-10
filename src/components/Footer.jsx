import { Link } from 'react-router-dom'
import WhiteLogo from '../assets/image/WhiteLogo.svg'
import '../style/footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={WhiteLogo} alt="kasa logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
