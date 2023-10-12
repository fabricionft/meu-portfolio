import Apresentacao from "./components/Apresentacao";
import Container from "./components/Container";
import Contatos from "./components/Contatos";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Skills from "./components/Skills";
import Sobre from "./components/Sobre";
import useTema from "./hooks/useTema";

function App() {

  const {carregarTema} = useTema();

  carregarTema();
  
  return (
    <Container>
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
