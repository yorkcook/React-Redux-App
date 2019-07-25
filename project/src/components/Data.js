import React from "react";

const Data = props => {
  return (
    <div>
      <p>{props.exchange.id}</p>
      <p>{props.exchange.name}</p>
    </div>
  );
};

export default Data;
