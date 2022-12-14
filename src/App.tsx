import './App.css';
import * as C from "./App.styled";
import { Logos } from './components/Logos';
import { Linguagens } from './components/Linguagens';
import { Sobre } from './components/Sobre';
import { Trabalhos } from './components/Trabalhos';
import { Contatos } from './components/Contatos';
import { SelectLanguage } from './components/SelectLanguage';

function App() {

  return (
    <> 
      <SelectLanguage />
      <C.Container>
        <Sobre />
        <Trabalhos />
        <Logos />
        <Linguagens />
        <Contatos />
      </C.Container> 
    </>  
  );
}

export default App;
