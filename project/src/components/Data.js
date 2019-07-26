import React from "react";
import "bootstrap";

import "./Data.css";
const Data = props => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.exchange.name}</h5>
        <p>{props.exchange.name}</p>
      </div>
    </div>
  );
};

export default Data;
