import React from 'react';
import { BrainCircuit, ShieldAlert, Database, FileDigit } from 'lucide-react';

const RiskAssessment = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 className="title-glow" style={{ fontSize: '1.8rem' }}>AI Intelligence & Risk Assessment</h1>
          <p style={{ color: 'var(--text-muted)' }}>Session ID: #123-AX9 • Subject: Jane Doe</p>
        </div>
      </header>

      <div style={styles.grid}>
        {/* Left Column: LLM Evaluation */}
        <div className="glass-panel" style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BrainCircuit size={20} color="var(--neon-purple)" />
            LLM Conversational Analysis
          </h3>
          
          <div style={styles.scoreCard}>
            <div style={styles.scoreItem}>
              <span className="subtitle">Intent Confidence</span>
              <div style={styles.progressBarBg}>
                 <div style={{...styles.progressBarFill, width: '95%', background: 'var(--neon-green)'}}></div>
              </div>
              <span style={{color: 'var(--neon-green)'}}>95%</span>
            </div>
            
            <div style={styles.scoreItem}>
              <span className="subtitle">Sentiment / Stress</span>
              <div style={styles.progressBarBg}>
                 <div style={{...styles.progressBarFill, width: '12%', background: 'var(--neon-blue)'}}></div>
              </div>
              <span style={{color: 'var(--text-main)'}}>Normal</span>
            </div>
          </div>

          <div style={styles.insightBox}>
            <p className="input-label" style={{color: 'var(--neon-purple)'}}>CONTEXTUAL INSIGHT</p>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
              The customer demonstrated clear understanding of the loan terms. Responses align tightly with the declared text. No linguistic markers of coercion or fraud detected during the consent phase. Income level conceptually aligns with standard engineering roles.
            </p>
          </div>
        </div>

        {/* Right Column: Hard Data & Policy */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="glass-panel">
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Database size={20} color="var(--neon-blue)" />
              Bureau Data Lookup
            </h3>
            <div style={styles.dataGrid}>
              <div><span className="subtitle">Credit Score</span><p style={{ fontSize: '1.2rem', color: 'var(--neon-green)' }}>780</p></div>
              <div><span className="subtitle">Existing Debt</span><p style={{ fontSize: '1.2rem' }}>$12,400</p></div>
              <div><span className="subtitle">Delinquencies</span><p style={{ fontSize: '1.2rem' }}>0 (Last 24m)</p></div>
            </div>
          </div>

          <div className="glass-panel" style={{ flex: 1 }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldAlert size={20} color="var(--neon-red)" />
              Policy Engine Execution
            </h3>
            <ul style={styles.policyList}>
              <li style={styles.policyItem}>
                <span>Face matched with provided ID</span>
                <span style={styles.passBadge}>PASS</span>
              </li>
              <li style={styles.policyItem}>
                <span>Age constraint (> 21 yrs)</span>
                <span style={styles.passBadge}>PASS</span>
              </li>
              <li style={styles.policyItem}>
                <span>Location constraint (Domestic)</span>
                <span style={styles.passBadge}>PASS</span>
              </li>
              <li style={styles.policyItem}>
                <span>Income to EMI Propensity</span>
                <span style={{...styles.passBadge, background: 'rgba(69,250,255,0.1)', color: 'var(--neon-blue)', border: '1px solid var(--neon-blue)'}}>EVALUATING</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn btn-primary">
          Proceed to Offer Generation <FileDigit size={16} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' },
  header: { marginBottom: '24px' },
  grid: { display: 'flex', gap: '24px', flex: 1 },
  scoreCard: { display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' },
  scoreItem: { display: 'flex', alignItems: 'center', gap: '16px' },
  progressBarBg: { flex: 1, height: '8px', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: '4px' },
  insightBox: { background: 'rgba(181, 44, 255, 0.05)', border: '1px solid rgba(181, 44, 255, 0.2)', padding: '16px', borderRadius: '8px' },
  dataGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' },
  policyList: { listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' },
  policyItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  passBadge: { background: 'rgba(57,255,20,0.1)', color: 'var(--neon-green)', border: '1px solid var(--neon-green)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }
};

export default RiskAssessment;
