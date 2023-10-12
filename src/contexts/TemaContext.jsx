import { createContext, useEffect, useState } from "react";

export const TemaContext = createContext();

export const TemaProvider = ({children}) => {

  const [tema, setTema]  = useState(() => {
    const tema = localStorage.getItem('tema');
    return (tema) ? tema : "claro";
  });

  useEffect(() =>{
    localStorage.setItem('tema', tema)
  }, [tema]);

  const alterarTema = () => setTema((tema == "claro") ? "escuro" : "claro");

  return(
    <TemaContext.Provider value={{tema, alterarTema}}>
      {children}
    </TemaContext.Provider>
  )
}