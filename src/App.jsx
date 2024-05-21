//Importação dos componetes react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importação das rotas
import Home from "./pages/Home";

export default function App() {
  return (
    //Roteamento por react-router-dom
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
