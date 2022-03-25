import React from "react";
import "./card.component.css";

export const Card = ({ children }) => {
  const cardStyles = {
    color: "blue",
    fontSize: "24px",
    border: "5px solid blue",
    textAlign: "center",
  };

  return (
    <div className="card" style={cardStyles}>
      {children}
    </div>
  );
};
