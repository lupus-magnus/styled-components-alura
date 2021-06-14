import React, { useState } from "react";
import { ThemeProvider } from "styled-components"
import { temaClaro, temaEscuro } from "./Components/UI/temas"
import { BtnTema } from "./Components/UI";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from "./Components/GlobalStyle";
import SwitcherTema from "./Components/UI/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true)
  
  const toggleTema = () => {
    setTema((temaAtual) => !temaAtual)
  }

  return (
    <>
      <ThemeProvider theme = {tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick = {toggleTema}>
          <SwitcherTema tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
