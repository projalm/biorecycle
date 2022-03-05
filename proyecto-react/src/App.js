import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Layout from "./components/shared/Layout";
import Acopiomap from "./pages/Acopiomap";
import Municipalidad from "./pages/Municipalidad";
import Perfil from "./pages/Perfil";
import Reciclar from "./pages/Reciclar";
import Registro from "./pages/Registro";
import Canje from "./pages/Canje";
import Catalogo from "./pages/Catalogo";
import Codigo from "./pages/Codigo";
import Index from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Index></Index>}></Route>
        </Route>
        <Route path="/login/" element={<Layout></Layout>}>
          <Route index element={<LoginForm></LoginForm>}></Route>
        </Route>
        <Route path="/registro/" element={<Layout></Layout>}>
          <Route index element={<Registro></Registro>}></Route>
        </Route>
        <Route path="/municipalidad/" element={<Layout></Layout>}>
          <Route index element={<Municipalidad></Municipalidad>}></Route>
        </Route>
        <Route path="/acopio/" element={<Layout></Layout>}>
          <Route index element={<Acopiomap></Acopiomap>}></Route>
        </Route>
        <Route path="/catalogo/" element={<Layout></Layout>}>
          <Route index element={<Catalogo></Catalogo>}></Route>
        </Route>
        <Route path="/canje/" element={<Layout></Layout>}>
          <Route path=":id" element={<Canje></Canje>}></Route>
        </Route>
        <Route path="/codigo/" element={<Layout></Layout>}>
          <Route index element={<Codigo></Codigo>}></Route>
        </Route>
        <Route path="/perfil/" element={<Layout></Layout>}>
          <Route index element={<Perfil></Perfil>}></Route>
        </Route>
        <Route path="/reciclar/" element={<Layout></Layout>}>
          <Route index element={<Reciclar></Reciclar>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
