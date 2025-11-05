import { useState } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [session, setSession] = useState(null);

  const startSession = async () => {
    const res = await axios.post("http://localhost:5000/api/start-session");
    setSession(res.data.session);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!session ? (
        <button
          onClick={startSession}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            cursor: "pointer",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          START SESSION
        </button>
      ) : (
        <>
          <h2>Session Started!</h2>
          <p>Share this link with the student:</p>
          <a href={session.userurl} target="_blank">{session.userurl}</a>
          <VideoPlayer />
        </>
      )}
    </div>
  );
}

export default App;
