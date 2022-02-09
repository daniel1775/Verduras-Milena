import Main from "./views/Main";
import Domicile from "./views/Domicile";
import Shopping from "./views/Shopping";
import Nav from "./views/Nav";
import { useState } from "react";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [ basket, setBasket ] = useState([]);

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/domicile" element={<Domicile setBasket={setBasket} />} />
        <Route path="/shopping" element={<Shopping basket={basket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
