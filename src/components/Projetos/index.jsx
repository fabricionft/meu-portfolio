import styles from './Projetos.module.css'

//Assets
import iconGithub from '../../assets/icons/github.png';
import iconYoutube from '../../assets/icons/youtube.png';
import iconRaio from '../../assets/icons/raio.png';
import TituloSessao from '../TituloSessao';

//Hooks
import useProjetos from '../../hooks/useProjetos';


export default function Projetos(){

  const {projetos} = useProjetos();

  return(
    <section className={styles.containerProjetos}>
     <TituloSessao
      id={"projetos"}
     >
      Projetos
     </TituloSessao>

      {
        projetos.map((projeto, index) => (
          <div key={index} className={styles.projeto}>
            <div className={styles.margemProjeto}>
                <div className={styles.divisaoDetalhes}>
                    <p className={styles.subtituloDetalhesProjeto}>Nome</p>
                    <p className={styles.textoDetalhesProjeto}>{projeto
                    .nome}</p>

                    <p className={styles.subtituloDetalhesProjeto}>Ínicio - fim</p>
                    <p className={styles.textoDetalhesProjeto}>{projeto.inicio} - em construção</p>

                    <p className={styles.subtituloDetalhesProjeto}>Descrição</p>
                    <p className={styles.textoDetalhesProjeto}>{projeto.descricao}</p>

                    <p className={styles.subtituloDetalhesProjeto}>Tecnologias utilizadas</p>
                    <ul>
                      {
                        projeto.tecnologiasUtilizadas.map((tecnologia, index) => (
                          <li key={index}><p>{tecnologia}</p></li>
                        ))
                      }
                    </ul>
                </div>
                <div className={styles.divisaoBotoes}>
                    <a href="https://github.com/fabricionft/fast-lash.git" className={styles.btnProjeto}>
                        <img src={iconGithub} className={styles.iconProjeto}/>
                    </a>

                    <a className={styles.btnProjeto}>
                        <img src={iconYoutube} className={styles.iconProjeto}/>
                    </a>

                    <a className={styles.btnProjeto}>
                        <img src={iconRaio} className={styles.iconProjeto}/>
                    </a>
                </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}