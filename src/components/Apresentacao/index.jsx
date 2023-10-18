import styles from './Apresentacao.module.css';

//Assets
import imgLua from '../../assets/images/lua.png';
import imgSol from '../../assets/images/sol.png';

//Hooks
import useTema from '../../hooks/useTema';


export default function Apresentacao(){

  const {tema, alterarTema} = useTema();

  return(
    <section className={styles.apresentacao}>
      <div className={styles.flutuarTextos}>
        <h1 className={styles.tituloApresentacao}>Bem vindo!!</h1>
        <p className={styles.textoApresentacao}>Este é meu portfólio, veja e acesse minhas</p>
        <p className={styles.textoApresentacao}>informações, projetos e contatos</p>
      </div>

    
      <div className={styles.seletorTema}
        onClick={alterarTema}
      >
        <img src={imgLua} width="15px"/>
        <img src={imgSol} width="15px"/>
        <div className={styles.circulo+" "+styles[(tema == "escuro") && "escuro"]}></div>
      </div>
    </section>
  )
}