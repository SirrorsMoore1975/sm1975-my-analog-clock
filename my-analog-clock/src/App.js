import "./App.css";
import useMousePosition from "./utilities/MousePosition.js";
import useWindowSize from "./utilities/WindowSize.js"

function App() {
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <header className="">Mouse Position and Screen Size Testing</header>

      <div>
        Mouse at: ({x}, {y})
        Screen size: Width: {width}px, Height: {height}px 
      </div>
    </div>
  );
}

export default App;
