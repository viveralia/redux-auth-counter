import React from "react";
import Counter from "./components/Counter";
import LogIn from "./components/LogIn";
import { useSelector } from "react-redux";

const App = () => {
  const isLogged = useSelector(({ auth }) => auth);

  return isLogged ? <Counter /> : <LogIn />;
};

export default App;
