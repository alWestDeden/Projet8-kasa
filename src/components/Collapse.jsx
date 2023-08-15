import { useState } from 'react'
import arrow from '../assets/image/upDownArrow.svg'
import '../style/collapse.scss'

function Collapse({ titleText, contentText }) {
  const [collapsed, setCollapse] = useState(false)
  if (typeof contentText === 'string') {
    return (
      <div className="collapse">
        <div
          className="title"
          onClick={() => {
            setCollapse(!collapsed)
          }}
        >
          <p className="titleText">{titleText}</p>
          <img
            className={collapsed ? 'arrowOpen' : 'arrowOpen arrowClose'}
            src={arrow}
            alt="flêche de navigation"
          />
        </div>
        <div
          className={collapsed ? 'contentText' : 'contentText hideContentText'}
        >
          <p>{contentText}</p>
        </div>
        <div className={collapsed ? 'layoutPurpose' : ''}></div>
      </div>
    )
  } else {
    return (
      <div className="collapse">
        <div
          className="title"
          onClick={() => {
            setCollapse(!collapsed)
          }}
        >
          <p className="titleText">{titleText}</p>
          <img
            className={collapsed ? 'arrowOpen' : 'arrowOpen arrowClose'}
            src={arrow}
            alt="flêche de navigation"
          />
        </div>
        <div
          className={collapsed ? 'contentText' : 'contentText hideContentText'}
        >
          <ul>
            {contentText.map((equipment) => (
              <li className="equipment" key={equipment}>
                {equipment}
              </li>
            ))}
          </ul>
        </div>
        <div className={collapsed ? 'layoutPurpose' : ''}></div>
      </div>
    )
  }
}

export default Collapse
