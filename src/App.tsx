import { useEffect, useState } from "react";
import "./styles/App.scss";

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
  const [over, setOver] = useState(false);
  const [turno, setTurno] = useState(0);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    regras("X");
    regras("O");
  }, [quadrado]);

  const regras = (simbolo: string) => {
    if (
      (quadrado[0] === simbolo &&
        quadrado[1] === simbolo &&
        quadrado[2] === simbolo) ||
      (quadrado[3] === simbolo &&
        quadrado[4] === simbolo &&
        quadrado[5] === simbolo) ||
      (quadrado[6] === simbolo &&
        quadrado[7] === simbolo &&
        quadrado[8] === simbolo) ||
      (quadrado[0] === simbolo &&
        quadrado[3] === simbolo &&
        quadrado[6] === simbolo) ||
      (quadrado[1] === simbolo &&
        quadrado[4] === simbolo &&
        quadrado[7] === simbolo) ||
      (quadrado[2] === simbolo &&
        quadrado[5] === simbolo &&
        quadrado[8] === simbolo) ||
      (quadrado[0] === simbolo &&
        quadrado[4] === simbolo &&
        quadrado[8] === simbolo) ||
      (quadrado[2] === simbolo &&
        quadrado[4] === simbolo &&
        quadrado[6] === simbolo)
    ) {
      setOver(true);
      setMensagem(`O vencedor foi o jogador ${simbolo === "X" ? "1" : "2"}`);
    } else {
      return;
    }
  };

  function play(index: number) {
    if (quadrado[index] === "" && !over && turno % 2 === 0) {
      const newArray = quadrado.map((i, key) => (key === index ? "X" : i));
      setQuadrado(newArray);
      setTurno((prev) => prev + 1);
    } else if (quadrado[index] === "" && !over && turno % 2 === 1) {
      const newArray = quadrado.map((i, key) => (key === index ? "O" : i));
      setQuadrado(newArray);
      setTurno((prev) => prev + 1);
    }
  }

  return (
    <div className="aaa">
      <div className="container">
        {quadrado.map((i, key) => {
          return (
            <div
              className="container-quadrado"
              key={key}
              onClick={() => play(key)}
            >
              <span>{i}</span>
            </div>
          );
        })}
      </div>
      <div className="mensagem">
        {over ? (
          <div>
            <p>{mensagem}</p>
          </div>
        ) : turno === 9 ? (
          <div>
            <p>EMPATE!</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="reiniciar">
        {over || turno === 9 ? (
          <button onClick={() => window.location.reload()}>
            JOGAR NOVAMENTE
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
