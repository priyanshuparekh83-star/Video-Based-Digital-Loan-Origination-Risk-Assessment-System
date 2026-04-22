import React, { useState } from 'react';
import { Link2, Mail, Smartphone, MessageCircle } from 'lucide-react';

const CustomerEntry = () => {
  const [linkGenerated, setLinkGenerated] = useState(false);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 className="title-glow" style={{ fontSize: '1.8rem' }}>Campaign Origination</h1>
          <p style={{ color: 'var(--text-muted)' }}>Generate secure video sessions for new applicants.</p>
        </div>
      </header>

      <div style={styles.grid}>
        <div className="glass-panel" style={{ flex: 1, maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '24px' }}>Initiate New Session</h3>
          
          <div className="input-group">
            <label className="input-label">Customer Mobile</label>
            <input type="text" className="input-field" placeholder="+1 (555) 000-0000" />
          </div>
          
          <div className="input-group">
            <label className="input-label">Customer Email</label>
            <input type="email" className="input-field" placeholder="customer@domain.com" />
          </div>

          <div className="input-group" style={{ marginBottom: '32px' }}>
            <label className="input-label">Initial Product Interest</label>
            <select className="input-field" style={{ appearance: 'none' }}>
              <option>Personal Loan</option>
              <option>Auto Loan</option>
              <option>Mortgage Refinance</option>
            </select>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '14px', fontSize: '1.1rem' }}
            onClick={() => setLinkGenerated(true)}
          >
            <Link2 size={20} /> Generate Secure Session Link
          </button>

          {linkGenerated && (
            <div style={styles.successBox} className="animate-pulse">
              <p style={{ color: 'var(--neon-green)', fontWeight: 'bold', marginBottom: '10px' }}>
                Secure Environment Provisioned!
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn btn-success" style={{ flex: 1 }}><Smartphone size={16}/> SMS</button>
                <button className="btn btn-success" style={{ flex: 1 }}><MessageCircle size={16}/> WhatsApp</button>
                <button className="btn btn-success" style={{ flex: 1 }}><Mail size={16}/> Email</button>
              </div>
            </div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '20px' }}>Active Campaign Metrics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
             <div className="glass-panel" style={{ textAlign: 'center', padding: '24px' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--neon-blue)', marginBottom: '8px' }}>64%</h2>
                <p className="subtitle">Link Click Rate</p>
             </div>
             <div className="glass-panel" style={{ textAlign: 'center', padding: '24px' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--neon-purple)', marginBottom: '8px' }}>82%</h2>
                <p className="subtitle">Video Drop-in Rate</p>
             </div>
             <div className="glass-panel" style={{ textAlign: 'center', padding: '24px', gridColumn: '1 / span 2' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--neon-green)', marginBottom: '8px' }}>12m 45s</h2>
                <p className="subtitle">Avg. Time to Offer Generated</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' },
  header: { marginBottom: '24px' },
  grid: { display: 'flex', gap: '40px', alignItems: 'flex-start' },
  successBox: {
    marginTop: '24px',
    padding: '16px',
    background: 'rgba(57, 255, 20, 0.05)',
    border: '1px solid var(--neon-green)',
    borderRadius: '8px'
  }
};

export default CustomerEntry;
