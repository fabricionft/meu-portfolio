import styles from './Projetos.module.css'

//Assets
import iconGithub from '../../assets/icons/github.png';
import iconYoutube from '../../assets/icons/youtube.png';
import iconRaio from '../../assets/icons/raio.png';
import TituloSessao from '../TituloSessao';

//Hooks
import useProjetos from '../../hooks/useProjetos';
import { useState } from 'react';


export default function Projetos(){

  const {projetos} = useProjetos();
  const [ordemListagem, setOrdemListagem] = useState("recente");
  let listaProjetos = (ordemListagem == "recente") ? projetos.slice().reverse() : projetos;

  return(
    <section className={styles.containerProjetos}>
     <TituloSessao
      id={"projetos"}
     >
      Projetos
     </TituloSessao>


     <select className={styles.seletorOrdem}
      onChange={(e) => setOrdemListagem(e.target.value)}
     >
      <option value="recente">+ Recente</option>
      <option value="antigo">+ Antigo</option>
     </select>

     {
        listaProjetos.map((projeto, index) => (
          <div key={index} className={styles.projeto}>
            <div className={styles.margemProjeto}>
                <div className={styles.divisaoDetalhes}>
                    <h2 className={styles.tituloProjeto}>{projeto.nome}</h2>

                    <p className={styles.prazo}>{projeto.inicio} - {projeto.fim}</p>

                    <p className={styles.descricao}>{projeto.descricao}</p>

                    <ul className={styles.tecnologias}>
                      {
                        projeto.tecnologiasUtilizadas.map((tecnologia, index) => (
                          <li key={index}><p>{tecnologia}</p></li>
                        ))
                      }
                    </ul>
                </div>
                <div className={styles.divisaoBotoe}>
                    <a href={projeto.linkGitHub} className={styles.btnProjeto}>
                      <img src={iconGithub} className={styles.iconProjeto}/>
                    </a>

                    <a className={styles.btnProjeto} href={projeto.linkYotube}>
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