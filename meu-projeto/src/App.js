import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


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
    </div>
  );
}

export default App;
