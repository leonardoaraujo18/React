import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import List from './components/List';
import Pessoa from './components/Pessoa';
import Jogos from './components/Jogos';

function App() {

  return (
    <div className='App'>
      <h1>Aprendendo React</h1>
      <Frase />
      <Frase />
      <HelloWorld />
      <h1>Jogos que já joguei!</h1>
      <Jogos
      nome="Free Fire"
      tempo="3 anos"
      patente="Mestre" />
      <Jogos
      nome="Blood Strike"
      tempo="1 ano"
      patente="Ouro III" />
      <Pessoa
      nome="Leo"
      idade="19"
      profissao="Progamador" />
      <List />
    </div>
  );
}

export default App;
