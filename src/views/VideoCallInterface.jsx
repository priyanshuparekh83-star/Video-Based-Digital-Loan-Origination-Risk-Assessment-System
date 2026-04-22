import React, { useState, useEffect, useRef } from 'react';
import { Mic, Video, VideoOff, MicOff, PhoneOff, Maximize, UserCheck, Check } from 'lucide-react';

const STT_MOCK = [
  "Agent: Hello, this is your AI Origination agent. To begin, do I have your consent to record this video and audio for KYC purposes?",
  "User: Yes, I consent.",
  "Agent: Thank you. Let's confirm your employment details. Are you still working at Google as a Software Engineer?",
  "User: Yes, I am.",
  "Agent: Great. And what is your declared annual income for the loan assessment?",
  "User: It is 150,000 dollars."
];

const VideoCallInterface = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [transcript, setTranscript] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  // Simulate webcam access with a placeholder effect for demo if real webcam isn't available
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch(err => console.error("Webcam not accessed, using placeholder", err));
    }
  }, []);

  // Simulate STT typing effect
  useEffect(() => {
    if (currentLine < STT_MOCK.length) {
      const timer = setTimeout(() => {
        setTranscript(prev => [...prev, STT_MOCK[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 3000); // add a new line every 3 seconds for demo
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  // AI Overlay Simulation (Face detection box)
  useEffect(() => {
    const drawOverlay = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      // Set to match video dimensions roughly
      canvas.width = 640; 
      canvas.height = 480;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw simulated face box
      ctx.strokeStyle = '#45faff';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(canvas.width/2 - 100, canvas.height/2 - 120, 200, 250);
      
      // AI Metadata overlay
      ctx.fillStyle = 'rgba(22, 24, 30, 0.8)';
      ctx.fillRect(canvas.width/2 + 110, canvas.height/2 - 120, 150, 80);
      
      ctx.fillStyle = '#45faff';
      ctx.font = '12px "Space Grotesk"';
      ctx.fillText('EST. AGE: 28-32', canvas.width/2 + 120, canvas.height/2 - 100);
      ctx.fillText('LIVELINESS: 98%', canvas.width/2 + 120, canvas.height/2 - 80);
      ctx.fillStyle = '#39ff14';
      ctx.fillText('FACE MATCH: TRUE', canvas.width/2 + 120, canvas.height/2 - 60);

      // Scanning line
      const tId = window.requestAnimationFrame(drawOverlay);
      return tId;
    };
    const tId = window.requestAnimationFrame(drawOverlay);
    return () => window.cancelAnimationFrame(tId);
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 className="title-glow" style={{ fontSize: '1.8rem' }}>Live Verification Meeting</h1>
          <p style={{ color: 'var(--text-muted)' }}>Session ID: #123-AX9 • Subject: Jane Doe</p>
        </div>
      </header>

      <div style={styles.mainGrid}>
        {/* Left Column: Video */}
        <div style={styles.videoColumn}>
          <div style={styles.videoWrapper} className="glass-panel">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              style={styles.videoElement}
            />
            {/* Dark overlay if video is off, else transparent */}
            <div style={{...styles.videoOverlay, background: isVideoActive ? 'transparent' : '#000'}} />
            <canvas ref={canvasRef} style={styles.canvasOverlay} />
            
            <div style={styles.videoControls}>
              <button style={styles.controlBtn} onClick={() => setIsVideoActive(!isVideoActive)}>
                {isVideoActive ? <Video size={20} /> : <VideoOff size={20} />}
              </button>
              <button style={styles.controlBtn}>
                <Mic size={20} />
              </button>
              <button style={{...styles.controlBtn, background: 'var(--neon-red)', borderColor: 'var(--neon-red)'}}>
                <PhoneOff size={20} color="#fff" />
              </button>
              <button style={styles.controlBtn}>
                <Maximize size={20} />
              </button>
            </div>
          </div>
          
          <div className="glass-panel" style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '16px' }} className="title-glow">Geo-Location & Network</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p className="input-label">IP Address</p>
                <p style={{ fontFamily: 'monospace' }}>192.168.1.104</p>
              </div>
              <div>
                <p className="input-label">GPS Coords</p>
                <p style={{ fontFamily: 'monospace' }}>40.7128° N, 74.0060° W</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Transcript & Extract */}
        <div style={styles.dataColumn}>
          <div className="glass-panel" style={styles.transcriptBox}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mic size={18} color="var(--neon-blue)" /> Live Speech-to-Text
            </h3>
            <div style={styles.chatArea}>
              {transcript.map((line, idx) => {
                const isAgent = line.startsWith('Agent:');
                return (
                  <div key={idx} style={{
                    marginBottom: '12px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: isAgent ? 'rgba(69, 250, 255, 0.1)' : 'rgba(181, 44, 255, 0.1)',
                    borderLeft: `3px solid ${isAgent ? 'var(--neon-blue)' : 'var(--neon-purple)'}`
                  }}>
                    <p style={{ fontSize: '0.9rem' }}>{line}</p>
                  </div>
                )
              })}
              {currentLine < STT_MOCK.length && (
                <div className="animate-pulse" style={{ color: 'var(--neon-blue)', fontSize: '0.8rem' }}>Listening...</div>
              )}
            </div>
          </div>

          <div className="glass-panel" style={{ flex: 1 }}>
             <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserCheck size={18} color="var(--neon-green)" /> Auto-Extracted Data Form
            </h3>
            
            <div style={styles.formGrid}>
              <div className="input-group">
                <span className="input-label">Consent Given</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: currentLine > 1 ? 'var(--neon-green)' : 'gray' }}>
                  <Check size={16} /> {currentLine > 1 ? 'Yes (Auditable Trail active)' : 'Awaiting...'}
                </div>
              </div>
              
              <div className="input-group">
                <span className="input-label">Employer</span>
                <input 
                  type="text" 
                  className="input-field" 
                  value={currentLine > 3 ? "Google" : ""} 
                  readOnly 
                  style={{ borderColor: currentLine > 3 ? 'var(--neon-green)' : '' }}
                />
              </div>

               <div className="input-group">
                <span className="input-label">Declared Income</span>
                <input 
                  type="text" 
                  className="input-field" 
                  value={currentLine > 5 ? "$150,000" : ""} 
                  readOnly 
                  style={{ borderColor: currentLine > 5 ? 'var(--neon-green)' : '' }}
                />
              </div>
            </div>
          </div>
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
    flexDirection: 'column'
  },
  header: {
    marginBottom: '24px'
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(400px, 1.2fr) 1fr',
    gap: '24px',
    flex: 1
  },
  videoColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  videoWrapper: {
    position: 'relative',
    flex: 1,
    minHeight: '400px',
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000'
  },
  videoElement: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  videoOverlay: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    pointerEvents: 'none'
  },
  canvasOverlay: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    pointerEvents: 'none'
  },
  videoControls: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '16px',
    background: 'rgba(0,0,0,0.6)',
    padding: '10px 20px',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)'
  },
  controlBtn: {
    width: '40px', height: '40px',
    borderRadius: '50%',
    border: '1px solid var(--panel-border)',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  dataColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  transcriptBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  chatArea: {
    flex: 1,
    overflowY: 'auto',
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '8px',
    padding: '16px'
  },
  formGrid: {
    display: 'grid',
    gap: '16px'
  }
};

export default VideoCallInterface;
