import styles from './Contatos.module.css'

import iconYoutube from '../../assets/icons/youtube.png';
import iconLinkedin from '../../assets/icons/linkedin.png';
import iconGithub from '../../assets/icons/github.png';
import iconInstagram from '../../assets/icons/instagram.png';
import iconWpp from '../../assets/icons/wpp.png';


export default function Contatos(){

  return(
    <section className={styles.containerContatos} id="contatos">
      <a href="https://www.youtube.com/@fabricionft" className={styles.bordaPulsar}>
        <img src={iconYoutube} className={styles.iconContatos}/>
      </a>

      <a href="https://www.linkedin.com/in/fabricionft/" className={styles.bordaPulsar}>
        <img src={iconLinkedin} className={styles.iconContatos}/>
      </a>

      <a href="https://github.com/fabricionft" className={styles.bordaPulsar}>
        <img src={iconGithub} className={styles.iconContatos}/>
      </a>

      <a href="https://wa.me/5519984597236" className={styles.bordaPulsar}>
        <img src={iconWpp} className={styles.iconContatos}/>
      </a>

      <a href="https://www.instagram.com/fabricio_nft/" className={styles.bordaPulsar}>
        <img src={iconInstagram} className={styles.iconContatos}/>
      </a>
    </section>
  )
}