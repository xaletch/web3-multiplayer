import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./page/Home";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
