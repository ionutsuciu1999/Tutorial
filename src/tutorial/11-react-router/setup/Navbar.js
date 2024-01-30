import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/people">people</Link>
      </li>
      <li>
        <Link to="/error">error test</Link>
      </li>
    </ul>
  </nav>;
};

export default Navbar;
