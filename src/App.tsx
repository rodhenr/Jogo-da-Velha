import { useEffect, useState } from "react";

import Mensagem from "./components/Mensagem";
import Quadrados from "./components/Quadrados";
import Reiniciar from "./components/Reiniciar";

import "./styles/App.scss";

function App() {
  const [quadrado, setQuadrado] = useState(Array(9).fill(""));
  const [over, setOver] = useState(false);
  const [turno, setTurno] = useState(0);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const regras = (simbolo: string) => {
      if (
        (quadrado[0] === simbolo &&
          ((quadrado[1] === simbolo && quadrado[2] === simbolo) ||
            (quadrado[3] === simbolo && quadrado[6] === simbolo))) ||
        (quadrado[4] === simbolo &&
          ((quadrado[0] === simbolo && quadrado[8] === simbolo) ||
            (quadrado[1] === simbolo && quadrado[7] === simbolo) ||
            (quadrado[2] === simbolo && quadrado[6] === simbolo) ||
            (quadrado[3] === simbolo && quadrado[5] === simbolo))) ||
        (quadrado[8] === simbolo &&
          ((quadrado[2] === simbolo && quadrado[5] === simbolo) ||
            (quadrado[6] === simbolo && quadrado[7] === simbolo)))
      ) {
        setOver(true);
        setMensagem(`O vencedor foi o jogador ${simbolo === "X" ? "1" : "2"}`);
      } else {
        return;
      }
    };

    regras("X");
    regras("O");
  }, [quadrado]);

  const play = (index: number) => {
    if (quadrado[index] === "" && !over && turno % 2 === 0) {
      const newArray = quadrado.map((i, key) => (key === index ? "X" : i));
      setQuadrado(newArray);
      setTurno((prev) => prev + 1);
    } else if (quadrado[index] === "" && !over && turno % 2 === 1) {
      const newArray = quadrado.map((i, key) => (key === index ? "O" : i));
      setQuadrado(newArray);
      setTurno((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      <h1>JOGO DA VELHA</h1>
      <Quadrados itens={quadrado} play={play} />
      <Mensagem info={mensagem} turno={turno} over={over} />
      <Reiniciar turno={turno} over={over} />
    </div>
  );
}

export default App;
