import PropTypes from 'prop-types';
import React from 'react';

import me from '../images/me.png';
import resume from '../docs/macaibay-resume.pdf';

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
          Familiarity with Java, C, C++, JavaScript, React, {'&'} SQL.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro');
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about');
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('study');
            }}
          >
            Study
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work');
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects');
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.open(resume);
            }}
          >
            Résumé
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
