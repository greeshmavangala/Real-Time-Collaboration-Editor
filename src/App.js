// client/src/App.js
import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:4000");

function App() {
  const textRef = useRef();

  useEffect(() => {
    socket.on("receive-changes", (data) => {
      textRef.current.value = data;
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    socket.emit("send-changes", value);
  };

  return (
    <div className="App">
      <h1>📝 Real-Time Collaborative Editor</h1>
      <textarea
        ref={textRef}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default App;
