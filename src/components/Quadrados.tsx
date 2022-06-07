import "../styles/Quadrados.scss";

interface Props {
  itens: string[];
  play: Function;
}

function Quadrados({ itens, play }: Props) {
  return (
    <div className="container-quadrados" data-cy="quadrados">
      {itens.map((i, key) => {
        return (
          <div
            className="quadrado"
            key={key}
            onClick={() => play(key)}
            data-cy={`quadrado${key}`}
          >
            <span>{i}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Quadrados;
