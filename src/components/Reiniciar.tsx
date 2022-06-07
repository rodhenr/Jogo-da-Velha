import "../styles/Reiniciar.scss";

interface Props {
  over: boolean;
  turno: number;
}

function Reiniciar({ over, turno }: Props) {
  return (
    <div className="container-reiniciar">
      {over || turno === 9 ? (
        <button onClick={() => window.location.reload()} data-cy="jogar-novamente">
          JOGAR NOVAMENTE
        </button>
      ) : null}
    </div>
  );
}

export default Reiniciar;
