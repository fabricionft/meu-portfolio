import { useEffect } from "react";
import Apresentacao from "./components/Apresentacao";
import Container from "./components/Container";
import Contatos from "./components/Contatos";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Skills from "./components/Skills";
import Sobre from "./components/Sobre";
import useTema from "./hooks/useTema";
import Circulo from "./components/Circulo";

function App() {

  const {carregarTema, tema} = useTema();

  useEffect(() => {
    carregarTema();
  }, [tema]);
  
  return (
    <Container>
      <Circulo/>

      <Header/>

      <Apresentacao/>

      <Sobre/>

      <Projetos/>

      <Skills/>

      <Contatos/>
    </Container>
  )
}

export default App
