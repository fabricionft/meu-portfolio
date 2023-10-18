import styles from './Header.module.css';


export default function Header(){

  return(
    <header className={styles.containerCabecalho}>
      <div className={styles.margemCabecalho}>
          <a href="#sobre" className={styles.linksCabecalho}>Sobre</a>
          <a href="#projetos" className={styles.linksCabecalho}>Projetos</a>
          <a href="#skills" className={styles.linksCabecalho}>Skills</a>
          <a href="#contatos" className={styles.linksCabecalho}>Contatos</a>
        </div>
    </header>
  )
}