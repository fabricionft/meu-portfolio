import styles from './Sobre.module.css'

import iconYoutube from '../../assets/icons/youtube.png';
import iconLinkedin from '../../assets/icons/linkedin.png';
import iconGithub from '../../assets/icons/github.png';
import iconInstagram from '../../assets/icons/instagram.png';
import iconEmail from '../../assets/icons/email.png';
import iconWpp from '../../assets/icons/wpp.png';
import imgperfil from '../../assets/images/ftPerfil.jpg';
import TituloSessao from '../TituloSessao';


export default function Sobre(){

  return(
    <section className={styles.containerSobre}>
      <TituloSessao
        id={"sobre"}
      >
        Sobre
      </TituloSessao>

      <div className={styles.divisaoImagem}>
        <img src={imgperfil} className={styles.imgSobre}/>

        <p className={styles.textoNomeUsuario}>Fabrício Ferreira Tavares</p>

        <div className={styles.contatosSobre}>
          <div className={styles.linhaSobre}>
            <div className={styles.divisao1}>
              <img src={iconYoutube} className={styles.iconLinksSobre1} name={"icon"}/>
            </div>
            <div className={styles.divisao2}>
              <a href="https://www.youtube.com/@fabricionft" className={styles.linksSobre}>@fabriconft</a>
            </div>
          </div>

          <div className={styles.linhaSobre}>
              <div className={styles.divisao1}>
                <img src={iconLinkedin} className={styles.iconLinksSobre} name={"icon"}/>
              </div>
              <div className={styles.divisao2}>
                <a href="https://www.linkedin.com/in/fabricionft/" className={styles.linksSobre}>in/fabricionft</a>
              </div>
          </div>

          <div className={styles.linhaSobre}>
              <div className={styles.divisao1}>
                  <img src={iconGithub} className={styles.iconLinksSobre} name={"icon"}/>
              </div>
              <div className={styles.divisao2}>
                  <a href="https://github.com/fabricionft" className={styles.linksSobre}>fabriconft</a>
              </div>
          </div>

          <div className={styles.linhaSobre}>
            <div className={styles.divisao1}>
                <img src={iconInstagram} className={styles.iconLinksSobre} name={"icon"}/>
            </div>
            <div className={styles.divisao2}>
                <a href="https://www.instagram.com/fabricio_nft/" className={styles.linksSobre}>fabricio_nft</a>
            </div>
          </div>

          <div className={styles.linhaSobre}>
            <div className={styles.divisao1}>
                <img src={iconEmail} className={styles.iconLinksSobre1} name={"icon"}/>
            </div>
            <div className={styles.diviao2}>
                <a className={styles.linksSobre}>fabriciodev859@gmail.com</a>
            </div>
          </div>

          <div className={styles.linhaSobre}>
            <div className={styles.divisao1}>
                <img src={iconWpp} className={styles.iconLinksSobre1} name={"icon"}/>
            </div>
            <div className={styles.diviao2}>
              <a href='href="https://wa.me/5519984597236"' className={styles.linksSobre}>(19) 984597236</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divisaoTexto}>
        <p className={styles.textoSobre}>
          &nbsp;&nbsp;Constante aprendiz, fascinado pelo mundo Web e recém formado em tecnologia da informação (curso técnico). No geral uma pessoa descontraída, engraçada e descontraida, porém, ao mesmo tempo focada e dedicada para aquilo que lhe interessa. Esse sou eu em poucas palavras, um jovem estudante que possui o sonho de se tornar um desenvolvedor web Full-Stack de sucesso e contribuir em grandes projetos.
          <br/>&nbsp;&nbsp;Há pouco mais de 1 ano estudo e desenvolvo utilizando o ecossistema Java. Minha Stack de desenvolvimento se baseia no Spring Boot (Framework Java) para o Back-End, e a soma da trindade HTML, CSS e JS com JQuery para o Front-end. Estas citadas já possuo grande domínio e sou capaz de desenvolver grandes projetos, entretanto ainda desejo me aperfeiçoar em React para completar minha Stack definitiva (Spring + React).
        </p>
      </div>
    </section>
  )
}