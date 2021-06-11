import PropTypes from 'prop-types'
import React from 'react'

import me from '../images/me.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={me} alt="" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Robert Macaibay</h1>
        <p>
          Aspiring Software Engineer.
          <br />
          Specializing in Backend engines and web app development.
          <br />
          Familiarity with Java, C/C++, JavaScript, Node.js, {'&'} SQL.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
