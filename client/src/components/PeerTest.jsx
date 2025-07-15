// src/components/PeerTest.jsx
import { useEffect } from "react";
import Peer from "peerjs";

export default function PeerTest() {
  useEffect(() => {
    const peer = new Peer(undefined, {
      host: window.location.hostname,
      port: 443,
      path: "/peerjs",
      secure: true,
    });

    peer.on("open", (id) => {
      console.log("✅ PeerJS Connected. Your ID:", id);
    });

    peer.on("error", (err) => {
      console.error("❌ PeerJS Error:", err);
    });
  }, []);

  return (
    <div>
      <h2>PeerJS Test</h2>
      <p>Open browser console to see connection status.</p>
    </div>
  );
}
