// NavBar.tsx
// NavBar.tsx
import React from 'react';
import './Navbartest.css';

interface NavBarProps {
  barColor?: string; // Optional prop for customizable bar color
}

const NavBar: React.FC<NavBarProps> = ({ barColor = "#e66465" }) => {
  const navStyle = {
    backgroundColor: barColor,
  };

  return (
    <nav style={navStyle}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Github</a></li>
        <li><a href="/contact">Youtube</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
