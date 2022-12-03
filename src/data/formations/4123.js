import { WeightedGraph } from "../../utils/dijkstra";

var graph = new WeightedGraph();
graph.addVertex("1"); // goleiro
graph.addVertex("2"); // lateral esquerdo
graph.addVertex("3"); // zagueiro esquerdo
graph.addVertex("4"); // zagueiro direito
graph.addVertex("5"); // lateral direito
graph.addVertex("6"); // volante esquerdo
graph.addVertex("7"); // volante direito
graph.addVertex("8"); // meia central
graph.addVertex("9"); // ponta esquerda
graph.addVertex("10"); // ponta direita
graph.addVertex("11"); // atacante

graph.addEdge("1", "2", 32);
graph.addEdge("1", "3", 20);
graph.addEdge("1", "4", 20);
graph.addEdge("1", "5", 32);

graph.addEdge("2", "6", 23);
graph.addEdge("2", "9", 62);

graph.addEdge("3", "6", 16);
graph.addEdge("3", "7", 28);

graph.addEdge("4", "6", 28);
graph.addEdge("4", "7", 16);

graph.addEdge("5", "7", 23);
graph.addEdge("5", "10", 62);

graph.addEdge("6", "8", 34);
graph.addEdge("6", "9", 44);

graph.addEdge("7", "8", 34);
graph.addEdge("7", "10", 44);

graph.addEdge("8", "9", 28);
graph.addEdge("8", "10", 28);
graph.addEdge("8", "11", 20);

graph.addEdge("9", "11", 24);

graph.addEdge("10", "11", 24);

export default graph;