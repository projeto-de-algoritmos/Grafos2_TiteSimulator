import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Field from '../../components/Field';
import Board from '../../components/Board';
import Button from '../../components/Button';
import { getFormationFromName, getFormationsNameList } from '../../data/formations';
import dijkstra, { getWeightedGraphFromData } from '../../utils/dijkstra';
import './index.css';

const MainPage = () => {
  const [mode, setMode] = useState('init'); // Status: init/neutralize-players/result
  const [boardText, setBoardText] = useState('BEM AMIGOS DA REDE GLOBO!');

  const formationsList = getFormationsNameList();
  const initialFormation = formationsList[0];
  const [selectedFormation, setSelectedFormation] = useState(initialFormation);

  const [resultBtnStatus, setResultBtnStatus] = useState('active');
  const [resetBtnStatus, setResetBtnStatus] = useState('hidden');

  const handleResultClick = () => {
    setMode('result');

    setResultBtnStatus('hidden');
    setResetBtnStatus('active');

    const formationData = getFormationFromName('4-1-2-3');
    const graph = getWeightedGraphFromData(formationData.formationPlayers);

    const result = dijkstra(graph, formationData.firstPlayer, formationData.lastPlayer);
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

    setResultBtnStatus('active');
    setResetBtnStatus('hidden');

    setBoardText('BEM AMIGOS DA REDE GLOBO!');
  }

  const handleFormationSelect = (value) => {
    setSelectedFormation(value);
  }

  const renderFormationOptions = () => formationsList.map(formation => (
    <option key={formation} value={formation}>{formation}</option>
  ));

  return (
    <div className="main-page">
      <section >
        <h1>TITE SIMULATOR</h1>
        <p>
          O nosso professor Tite está preparando os jogadores para o jogo da semifinal contra nossos maiores rivais: Argentina!<br />
          Para pegar os hermanos de surpresa, ele aprimorou as táticas para valorizar os toques dos jogadores da Seleção.
        </p>
        <p>
          Existem boatos de que ele esteve utilizando o algoritmo de Dijkstra para calcular a menor rota entre o nosso goleiro e o atacante da seleção.<br />
          Para utilizar o algoritmo, siga os passos abaixo:
        </p>
        <div className='options-container'>
          <div className='d-block justify-content-center align-itens-center'>
            <small className="fw-bold mb-0">Selecione a formação desejada</small>
            <Form.Select className="select-formation" size="sm" value={selectedFormation} onChange={(e) => handleFormationSelect(e.target.value)}>
              {renderFormationOptions()}
            </Form.Select>
          </div>
          <div className='btn-container'>
            <Button status={resultBtnStatus} onClick={() => handleResultClick()}>Ver resultado</Button>
            <Button status={resetBtnStatus} onClick={() => handleResetClick()}>Começar novamente</Button>
          </div>
        </div>
        <div className='field-container'>
          <Board text={boardText} />
          <Field mode={mode} formation={selectedFormation} />
        </div>
      </section >
    </div >
  );
}

export default MainPage;
