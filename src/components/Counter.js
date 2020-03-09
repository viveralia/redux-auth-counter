import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";

const Counter = () => {
  const counter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-12 col-md-8 col-lg-5 m-auto">
          <h1 className="h2 text-center mb-4">{counter}</h1>
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-block btn-outline-primary"
                onClick={() => dispatch(decrement())}
              >
                -
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-block btn-outline-primary"
                onClick={() => dispatch(increment())}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
