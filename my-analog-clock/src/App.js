import "./App.css";

import HelloWorld from "./components/HelloWorld.jsx";
import ClockFace from "./components/ClockFace.jsx";

function App() {
  const DebugMode = false;

  return (
    <div className="App">
      <div>{DebugMode ? <HelloWorld /> : ""}</div>
      <ClockFace />
    </div>
  );
}

export default App;
