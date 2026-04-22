import React from 'react';
import { Activity, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const StatCard = ({ title, value, icon, trend, glowColor }) => (
  <div style={{...styles.statCardContainer, boxShadow: `0 8px 32px 0 rgba(${glowColor}, 0.05)`}} className="glass-panel">
    <div style={styles.statHeader}>
      <span className="subtitle">{title}</span>
      {icon}
    </div>
    <div style={styles.statBody}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '10px 0' }}>{value}</h2>
      <span style={{ color: trend > 0 ? 'var(--neon-green)' : 'var(--neon-red)', fontSize: '0.9rem' }}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from yesterday
      </span>
    </div>
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: `rgb(${glowColor})`,
      boxShadow: `0 0 10px rgb(${glowColor})`,
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px'
    }}></div>
  </div>
);

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 className="title-glow" style={{ fontSize: '2rem' }}>Origination Command Center</h1>
          <p style={{ color: 'var(--text-muted)' }}>Real-time systemic overview of video-based AI onboarding.</p>
        </div>
        <button className="btn btn-primary">
          <Activity size={18} /> Generate EOD Report
        </button>
      </header>

      <div style={styles.grid}>
        <StatCard title="Active Campaigns" value="1,204" icon={<Users size={24} color="var(--neon-blue)" />} trend={12.5} glowColor="69, 250, 255" />
        <StatCard title="Live Video Sessions" value="48" icon={<Activity size={24} color="var(--neon-purple)" />} trend={5.2} glowColor="181, 44, 255" />
        <StatCard title="Auto-Approval Rate" value="76%" icon={<CheckCircle size={24} color="var(--neon-green)" />} trend={2.1} glowColor="57, 255, 20" />
        <StatCard title="High-Risk Flags" value="12" icon={<AlertTriangle size={24} color="var(--neon-red)" />} trend={-1.5} glowColor="255, 49, 49" />
      </div>

      <div style={styles.chartArea}>
        <div style={{ flex: 2 }} className="glass-panel">
          <h3 style={{ marginBottom: '20px' }}>Geographic Onboarding Heatmap</h3>
          <div style={styles.placeholderBox}>
             <p>[Interactive WebGL Map Visualization Placeholder]</p>
          </div>
        </div>
        
        <div style={{ flex: 1 }} className="glass-panel">
          <h3 style={{ marginBottom: '20px' }}>Recent Risk Alerts</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
             {[1,2,3,4].map(i => (
               <li key={i} style={styles.alertItem}>
                 <div style={styles.alertDot}></div>
                 <div>
                   <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>Face/ID Mismatch (Session #89{i})</p>
                   <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2 mins ago • Confidence: 94%</p>
                 </div>
               </li>
             ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px'
  },
  statCardContainer: {
    position: 'relative',
    paddingBottom: '30px', 
    overflow: 'hidden'
  },
  statHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statBody: {
    marginTop: '10px'
  },
  chartArea: {
    display: 'flex',
    gap: '24px',
    flex: 1,
    minHeight: '300px'
  },
  placeholderBox: {
    width: '100%',
    height: '250px',
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '8px',
    border: '1px dashed var(--panel-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)'
  },
  alertItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.05)'
  },
  alertDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'var(--neon-red)',
    boxShadow: '0 0 8px var(--neon-red)',
    marginTop: '4px'
  }
};

export default Dashboard;
