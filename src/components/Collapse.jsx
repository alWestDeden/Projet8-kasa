import { useState } from 'react'
import arrow from '../assets/image/upDownArrow.svg'
import '../style/collapse.scss'

function Collapse({ titleText, contentText }) {
  // manage the collapsed state
  const [collapsed, setCollapse] = useState(false)
  // if collapsable content is a string render content as a paragraph
  if (typeof contentText === 'string') {
    return (
      <div className="collapse">
        <div
          className="title"
          // on click toggle the collapsed state
          onClick={() => {
            setCollapse(!collapsed)
          }}
        >
          <p className="titleText">{titleText}</p>
          {/* use classes for animation purpose */}
          <img
            className={collapsed ? 'arrow-open' : 'arrow-open arrow-close'}
            src={arrow}
            alt="flêche de navigation"
          />
        </div>
        {/* use classes for animation purpose */}
        <div
          className={
            collapsed ? 'content-text' : 'content-text hide-content-text'
          }
        >
          <p>{contentText}</p>
        </div>
        {/* when collapsed fill the empty space due to rounded corner */}
        <div className={collapsed ? 'layoutPurpose' : ''}></div>
      </div>
    )
    // if collapsable content is an array render content as a list
  } else if (typeof contentText === 'object' && contentText.length > 0) {
    return (
      <div className="collapse">
        <div
          className="title"
          // on click toggle the collapsed state
          onClick={() => {
            setCollapse(!collapsed)
          }}
        >
          <p className="titleText">{titleText}</p>
          {/* use classes for animation purpose */}
          <img
            className={collapsed ? 'arrow-open' : 'arrow-open arrow-close'}
            src={arrow}
            alt="flêche de navigation"
          />
        </div>
        {/* use classes for animation purpose */}
        <div
          className={
            collapsed ? 'content-text' : 'content-text hide-content-text'
          }
        >
          <ul>
            {/* generate a list of equipments */}
            {contentText.map((equipment) => (
              <li className="equipment" key={equipment}>
                {equipment}
              </li>
            ))}
          </ul>
        </div>
        {/* when collapsed fill the empty space due to rounded corner */}
        <div className={collapsed ? 'layoutPurpose' : ''}></div>
      </div>
    )
  }
}

export default Collapse
