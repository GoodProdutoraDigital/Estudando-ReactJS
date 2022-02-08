//Importação
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//Render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,  
  document.getElementById('root')
);


//Sem JSX
/* const elemento = React.createElement('h1', {}, 'Sem JSX')
ReactDOM.render(elemento, document.getElementById('root')) */


//Com JSX
/* ReactDOM.render(<h1>Com JSX</h1>,
  document.getElementById('root')
) */

//Componentes

/* class Componente extends React.Component{
//Utilizando class e a definindo como component
  render(){
    return <h1>Meu Primeiro Componente</h1>;
  }
} */

//Render componente
/* ReactDOM.render(<Componente />,
document.getElementById('root')
)
 */
//Exportar
/* export default Componente; */





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
