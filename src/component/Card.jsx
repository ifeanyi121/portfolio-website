import React from "react";
import "../index.css";

const Card = (props) => {
    return (
       <div className="card">
           <h2>{props.title}</h2>
           <ul>
               {props.content.map((item, index) => (
                   <li key={index}>{item}</li>
               ))}
           </ul>

       </div>


    );
};

export default Card;