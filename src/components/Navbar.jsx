import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const navItems = ['Home','Contact'];

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>🎓 Career Planner</div>
      <ul style={navListStyle}>
        {navItems.map((item) => (
          <li
            key={item}
            style={{
              ...navItemStyle,
              ...(active === item ? activeItemStyle : {}),
            }}
            onClick={() => setActive(item)}
            onMouseEnter={(e) => {
              e.target.style.color = '#fca311';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = active === item ? '#fca311' : '#fff';
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Styles
const navStyle = {
  background: '#0D1B2A',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  fontFamily: 'Segoe UI, sans-serif',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '2rem',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  fontSize: '1rem',
  cursor: 'pointer',
  color: '#fff',
  transition: 'color 0.3s ease',
};

const activeItemStyle = {
  color: '#fca311',
  borderBottom: '2px solid #fca311',
};

export default Navbar;
