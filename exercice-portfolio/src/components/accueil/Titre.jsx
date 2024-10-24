import React from "react";
import "./titre.css";

const Titre = () => {
  return (
    <>
    <div className="titre-container">
    <div className="ligne-1">
    <h1>CREA</h1>
    <img src="/assets/images/test-photo-profil.png" alt="photo-marie-klisnick" />
    <h1>TIVE</h1>
    </div>
    <div className="ligne-2">
    <h1>WEBDESIGNEUSE</h1>
    </div>
    <div className="ligne-3">
    <h1>& APPRENTIE DEV</h1>
    </div>
    </div>
    </>
  );
};

export default Titre;
