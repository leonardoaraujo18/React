import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {

  const nome = "Leonardo";
  const newName = nome.toLocaleUpperCase();

  function soma(a,b){
    return a + b;
  }

  const url = 'https://www.pexels.com/pt-br/foto/filiais-setores-galhos-ramos-16768648/'

  return (
    <div className='App'>
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Resultado da soma: {soma(10,5)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld />
    </div>
  );
}

export default App;
