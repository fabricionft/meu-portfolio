import TituloSessao from '../TituloSessao';
import styles from './Skills.module.css';


export default function Skills(){

  return(
    <section className={styles.containerSkills} id="skills">
      <div className={styles.divisaoSoftSkils}>
        <TituloSessao
          variacao={true}
        >
          Soft Skills
        </TituloSessao>
        
        <div className={styles.margemConteudoSkills}>
          <div className={styles.textoConteudoSkills}>
            <ul>
              <li><p>Comunicativo</p></li>
              <li><p>Autodidata</p></li>
              <li><p>Colaborativo</p></li>
              <li><p>Lider</p></li>
              <li><p>Focado</p></li>
              <li><p>Curioso</p></li>
              <li><p>Criativo</p></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.divisaoHardSkils}>
      <TituloSessao
          variacao={true}
        >
          Hard Skills
        </TituloSessao>
        
        <div className={styles.margemConteudoSkills}>
          <div className={styles.textoConteudoSkills}>
            <ul>
              <li><p>Spring Boot (Java)</p></li>
              <li><p>Spring Security</p></li>
              <li><p>Spring Data</p></li>
              <li><p>React (Javascript)</p></li>
              <li><p>Javascript + JQuery</p></li>
              <li><p>HTML + CSS</p></li>
              <li><p>MySQL</p></li>
              <li><p>PostgreeSQL</p></li>
            </ul>
          </div>
        </div>
      </div>
  </section>
  )
}