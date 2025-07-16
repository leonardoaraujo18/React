import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const nome = "Miguel";

  return (
    <div className='App'>
      <HelloWorld />
      <SayMyName nome="Leonardo" />
      <SayMyName nome="Matheus" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Daniel" 
      idade="18" profissao="Progamador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
