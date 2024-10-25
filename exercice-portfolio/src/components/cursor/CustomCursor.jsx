import React, { useEffect, useState } from "react";
import "./customcursor.css";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseHover, setMouseHover] = useState(false);

  const cursorStyle = {
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "H1" || e.target.tagName === "H2" || e.target.tagName === "H3" || e.target.tagName === "P" || e.target.tagName === "A" || e.target.tagName === "SPAN") {
        setMouseHover(true); // Agrandir le curseur
      }
    };

    const handleMouseOut = () => {
      setMouseHover(false); // Réduire le curseur
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className={`cursor-1 ${mouseHover ? "hover" : ""}`} style={cursorStyle}></div>
  );
};

export default CustomCursor;
