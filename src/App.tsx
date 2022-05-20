import { useState } from "react";
import "../src/styles/App.scss";

function App() {
  const [quadrado, setQuadrado] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <div className="container">
      {quadrado.map((i, key) => {
        return (
          <div className="container-quadrado" key={key}>
            {i}
          </div>
        );
      })}
    </div>
  );
}

export default App;
