import Produto from "./components/Produto";
import { GlobalStorage } from "./GlobalContext"

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
