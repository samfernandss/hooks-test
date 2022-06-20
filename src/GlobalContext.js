import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then(response => response.json())
      .then(json => setData(json));
  }, [])

  const cleanData = () => {
    setData(null);
  }

  return <GlobalContext.Provider value={{data, cleanData}}>
    {children}
  </GlobalContext.Provider>
}