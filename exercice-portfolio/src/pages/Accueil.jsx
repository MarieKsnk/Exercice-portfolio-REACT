import React from "react";
import Titre from "../components/accueil/Titre";
import Bandeau from "../components/accueil/Bandeau";
import Experiences from "../components/accueil/Experiences";

const Accueil = () => {
  return (
    <>
    <div>
      <Titre />
      <Bandeau />
      <div style={{ height: "200px" }} />
      <Experiences />
      </div>
    </>
  );
};

export default Accueil;