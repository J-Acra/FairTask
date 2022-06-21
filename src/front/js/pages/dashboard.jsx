import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.jsx";

export const DashBoard = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  //declare states here vvvv
  const [state, setState] = useState("State");

  const logStatus = JSON.parse(localStorage.getItem("session"));

  if (logStatus === null) {
    history.push("/");
  }

  return (
    <div className="dashBody wrap w-100">
      <Navbar />
    </div>
  );
};
