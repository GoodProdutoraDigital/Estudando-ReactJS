import './App.css';
//Importando componentes
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

    const name = 'Charles'
    const nome = 'Maria'
    const newName = name.toLocaleUpperCase()
    const url = 'https://via.placeholder.com/150'

    function sum(a, b){
      return a + b
    }

  return (

    <div className='App'>
      <h1>Testando Eventos</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form/>
      <h2>Olá, {newName}</h2>
      <SayMyName nome="Jefferson"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <HelloWord/>
      <Pessoa nome="Jefferson" idade="33" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <p>Uso de funçao: {sum(1, 2)}</p>
      <img src={url} alt="imagens" />
      <Frase/>
      <List/>
    </div>

    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */

  );
}

export default App;
