import dijkstra from '../../utils/dijkstra';
import graph from '../../data/formations/4123';
import './index.css';

const MainPage = () => {
  console.log(dijkstra(graph, "1", "11"));

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
      </section>
    </div>
  );
}

export default MainPage;
