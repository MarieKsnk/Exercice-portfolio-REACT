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
    <div className="texte-container">
        <p><b>Passionnée</b> par la fusion harmonieuse de la <b>créativité</b> et de la <b>rigueur</b> technique du code, j'attache une grande importance à l'alliance de ces deux aspects pour concevoir des <b>solutions</b> numériques aussi <b>esthétiques</b> que <b>fonctionnelles.</b>
        </p>
    </div>
    </>
  );
};

export default Titre;
