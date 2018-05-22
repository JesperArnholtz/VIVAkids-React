import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/Home" activeClassName="active">Home</Link>
      {" | "}
      <Link to="/counter" activeClassName="active">Counter</Link>
    </nav>
  );
};


export default Header; 