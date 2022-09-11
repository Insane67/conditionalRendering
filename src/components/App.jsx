import React from "react";
import Login from "./Login";

const isLoggedIn = true;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // currentTime > 12 && <Login />
        isLoggedIn ? <h1>Hello</h1> : <Login />
      }
    </div>
  );
}

export default App;
