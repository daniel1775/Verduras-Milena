import Main from "./views/Main";
import Domicile from "./views/Domicile";
import Shopping from "./views/Shopping";
import Nav from "./views/Nav";
import Footer from "./views/Footer";
import Confirm from "./views/Confirm";
import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [ basket, setBasket ] = useState([]);
  const [ hideSection, setHideSection ] = useState(false);

  const hide = () => {
    setHideSection(true);
  }

  const show = () => {
    setHideSection(false);
  }

  return (
    <BrowserRouter>
      <Nav hideSection={hideSection} />
      <Routes>
        <Route 
          path="/" 
          element={<Main onShow={show} />} 
        />
        <Route 
          path="/domicile" 
          element={<Domicile basket={basket} setBasket={setBasket} onShow={show} />} 
        />
        <Route 
          path="/shopping" 
          element={<Shopping basket={basket} setBasket={setBasket} onHide={hide} />}
        />
        <Route 
          path="/confirm" 
          element={<Confirm basket={basket} onHide={hide} />}
        />
      </Routes>
      <Footer hideSection={hideSection} />
    </BrowserRouter>
  );
}

export default App;
