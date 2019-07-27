import React from "react";
import { connect } from "react-redux";

import { fetchExchange } from "../store/actions";
import Data from "./Data";

const Exchange = props => {
  const getData = e => {
    e.preventDefault();
    props.fetchExchange();
  };
  console.log(props);

  return (
    <div>
      <h2>In Exchange</h2>
      <button onClick={getData}>Exchange Button</button>
      {props.exchange.map(exchange => {
        return <Data exchange={exchange} />;
      })}

      {/* {props.exchange.map(exchange => {
        return <p>{exchange.name}</p>, <p>{exchange.id}</p>;
      })} */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("in map to props", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    exchange: state.exchange
  };
};

export default connect(
  mapStateToProps,
  { fetchExchange }
)(Exchange);
