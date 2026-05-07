import "./App.css";

import HelloWorld from "./components/HelloWorld.jsx";

function App() {
  const DebugMode = true;

  return (
    <div className="App">
      <div>{DebugMode ? <HelloWorld /> : ""}</div>
    </div>
  );
}

export default App;
