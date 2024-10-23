import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/Apropos";
import Contact from "../pages/Contact";
import Projets from "../pages/Projets";
//import ProjetDetails from "../pages/ProjetDetails"; 

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="/projets" element={<Projets />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MyRouter;
