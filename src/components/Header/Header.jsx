import React from 'react';
import PropTypes from 'prop-types';
import { DiGithubFull } from 'react-icons/di';
import { Link } from 'react-router-dom';
const Header = ({ title }) => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <DiGithubFull className="header-icon" />
            <h1 className="header-title">{title}</h1>
          </Link>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Github Jobs App',
};

export default Header;
