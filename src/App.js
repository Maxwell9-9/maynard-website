import React, { useState, useRef, useEffect } from 'react';

// Note frequencies
const noteFrequencies = {
    'a': 261.63, 's': 293.66, 'd': 329.63, 'f': 349.23,
    'g': 392.00, 'h': 440.00, 'j': 493.88, 'k': 523.25
};

const styles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        }
        
        .vst-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 30px;
            padding: 40px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
        const TrumpetSVG = ({ onValveDown }) => (
            <svg className="trumpet-svg" viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',filter:'drop-shadow(0 10px 20px rgba(0,0,0,0.4))'}}>
                <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#B8860B"/>
                        <stop offset="30%" stopColor="#FFD700"/>
                        <stop offset="50%" stopColor="#FFF8DC"/>
                        <stop offset="70%" stopColor="#FFD700"/>
                        <stop offset="100%" stopColor="#B8860B"/>
                    </linearGradient>
                    <linearGradient id="valveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B7508"/>
                        <stop offset="50%" stopColor="#FFD700"/>
                        <stop offset="100%" stopColor="#8B7508"/>
                    </linearGradient>
                </defs>
                <rect x="10" y="52" width="80" height="16" rx="8" fill="url(#goldGrad)"/>
                <rect x="90" y="35" width="15" height="50" rx="2" fill="url(#goldGrad)" stroke="#8B7508" strokeWidth="1"/>
                <rect x="110" y="35" width="15" height="50" rx="2" fill="url(#goldGrad)" stroke="#8B7508" strokeWidth="1"/>
                <rect x="130" y="35" width="15" height="50" rx="2" fill="url(#goldGrad)" stroke="#8B7508" strokeWidth="1"/>
                <g className="valve" id="valve1" data-valve="1" onMouseDown={() => onValveDown(0)}>
                    <rect x="92" y="15" width="11" height="25" rx="3" fill="url(#valveGrad)" stroke="#8B7508" strokeWidth="1"/>
                    <circle cx="97.5" cy="12" r="4" fill="#FFF8DC"/>
                </g>
                <g className="valve" id="valve2" data-valve="2" onMouseDown={() => onValveDown(1)}>
                    <rect x="112" y="15" width="11" height="25" rx="3" fill="url(#valveGrad)" stroke="#8B7508" strokeWidth="1"/>
                    <circle cx="117.5" cy="12" r="4" fill="#FFF8DC"/>
                </g>
                <g className="valve" id="valve3" data-valve="3" onMouseDown={() => onValveDown(2)}>
                    <rect x="132" y="15" width="11" height="25" rx="3" fill="url(#valveGrad)" stroke="#8B7508" strokeWidth="1"/>
                    <circle cx="137.5" cy="12" r="4" fill="#FFF8DC"/>
                </g>
                <path d="M 145 60 Q 180 60, 180 40 Q 180 20, 200 20 L 250 20" fill="none" stroke="url(#goldGrad)" strokeWidth="16" strokeLinecap="round"/>
                <path d="M 145 60 Q 180 60, 180 80 Q 180 100, 200 100 L 250 100" fill="none" stroke="url(#goldGrad)" strokeWidth="16" strokeLinecap="round"/>
                <path d="M 250 20 Q 300 20, 350 30 Q 400 40, 450 20" fill="none" stroke="url(#goldGrad)" strokeWidth="14" strokeLinecap="round"/>
                <path d="M 250 100 Q 300 100, 350 90 Q 400 80, 450 100" fill="none" stroke="url(#goldGrad)" strokeWidth="14" strokeLinecap="round"/>
                <ellipse cx="475" cy="60" rx="25" ry="45" fill="url(#goldGrad)" stroke="#8B7508" strokeWidth="2"/>
                <ellipse cx="475" cy="60" rx="20" ry="35" fill="#4a3c00" opacity="0.3"/>
                <rect x="5" y="55" width="10" height="10" rx="2" fill="#C0C0C0"/>
                <rect x="0" y="57" width="5" height="6" rx="1" fill="#A0A0A0"/>
                <line x1="160" y1="85" x2="170" y2="95" stroke="#8B7508" strokeWidth="2"/>
                <circle cx="170" cy="95" r="3" fill="#C0C0C0"/>
            </svg>
        );
            height: 120px;
            position: relative;
            transition: transform 0.3s ease;
            cursor: pointer;
        }
        .trumpet:hover { transform: scale(1.02); }
        
        .valve { cursor: pointer; transition: transform 0.1s; }
        .valve:active { transform: translateY(5px); }
        .valve-pressed { transform: translateY(8px) !important; }
        
        .controls-section {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
            margin-top: 30px;
        }
        
        .control-group {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .control-title {
            color: white;
            font-size: 1.2em;
            margin-bottom: 20px;
            text-align: center;
            font-weight: 600;
            letter-spacing: 1px;
        }
        
        .articulation-options {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        
        .articulation-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 15px;
            padding: 15px;
            cursor: pointer;
            transition: all 0.3s;
            color: white;
            text-align: center;
            min-width: 80px;
            user-select: none;
        }
        .articulation-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        .articulation-btn.active {
            background: rgba(255, 215, 0, 0.3);
            border-color: #ffd700;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
        }
        
        .music-symbol { font-size: 2em; margin-bottom: 5px; }
        .articulation-label { font-size: 0.9em; opacity: 0.9; }
        
        .mute-control {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        
        .toggle-switch {
            position: relative;
            width: 80px;
            height: 40px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 20px;
            cursor: pointer;
            transition: background 0.3s;
        }
        .toggle-switch.active { background: #ffa500; }
        
        .toggle-slider {
            position: absolute;
            top: 4px;
            left: 4px;
            width: 32px;
            height: 32px;
            background: white;
            border-radius: 50%;
            transition: transform 0.3s;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        .toggle-switch.active .toggle-slider { transform: translateX(40px); }
        
        .mute-label { color: white; font-size: 1.1em; font-weight: 500; }
        
        .knobs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }
        
        .knob-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        
        .knob {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: conic-gradient(from 180deg, #1a1a1a 0deg, #333 180deg, #1a1a1a 360deg);
            position: relative;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
            border: 3px solid #444;
        }
        .knob::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 4px;
            height: 25px;
            background: white;
            transform: translate(-50%, -100%);
            transform-origin: bottom center;
            border-radius: 2px;
        }
        
        .knob-label { color: white; font-size: 0.9em; font-weight: 500; }
        .knob-value { color: #ffd700; font-size: 0.8em; font-family: monospace; }
        
        .dynamics-options {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .dynamic-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 10px 18px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1.2em;
            font-family: 'Times New Roman', serif;
            font-style: italic;
            min-width: 50px;
        }
        .dynamic-btn:hover { background: rgba(255, 255, 255, 0.2); }
        .dynamic-btn.active {
            background: rgba(255, 215, 0, 0.3);
            border-color: #ffd700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
        }
        
        .eq-container {
            grid-column: span 3;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .eq-title {
            color: white;
            font-size: 1.5em;
            text-align: center;
            margin-bottom: 25px;
            font-weight: 600;
            letter-spacing: 2px;
        }
        
        .eq-bands {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            height: 150px;
            gap: 30px;
        }
        
        .eq-band {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            flex: 1;
        }
        
        .eq-slider {
            width: 60px;
            height: 120px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 30px;
            position: relative;
            cursor: pointer;
            overflow: hidden;
        }
        
        .eq-fill {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, #667eea, #764ba2);
            border-radius: 0 0 30px 30px;
            transition: height 0.1s;
        }
        
        .eq-knob {
            position: absolute;
            width: 50px;
            height: 50px;
            background: radial-gradient(circle at 30% 30%, #444, #111);
            border-radius: 50%;
            left: 5px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            border: 2px solid #555;
            transition: bottom 0.1s;
            pointer-events: none;
        }
        
        .eq-label { color: white; font-weight: 600; font-size: 1.1em; }
        .eq-value { color: #ffd700; font-family: monospace; font-size: 0.9em; }
        
        .visualizer {
            height: 60px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            margin-top: 20px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 3px;
            padding: 10px;
            overflow: hidden;
        }
        
        .bar {
            width: 6px;
            background: linear-gradient(to top, #667eea, #ffd700);
            border-radius: 3px;
            transition: height 0.05s ease;
            height: 5px;
        }
        
        .keyboard-hint {
            margin-top: 30px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 15px;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
        }
        .keyboard-hint h3 { margin-bottom: 10px; color: white; }
        
        .key {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            padding: 5px 10px;
            border-radius: 5px;
            margin: 2px;
            font-family: monospace;
            border: 1px solid rgba(255, 255, 255, 0.3);
            font-size: 0.9em;
        }
        
        @media (max-width: 768px) {
            .controls-section { grid-template-columns: 1fr; }
            .eq-container { grid-column: span 1; }
            .trumpet { width: 350px; height: 84px; }
            .header h1 { font-size: 1.8em; }
        }
    `;

    // SVG Trumpet
    const trumpetSVG = `
        <svg class="trumpet-svg" viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 10px 20px rgba(0,0,0,0.4));">
            <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#B8860B"/>
                    <stop offset="30%" style="stop-color:#FFD700"/>
                    <stop offset="50%" style="stop-color:#FFF8DC"/>
                    <stop offset="70%" style="stop-color:#FFD700"/>
                    <stop offset="100%" style="stop-color:#B8860B"/>
                </linearGradient>
                <linearGradient id="valveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#8B7508"/>
                    <stop offset="50%" style="stop-color:#FFD700"/>
                    <stop offset="100%" style="stop-color:#8B7508"/>
                </linearGradient>
            </defs>
            
            <rect x="10" y="52" width="80" height="16" rx="8" fill="url(#goldGrad)"/>
            <rect x="90" y="35" width="15" height="50" rx="2" fill="url(#goldGrad)" stroke="#8B7508" stroke-width="1"/>
            <rect x="110" y="35" width="15" height="50" rx="2" fill="url(#goldGrad)" stroke="#8B7508" stroke-width="1"/>
            <rect x="130" y="35" width="15" height="50" rx="2" fill="url(#goldGrad)" stroke="#8B7508" stroke-width="1"/>
            
            <g class="valve" id="valve1" data-valve="1">
                <rect x="92" y="15" width="11" height="25" rx="3" fill="url(#valveGrad)" stroke="#8B7508" stroke-width="1"/>
                <circle cx="97.5" cy="12" r="4" fill="#FFF8DC"/>
            </g>
            <g class="valve" id="valve2" data-valve="2">
                <rect x="112" y="15" width="11" height="25" rx="3" fill="url(#valveGrad)" stroke="#8B7508" stroke-width="1"/>
                <circle cx="117.5" cy="12" r="4" fill="#FFF8DC"/>
            </g>
            <g class="valve" id="valve3" data-valve="3">
                <rect x="132" y="15" width="11" height="25" rx="3" fill="url(#valveGrad)" stroke="#8B7508" stroke-width="1"/>
                <circle cx="137.5" cy="12" r="4" fill="#FFF8DC"/>
            </g>
            
            <path d="M 145 60 Q 180 60, 180 40 Q 180 20, 200 20 L 250 20" fill="none" stroke="url(#goldGrad)" stroke-width="16" stroke-linecap="round"/>
            <path d="M 145 60 Q 180 60, 180 80 Q 180 100, 200 100 L 250 100" fill="none" stroke="url(#goldGrad)" stroke-width="16" stroke-linecap="round"/>
            <path d="M 250 20 Q 300 20, 350 30 Q 400 40, 450 20" fill="none" stroke="url(#goldGrad)" stroke-width="14" stroke-linecap="round"/>
            <path d="M 250 100 Q 300 100, 350 90 Q 400 80, 450 100" fill="none" stroke="url(#goldGrad)" stroke-width="14" stroke-linecap="round"/>
            
            <ellipse cx="475" cy="60" rx="25" ry="45" fill="url(#goldGrad)" stroke="#8B7508" stroke-width="2"/>
            <ellipse cx="475" cy="60" rx="20" ry="35" fill="#4a3c00" opacity="0.3"/>
            
            <rect x="5" y="55" width="10" height="10" rx="2" fill="#C0C0C0"/>
            <rect x="0" y="57" width="5" height="6" rx="1" fill="#A0A0A0"/>
            <line x1="160" y1="85" x2="170" y2="95" stroke="#8B7508" stroke-width="2"/>
            <circle cx="170" cy="95" r="3" fill="#C0C0C0"/>
        </svg>
    `;

function useAudioContext(power) {
    const audioCtxRef = useRef(null);
    useEffect(() => {
        if (power && !audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
    }, [power]);
    return audioCtxRef.current;
}

function animateBars(barRefs) {
    barRefs.current.forEach((bar, i) => {
        if (!bar) return;
        setTimeout(() => {
            const height = Math.random() * 50 + 10;
            bar.style.height = height + 'px';
            setTimeout(() => { bar.style.height = '5px'; }, 200);
        }, i * 20);
    });
}

function playTrumpet({
    power, audioContext, eq, gain, reverb, dynamics, articulation, mute, frequency = 440, duration = 0.3, animateBarsFn
}) {
    if (!power || !audioContext) return;
    const ctx = audioContext;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800 + (eq.high * 10), ctx.currentTime);
    filter.Q.value = 5;
    const now = ctx.currentTime;
    const dynGain = dynamics === 'p' ? 0.2 : dynamics === 'mf' ? 0.5 : dynamics === 'f' ? 0.8 : 1.0;
    const finalGain = (gain / 100) * dynGain;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(finalGain, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(finalGain * 0.7, now + duration * 0.3);
    if (articulation === 'staccato') {
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration * 0.5);
    } else {
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
    }
    if (mute) {
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 5;
        lfoGain.gain.value = 300;
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start(now);
        lfo.stop(now + duration);
    }
    if (reverb > 0) {
        const delay = ctx.createDelay();
        const feedback = ctx.createGain();
        delay.delayTime.value = 0.3;
        feedback.gain.value = reverb / 200;
        gainNode.connect(delay);
        delay.connect(feedback);
        feedback.connect(delay);
        delay.connect(ctx.destination);
    }
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
    if (animateBarsFn) animateBarsFn();
}


function App() {
    const [power, setPower] = useState(false);
    const [articulation, setArticulation] = useState('legato');
    const [mute, setMute] = useState(false);
    const [gain, setGain] = useState(70);
    const [reverb, setReverb] = useState(40);
    const [dynamics, setDynamics] = useState('mf');
    const [eq, setEq] = useState({ low: 60, mid: 50, high: 70 });
    const [valves, setValves] = useState([false, false, false]);
    const [dragged, setDragged] = useState(null);
    const [dragStart, setDragStart] = useState({ y: 0, value: 0, param: null });
    const barRefs = useRef([]);
    const audioContext = useAudioContext(power);

    // Add styles on mount
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        return () => { document.head.removeChild(styleSheet); };
    }, []);

    // Keyboard controls
    useEffect(() => {
        function handleKeyDown(e) {
            if (!power) return;
            const key = e.key.toLowerCase();
            if (noteFrequencies[key]) {
                playTrumpet({
                    power, audioContext, eq, gain, reverb, dynamics, articulation, mute,
                    frequency: noteFrequencies[key],
                    duration: articulation === 'staccato' ? 0.2 : 0.5,
                    animateBarsFn: () => animateBars(barRefs)
                });
            }
            if (key >= '1' && key <= '3') {
                const valveNum = parseInt(key) - 1;
                setValves(v => v.map((val, i) => i === valveNum ? true : val));
                playTrumpet({
                    power, audioContext, eq, gain, reverb, dynamics, articulation, mute,
                    frequency: 440 + (valveNum * 50),
                    duration: 0.1,
                    animateBarsFn: () => animateBars(barRefs)
                });
            }
        }
        function handleKeyUp(e) {
            const key = e.key.toLowerCase();
            if (key >= '1' && key <= '3') {
                const valveNum = parseInt(key) - 1;
                setValves(v => v.map((val, i) => i === valveNum ? false : val));
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [power, audioContext, eq, gain, reverb, dynamics, articulation, mute]);

    // Mouse drag for knobs and EQ
    useEffect(() => {
        function handleMouseMove(e) {
            if (!dragged) return;
            if (dragged.type === 'knob') {
                const delta = (dragStart.y - e.clientY) * 0.5;
                let newValue = Math.max(0, Math.min(100, dragStart.value + delta));
                if (dragStart.param === 'gain') setGain(Math.round(newValue));
                if (dragStart.param === 'reverb') setReverb(Math.round(newValue));
            } else if (dragged.type === 'eq') {
                const rect = dragged.ref.getBoundingClientRect();
                const y = e.clientY - rect.top;
                const height = rect.height;
                const percentage = Math.max(0, Math.min(100, 100 - (y / height) * 100));
                setEq(eq => ({ ...eq, [dragged.param]: percentage }));
            }
        }
        function handleMouseUp() {
            setDragged(null);
        }
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragged, dragStart]);

    // Valve click handler
    function handleValveDown(valveNum) {
        setValves(v => v.map((val, i) => i === valveNum ? !val : val));
        playTrumpet({
            power, audioContext, eq, gain, reverb, dynamics, articulation, mute,
            frequency: 440 + (valveNum * 50),
            duration: 0.2,
            animateBarsFn: () => animateBars(barRefs)
        });
    }

    // Knob drag start
    function handleKnobMouseDown(param, value, e) {
        setDragged({ type: 'knob', param });
        setDragStart({ y: e.clientY, value, param });
    }

    // EQ drag start
    function handleEqMouseDown(param, ref, e) {
        setDragged({ type: 'eq', param, ref });
    }

    // Play trumpet on SVG click
    function handleTrumpetClick() {
        playTrumpet({
            power, audioContext, eq, gain, reverb, dynamics, articulation, mute,
            frequency: 440,
            duration: 0.3,
            animateBarsFn: () => animateBars(barRefs)
        });
    }

    return (
        <div className="vst-container">
            <button className={"power-btn" + (power ? " active" : "")} title="Power On/Off" onClick={() => setPower(p => !p)}>
                ⏻
            </button>
            <div className="header">
                <h1>🎺 Brass Master Pro</h1>
            </div>
            <div className="trumpet-display">
                <div className="trumpet" onClick={handleTrumpetClick}>
                    <trumpetSVG onValveDown={handleValveDown} />
                </div>
            </div>
            <div className="controls-section">
                {/* Articulation */}
                <div className="control-group">
                    <div className="control-title">ARTICULATION</div>
                    <div className="articulation-options">
                        <div
                            className={"articulation-btn" + (articulation === 'legato' ? ' active' : '')}
                            onClick={() => setArticulation('legato')}
                        >
                            <div className="music-symbol">𝅗𝅥</div>
                            <div className="articulation-label">Legato</div>
                        </div>
                        <div
                            className={"articulation-btn" + (articulation === 'staccato' ? ' active' : '')}
                            onClick={() => setArticulation('staccato')}
                        >
                            <div className="music-symbol">𝅘𝅥.</div>
                            <div className="articulation-label">Staccato</div>
                        </div>
                    </div>
                </div>
                {/* Effects (Mute + Knobs) */}
                <div className="control-group">
                    <div className="control-title">EFFECTS</div>
                    <div className="mute-control">
                        <div className="mute-label">Harmon Mute</div>
                        <div
                            className={"toggle-switch" + (mute ? ' active' : '')}
                            id="muteToggle"
                            onClick={() => setMute(m => !m)}
                        >
                            <div className="toggle-slider" />
                        </div>
                    </div>
                    <div className="knobs-grid">
                        {/* Gain Knob */}
                        <div className="knob-container">
                            <div
                                className="knob"
                                style={{ transform: `rotate(${(gain / 100) * 270 - 135}deg)` }}
                                onMouseDown={e => handleKnobMouseDown('gain', gain, e)}
                            />
                            <div className="knob-label">Gain</div>
                            <div className="knob-value">{gain}%</div>
                        </div>
                        {/* Reverb Knob */}
                        <div className="knob-container">
                            <div
                                className="knob"
                                style={{ transform: `rotate(${(reverb / 100) * 270 - 135}deg)` }}
                                onMouseDown={e => handleKnobMouseDown('reverb', reverb, e)}
                            />
                            <div className="knob-label">Reverb</div>
                            <div className="knob-value">{reverb}%</div>
                        </div>
                    </div>
                </div>
                {/* Dynamics */}
                <div className="control-group">
                    <div className="control-title">DYNAMICS</div>
                    <div className="dynamics-options">
                        {['p', 'mf', 'f', 'ff'].map(dyn => (
                            <button
                                key={dyn}
                                className={"dynamic-btn" + (dynamics === dyn ? ' active' : '')}
                                onClick={() => setDynamics(dyn)}
                            >
                                {dyn}
                            </button>
                        ))}
                    </div>
                </div>
                {/* EQ Section */}
                <div className="eq-container">
                    <div className="eq-title">E.Q</div>
                    <div className="eq-bands">
                        {['low', 'mid', 'high'].map((band, idx) => {
                            const percent = eq[band];
                            const db = Math.round((percent - 50) / 5);
                            const sign = db >= 0 ? '+' : '';
                            return (
                                <div className="eq-band" key={band}>
                                    <div
                                        className="eq-slider"
                                        ref={el => barRefs.current[idx + 30] = el}
                                        onMouseDown={e => handleEqMouseDown(band, e.target, e)}
                                    >
                                        <div className="eq-fill" style={{ height: percent + '%' }} />
                                        <div className="eq-knob" style={{ bottom: `calc(${percent}% - 25px)` }} />
                                    </div>
                                    <div className="eq-label">{band.charAt(0).toUpperCase() + band.slice(1)}</div>
                                    <div className="eq-value">{`${sign}${db}dB`}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Visualizer */}
            <div className="visualizer">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        className="bar"
                        key={i}
                        ref={el => barRefs.current[i] = el}
                        style={{ height: '5px' }}
                    />
                ))}
            </div>
            {/* Keyboard hint */}
            <div className="keyboard-hint">
                <h3>Keyboard Controls</h3>
                <p>
                    <span className="key">A</span><span className="key">S</span><span className="key">D</span><span className="key">F</span><span className="key">G</span><span className="key">H</span><span className="key">J</span><span className="key">K</span> - Play Notes | 
                    <span className="key">1</span><span className="key">2</span><span className="key">3</span> - Valves
                </p>
            </div>
        </div>
    );
}

export default App;
