import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

  const nome = "Miguel";

  return (
    <div className='App'>
      <HelloWorld />
      <Frase />
      <SayMyName nome="Leonardo" />
      <SayMyName nome="Matheus" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Daniel" 
      idade="18" profissao="Progamador" />
      <List />
    </div>
  );
}

export default App;
