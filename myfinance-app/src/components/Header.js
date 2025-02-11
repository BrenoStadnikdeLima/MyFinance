import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>MyFinance</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/transactions">Transações</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;