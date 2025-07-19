import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Jogos from './components/Jogos';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className='App'>
      <HelloWorld />
      <Frase />
      <SayMyName nome="Leonardo" />
      <Pessoa 
      nome="Leo" 
      idade="19" 
      profissao="Progamador" foto="https://via.placeholder.com/150" />
      <Pessoa 
      nome="Rodolfo" 
      idade="32" 
      profissao="Eletricista" foto="https://via.placeholder.com/150" />
      <List />
      <h1>Jogos que eu gosto</h1>
      <Jogos jogo="Free Fire" />
      <Jogos jogo="Honnor of Kings" />
      <Jogos jogo="Blood Strike" />
      <Jogos jogo="Capa Royale" />
    </div>
  );
}

export default App;
