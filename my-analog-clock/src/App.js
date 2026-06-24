import "./App.css";

import HelloWorld from "./components/HelloWorld.jsx";
import AnalogClock from "./components/AnalogClock.jsx";

function App() {
  const DebugMode = false;

  return (
    <div className="App">
      <div>{DebugMode ? <HelloWorld /> : ""}</div>
      <AnalogClock />
    </div>
  );
}

export default App;
