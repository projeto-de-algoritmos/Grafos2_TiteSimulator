import { useState } from 'react';
import Button from '../../components/Button';
import dijkstra from '../../utils/dijkstra';
import graph from '../../data/formations/4123';
import Field from '../../components/Field';
import Board from '../../components/Board';
import './index.css';

const MainPage = () => {
  const [mode, setMode] = useState('init'); // Status: init/neutralize/result
  const [boardText, setBoardText] = useState('BEM AMIGOS DA REDE GLOBO!');

  const [resultBtnStatus, setResultBtnStatus] = useState('active');
  const [resetBtnStatus, setResetBtnStatus] = useState('active');

  const handleResultClick = () => {
    setMode('result');
    const result = dijkstra(graph, "1", "11");
    if (result !== null) {
      let resultString = '';
      result.forEach(
        (node, index) => resultString = index === 0 ? String(node) : `${resultString}-${node}`
      );
      setBoardText(resultString);
    } else {
      setBoardText("ARGENTINA NEUTRALIZOU TODAS JOGADAS POSSÍVEIS");
    }
  }

  const handleResetClick = () => {
    setMode('init');
    setBoardText('BEM AMIGOS DA REDE GLOBO!');
  }

  return (
    <div className="main-page">
      <section>
        <h1>TITE SIMULATOR</h1>
        <p>
          O nosso professor Tite está preparando os jogadores para o jogo da semifinal contra nossos maiores rivais: Argentina!
          Para pegar os hermanos de surpresa, ele aprimorou as táticas para valorizar os toques dos jogadores da Seleção.
        </p>
        <p>
          Existem boatos de que ele esteve utilizando o algoritmo de Dijkstra para auxiliar a calcular a menor rota entre o nosso
          goleiro e o atacante da seleção. Para utilizar o algoritmo, siga os passos abaixo:
        </p>
        <div className='btn-container'>
          {mode === 'result' ? <Button status={resetBtnStatus} onClick={() => handleResetClick()}>Resetar</Button>
            : (
              <>
                {/*<Button status="idle" onClick={() => setMode('neutralize')}>Neutralizar jogadores</Button>*/}
                <Button status={resultBtnStatus} onClick={() => handleResultClick()}>Ver resultado</Button>
              </>
            )}
        </div>
        <div className='field-container'>
          <Board text={boardText} />
          <Field />
        </div>
      </section>
    </div>
  );
}

export default MainPage;
