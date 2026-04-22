import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const OfferCard = ({ amount, tenure, eir, emi, selected, onClick }) => (
  <div 
    onClick={onClick}
    style={{
      ...styles.offerCard, 
      border: selected ? '2px solid var(--neon-blue)' : '1px solid var(--panel-border)',
      background: selected ? 'rgba(69, 250, 255, 0.05)' : 'var(--panel-bg)',
      boxShadow: selected ? '0 0 20px rgba(69, 250, 255, 0.15)' : 'none'
    }} 
    className="glass-panel"
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
       <h3 style={{ fontSize: '1.4rem' }}>{amount}</h3>
       {selected && <CheckCircle size={20} color="var(--neon-blue)" />}
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={styles.offerRow}><span className="subtitle">Tenure</span><span>{tenure} Months</span></div>
      <div style={styles.offerRow}><span className="subtitle">Interest (EIR)</span><span style={{ color: 'var(--neon-green)' }}>{eir}%</span></div>
      <div style={styles.offerRow}><span className="subtitle">Est. EMI</span><span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{emi}</span></div>
    </div>
  </div>
);

const OfferGeneration = () => {
  const [selectedOffer, setSelectedOffer] = useState(1);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 className="title-glow" style={{ fontSize: '1.8rem' }}>Intelligent Offer Generation</h1>
          <p style={{ color: 'var(--text-muted)' }}>Dynamically configured based on multi-modal risk assessment signals.</p>
        </div>
      </header>

      <div style={styles.grid}>
        <div style={styles.mainArea}>
           <h3 style={{ marginBottom: '20px' }}>Recommended Structures</h3>
           <div style={styles.offerGrid}>
             <OfferCard 
               amount="$25,000" tenure={36} eir={11.5} emi="$824.00" 
               selected={selectedOffer === 0} onClick={() => setSelectedOffer(0)}
             />
             <OfferCard 
               amount="$35,000" tenure={48} eir={10.9} emi="$899.00" 
               selected={selectedOffer === 1} onClick={() => setSelectedOffer(1)} 
             />
             <OfferCard 
               amount="$50,000" tenure={60} eir={12.5} emi="$1,124.00" 
               selected={selectedOffer === 2} onClick={() => setSelectedOffer(2)}
             />
           </div>

           <div className="glass-panel" style={{ marginTop: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ color: 'var(--neon-green)' }}>Ready to Dispatch</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>This offer will be instantly pushed to the customer's interface.</p>
                </div>
                <button className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '1rem' }}>
                   Issue Final Offer <Send size={18} />
                </button>
              </div>
           </div>
        </div>

        <div style={styles.sideArea} className="glass-panel">
          <h3 style={{ marginBottom: '20px', borderBottom: '1px solid var(--panel-border)', paddingBottom: '10px' }}>Audit Trail Summary</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li>
               <span className="subtitle">Video STT Consent</span>
               <p style={{ color: 'var(--neon-green)' }}>Captured & Verified</p>
            </li>
            <li>
               <span className="subtitle">Computer Vision Scan</span>
               <p style={{ color: 'var(--neon-green)' }}>Match Confirmed (98.4%)</p>
            </li>
            <li>
               <span className="subtitle">LLM Risk Band</span>
               <p style={{ color: 'var(--neon-blue)' }}>Tier A (Low Risk)</p>
            </li>
            <li>
               <span className="subtitle">Bureau Sync File</span>
               <p>Attached (#B-89912)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' },
  header: { marginBottom: '24px' },
  grid: { display: 'flex', gap: '24px', flex: 1 },
  mainArea: { flex: 2, display: 'flex', flexDirection: 'column' },
  sideArea: { flex: 1, height: 'fit-content' },
  offerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' },
  offerCard: { cursor: 'pointer', transition: 'all 0.3s' },
  offerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
};

export default OfferGeneration;
