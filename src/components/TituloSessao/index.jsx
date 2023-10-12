import styles from './TituloSessao.module.css';


export default function TituloSessao({children, variacao, id}){

  return(
    <h1 className={styles.tituloSessao+" "+styles[(variacao) && "variacao"]} id={id}>{children}</h1>
  )
}