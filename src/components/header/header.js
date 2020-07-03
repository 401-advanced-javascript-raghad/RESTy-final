import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>RESTy</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/history'>History</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default Header;