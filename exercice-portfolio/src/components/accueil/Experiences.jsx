import React from "react";
import "./experiences.css"


const experiences = [
    {
        id: 1,
        logo: '/assets/logos/logoMicropole.png',
        entreprise: 'MICROPOLE',
        poste: 'Graphisme & Webdesign',
        date: '2017 - STAGE de 2 mois',
        lieu: 'LYON',
        competences: ['Creations d\'interface web', 'Creations de visuels', 'HTML', 'CSS']
    },

    {
        id: 2,
        logo: '/assets/logos/logoAline.png',
        entreprise: 'ALINE',
        poste: 'Graphisme & Direction Artistique',
        date: '2018 - STAGE de 3 mois',
        lieu: 'PARIS',
        competences: ['Lignes editoriales', 'Creations de visuels', 'Shooting photo']
    },

    {
        id: 3,
        logo: '/assets/logos/logoFF.png',
        entreprise: 'AGENCE FRED&FARID',
        poste: 'Graphisme & Direction Artistique',
        date: '2019 - STAGE de 6 mois',
        lieu: 'PARIS',
        competences: ['Creations de visuels', 'Activations', 'Conception d\'idees', 'Mise en page']
    },

    {
        id: 4,
        logo: '/assets/logos/logoN4BRANDS.png',
        entreprise: 'N4BRANDS',
        poste: 'Graphisme & E-commerce',
        date: '2020-2021 - Alternance d\'une annee',
        lieu: 'VOIRON',
        competences: ['Creations d\'interface web', 'Creations de visuels', 'Creation GIF', 'Creation newsletters', 'Retouches photos']
    },

    {
        id: 5,
        logo: '/assets/logos/logoN4BRANDS.png',
        entreprise: 'AGENCE EXPRIMER',
        poste: 'Webdesign',
        date: 'Depuis 2024 - Alternance d\'une annee',
        lieu: 'AIX-EN-PROVENCE',
        competences: ['Creations d\'interface web', 'Creations de visuels', 'Integration Elementor', 'Creation newsletters', 'HTML', 'CSS', 'Javascript']
    },

]

const Experiences = () => {
    return (
        <>
        <div className="experiences-container">
            {experiences.map((exp) => (
                <div key={exp.id} className="experiences-card">
                    <div className="experiences-logo">
                        <img src={exp.logo} alt={`${exp.entreprise} logo`} />
                    </div>
                    <div className="experience-details">
                        <h2>{exp.entreprise}</h2>
                        <h3>{exp.poste}</h3>
                        <p>{exp.date}</p>
                        <p>{exp.lieu}</p>
                        <ul>
                            {exp.competences.map((comp, index) => (
                                <li key={index}>{comp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Experiences;