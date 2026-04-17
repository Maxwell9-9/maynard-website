import { useEffect } from 'react';
 
const styles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: black;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        color: white;
        }
 
        .header {
            text-align: center;
            padding: 50px;
        }
 
        .download-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 30px;
            padding: 40px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            gap: 50px;
        }
 
        .windows-download {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
 
        .mac-download {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
 
        .system-reqs {
            text-align: center;
            padding: 50px;
            ul {
                display: inline-block;
                text-align: left;
                margin: 0 auto;
            }
        }
    `;
 
function Download() {
 
    // Add styles on mount
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        return () => { document.head.removeChild(styleSheet); };
    }, []);
 
    return (
        <div>
            <div className="header">
                <h1>Download Maynard VST</h1>
                <p>Bring the trumpet to your DAW. Fast, smooth, and expressive.</p>
            </div>
            <div className="download-container">
                <div className="windows-download">
                    <h1>Download for Windows</h1>
                    <h2>Getting Started</h2>
                    <ol>
                        <li>Copy the .dll to your VST plugins folder.</li>
                        <li>Open your DAW and rescan plugins.</li>
                        <li>Load "Maynard VST" and enjoy.</li>
                    </ol>
                </div>
                <div className="mac-download">
                    <h1>Download for Mac</h1>
                    <h2>Getting started</h2>
                    <ol>
                        <li>Copy the .vst3 or .component file to ~/Library/Audio/Plug-Ins.</li>
                        <li>Rescan in your DAW.</li>
                    </ol>
                </div>
            </div>
            <div className="system-reqs">
                <h1>System Requirements</h1>
                <ul>
                    <li>Windows 10+ / macOS 11+</li>
                    <li>4GB RAM (8GB recommended)</li>
                    <li>DAW supporting VST3/AU (Ableton Live, FL Studio, Logic Pro, Cubase, etc.)</li>
                    <li>CPU: Intel i3 or better</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Download;