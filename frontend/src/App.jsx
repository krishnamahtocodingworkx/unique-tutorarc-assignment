import { useState } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [session, setSession] = useState(null);
  const [copied, setCopied] = useState(false);

  const startSession = async () => {
    const res = await axios.post(`${apiUrl}/api/start-session`);
    setSession(res.data.session);
  };

  const copyUrl = async () => {
    if (session?.userurl) {
      await navigator.clipboard.writeText(session.userurl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="app-container">
      {!session ? (
        <button className="start-btn" onClick={startSession}>
          START SESSION
        </button>
      ) : (
        <>
          <h2 className="session-title">Session Started!</h2>
          <p className="session-desc">Share this link with the student:</p>

          <div className="link-container">
            <a
              href={session.userurl}
              target="_blank"
              rel="noopener noreferrer"
              className="session-link"
            >
              {session.userurl}
            </a>
          </div>

          <button
            className={`copy-btn ${copied ? "copied" : ""}`}
            onClick={copyUrl}
          >
            {copied ? "Copied!" : "Copy URL"}
          </button>

          <div className="video-section">
            <VideoPlayer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
