import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

const useTema = () => {

  const {tema, alterarTema} = useContext(TemaContext);

  const carregarTema = () =>{
    const html = document.querySelector('html');

    if(tema == "claro"){
      html.classList.remove('temaEscuro');
      html.classList.add('temaClaro');
      alterarTemaImagens(30);
     
    }else{
      html.classList.remove('temaClaro');
      html.classList.add('temaEscuro');
      document.querySelector('meta[name="theme-color"]').setAttribute("content", "rgb(20, 20, 20)");
      alterarTemaImagens(100);
    }
  }

  const alterarTemaImagens = (brilho) => {
    const imagens = document.getElementsByName('icon');
    imagens.forEach((imagem) => imagem.style.filter="brightness("+brilho+"%)");
  }

  return{tema, alterarTema, carregarTema};
}

export default useTema;