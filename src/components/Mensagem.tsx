import "../styles/Mensagem.scss";

interface Props {
  info: string;
  over: boolean;
  turno: number;
}

function Mensagem({ info, over, turno }: Props) {
  return (
    <div className="container-mensagem" data-cy="mensagem-vitoria">
      {over ? (
        <div>
          <p>{info}</p>
        </div>
      ) : turno === 9 ? (
        <div>
          <p>O JOGO TERMINOU EMPATADO!</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Mensagem;
