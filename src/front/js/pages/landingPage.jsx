import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import FairTaskIcon from "../../img/FairTaskIcon.png";
import FairTaskLandingImage from "../../img/FairTaskLandingImage.png";

export const LandingPage = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [state, setState] = useState("State");

  if (logStatus != null) {
    history.push("/home");
  }

  return (
    <div className="dashBody w-100">
      <div className="dashBoardHome">
        <div className="container-fluid mt-3">
          <div className="Header-Bar d-flex justify-content-center">
            <div className="display-1 text-center fw-bold">
              <img
                src={FairTaskIcon}
                className="img-fluid col-3 col-sm-2 me-3"
              ></img>
              FAIRTASK
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img className="img-fluid" src={FairTaskLandingImage} />
          </div>
          <div className="my-2">
            <div className="display-5 text-center">
              Finish work, then <br /> have some fun!
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/register">
              <button
                class="btn btn-dark btn-lg px-5 rounded-pill mt-4"
                type="submit"
                onClick={console.log("Hello")}
              >
                Get Started
              </button>
            </Link>
          </div>
          <Link to="/login">
            <div className="fs-5 text-muted text-center text-dark mt-4 text-decoration-underline">
              Existing Account? Log in
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
