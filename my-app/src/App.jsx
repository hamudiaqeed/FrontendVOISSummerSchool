import Card from "./components/Card";
import Counter from "./components/Counter";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      {/* Wrap-uim totul in interiorul layout pentru a avea acelasi header
      si footer pe fiecare pagina */}
      <Routes>
        {/* Definim rutele aplicatiei - vezi documentatia react router v6 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* Ruta * pentru orice altceva, in general folosit ca not found page */}
      </Routes>
    </Layout>
  );
}

export default App;
