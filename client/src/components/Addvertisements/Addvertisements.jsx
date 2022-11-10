import React from "react";
import Addvertise from "../Addvertise/Addvertise";

function Addvertisements(props) {
  let addvertises = props.addvertises
  return (
    <div>
        {addvertises.map((add, index) => <Addvertise key={index} addvertise={add} />)}
    </div>
  );
}

export default Addvertisements;
