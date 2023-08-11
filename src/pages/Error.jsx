import { Link } from 'react-router-dom'
import '../style/Error.scss'

function Error() {
  return (
    <div className="error">
      <p className="code">404</p>
      <p className="alert">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retournez sur la page d'acceuil</Link>
    </div>
  )
}
export default Error
