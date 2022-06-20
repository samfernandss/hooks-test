import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Produto = (props) => {
  const global = useContext(GlobalContext);
  console.log(global)

  if (global.data === null) return null;

   return (
    <div>
      Produto: {global.data.map(product => <li key={product.id}>{product.nome}</li>)}
    </div>
  )
};

export default Produto;