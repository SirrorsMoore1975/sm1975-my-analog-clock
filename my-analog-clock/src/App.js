import "./App.css";
import useMousePosition from "./utilities/MousePosition.js";

function App() {
  const { x, y } = useMousePosition();

  return (
    <div className="App">
      <header className="">Mouse Position Testing</header>

      <div>
        Mouse at: ({x}, {y})
      </div>
    </div>
  );
}

export default App;
