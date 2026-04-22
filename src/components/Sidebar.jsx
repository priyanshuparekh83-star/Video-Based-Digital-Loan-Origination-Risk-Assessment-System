import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Video, ShieldAlert, BadgeDollarSign, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div style={styles.sidebar} className="glass-panel">
      <div style={styles.logoContainer}>
        <div style={styles.logoGlow}></div>
        <h2 className="title-glow" style={{ fontSize: '1.2rem', zIndex: 1 }}>Originate.AI</h2>
      </div>

      <nav style={styles.nav}>
        <p className="subtitle" style={{ paddingLeft: '16px', marginBottom: '12px' }}>Menu</p>
        
        <NavLink 
          to="/" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/campaign" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink}
        >
          <Users size={20} />
          <span>Campaigns</span>
        </NavLink>

        <p className="subtitle" style={{ paddingLeft: '16px', marginTop: '24px', marginBottom: '12px' }}>Active Sessions</p>

        <NavLink 
          to="/session/123/video" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeVideoLink } : styles.navLink}
        >
          <div style={styles.liveIndicator}></div>
          <Video size={20} />
          <span>Live Call #123</span>
        </NavLink>
        
        <NavLink 
          to="/session/123/risk" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink}
        >
          <ShieldAlert size={20} />
          <span>Risk Assess</span>
        </NavLink>
        
        <NavLink 
          to="/session/123/offer" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink}
        >
          <BadgeDollarSign size={20} />
          <span>Generate Offer</span>
        </NavLink>
      </nav>

      <div style={styles.footer}>
        <div style={styles.navLink}>
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '260px',
    height: 'calc(100vh - 40px)',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  logoContainer: {
    padding: '20px 16px',
    marginBottom: '20px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid var(--panel-border)'
  },
  logoGlow: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    background: 'var(--neon-blue)',
    filter: 'blur(25px)',
    opacity: 0.5,
    borderRadius: '50%',
    left: '10px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'all 0.2s',
    cursor: 'pointer'
  },
  activeNavLink: {
    background: 'rgba(69, 250, 255, 0.1)',
    color: 'white',
    borderLeft: '3px solid var(--neon-blue)'
  },
  activeVideoLink: {
    background: 'rgba(255, 49, 49, 0.1)',
    color: 'white',
    borderLeft: '3px solid var(--neon-red)'
  },
  liveIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--neon-red)',
    boxShadow: '0 0 8px var(--neon-red)',
    animation: 'pulse 1.5s infinite ease-in-out'
  },
  footer: {
    marginTop: 'auto',
    borderTop: '1px solid var(--panel-border)',
    paddingTop: '16px'
  }
};

export default Sidebar;
