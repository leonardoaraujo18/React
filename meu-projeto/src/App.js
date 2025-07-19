import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import List from './components/List';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className='App'>
      <HelloWorld />
      <Frase />
      <SayMyName nome="Leonardo" />
      <Pessoa
      nome="Leo"
      idade="19"
      profissao="Progamador" />
      <List />
    </div>
  );
}

export default App;
