import React, { useEffect, useState } from "react";
import "./experiences.css"
import AOS from "aos";
import "aos/dist/aos.css";


const experiences = [
{
    id: 1,
    logo: '/assets/logos/logoN4BRANDS.png',
    entreprise: 'AGENCE EXPRIMER',
    poste: 'Webdesign',
    duree: 'Alternance d\'une annee',
    date: '2024...',
    lieu: 'AIX-EN-PROVENCE',
    competences: ['Creations d\'interface web', 'Creations de visuels', 'Integration Elementor', 'Creation newsletters', 'HTML', 'CSS', 'Javascript'],
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    clients: ['Belle mais pas que', 'Move2Digital', 'Complices', 'WoodDesign', 'Convergence']
},
{
  id: 2,
  logo: '/assets/logos/logoN4BRANDS.png',
  entreprise: 'N4BRANDS',
  poste: 'Graphisme & E-commerce',
  duree: 'Alternance d\'une annee',
  date: '2020-21',
  lieu: 'VOIRON',
  competences: ['Creations d\'interface web', 'Creations de visuels', 'Creation GIF', 'Creation newsletters', 'Retouches photos'],
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  clients: ['FitnessBoutique', 'Inshape Nutrition', 'TrainSweatEat Nutrition', 'ToolFitness']
},
{
  id: 3,
  logo: '/assets/logos/logoFF.png',
  entreprise: 'AGENCE FRED&FARID',
  poste: 'Graphisme & Direction Artistique',
  duree: 'Stage de 6 mois',
  date: '2019',
  lieu: 'PARIS',
  competences: ['Creations de visuels', 'Activations', 'Conception d\'idees', 'Mise en page'],
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  clients: ['Remy Martin', 'President', 'Bud']
},
{
  id: 4,
  logo: '/assets/logos/logoAline.png',
  entreprise: 'A LINE',
  poste: 'Graphisme & Direction Artistique',
  duree: 'Stage de 3 mois',
  date: '2018',
  lieu: 'PARIS',
  competences: ['Lignes editoriales', 'Creations de visuels', 'Shooting photo'],
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  clients: ['A Line']
},
{
  id: 5,
  logo: '/assets/logos/logoMicropole.png',
  entreprise: 'MICROPOLE',
  poste: 'Graphisme & Webdesign',
  duree: 'Stage de 2 mois',
  date: '2017',
  lieu: 'LYON',
  competences: ['Creations d\'interface web', 'Creations de visuels', 'HTML', 'CSS'],
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  clients: ['Micropole', 'Star\'s of service']
},]

const Experiences = () => {

  const [openDetails, setOpenDetails] = useState(null);

  const toggleDetails = (id) => {
    setOpenDetails(openDetails === id ? null : id);
  }

   /* Animation des blocs avec AOS */
   useEffect(() => {
    AOS.init({
      duration: 800, // Durée des animations
      offset: 100, // Décalage par rapport au viewport
      once: true, // Exécuter l'animation une seule fois
    });
    AOS.refresh();
  }, []);

    return (
        <>
        <div className="titre-experiences">
            <h1 className="titre-1">MES</h1>
            <h1 className="titre-2">EXPERIENCES</h1>
            <h1 className="titre-3">PROFESSIONNELLES</h1>
        </div>
        <div className="experiences-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experiences-item">
                
              {/* Affichage de la date à côté de la carte */}
              <div className="experiences-date">
                <h1>{exp.date}</h1>
              </div>
      
              {/* Carte d'expérience */}
              <div className="experiences-card"  data-ios="fade-up" data-ios-delay={index * 200}>
                <div className="experiences-logo">
                  <img src={exp.logo} alt={`${exp.entreprise} logo`} />
                </div>
                <div className="experiences-details">
                  <h2 className="entreprise">{exp.entreprise}</h2>
                  <h3 className="poste">{exp.poste}</h3>
                  <p className="duree">{exp.duree}</p>
                  <p className="lieu">{exp.lieu}</p>
                </div>
                <ul className="competences">
                  {exp.competences.map((comp, index) => (
                    <li key={index}>{comp}</li>
                  ))}
                </ul>
                <button className="more-button" onClick={() => toggleDetails(exp.id)}>
                  <img src='../assets/arrow-button.svg' alt="" className={openDetails === exp.id ? "arrow-up" : "arrow-down"}/></button>
                {openDetails === exp.id && (
                  <div className="details-card">
                    <p>{exp.details}</p>
                    <div className="clients-container">
                      <p>Clients</p>
                      <ul className="clients-list">
                        {exp.clients.map((client, index) => (
                          <li key={index}>{client}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    )
}

export default Experiences;