import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer";

function SessionPage() {
  const { id } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/session/${id}`)
      .then((res) => {
        setSession(res.data.session);
      })
      .catch(() => alert("Invalid Session Link"));
  }, [id]);

  if (!session) return <h3>Loading session...</h3>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Welcome to Live Session</h2>
      <VideoPlayer />
    </div>
  );
}

export default SessionPage;
