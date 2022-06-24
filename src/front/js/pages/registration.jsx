import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import FairTaskIcon from "../../img/FairTaskIcon.png";

export const Registration = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const logStatus = JSON.parse(localStorage.getItem("session"));
  const [step, setStep] = useState(0);

  if (logStatus != null) {
    history.push("/home");
  }
  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <div class="me-0 d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="loginCard border-0 card">
                <div class="card-body text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <div class="form-outline form-white mb-4 loginBox">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="form-control form-control-lg pt-3 border-0"
                      />
                    </div>
                    <div class="form-outline form-white mb-4 loginBox">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        class="form-control form-control-lg pt-3 border-0"
                      />
                    </div>
                    <button
                      class="btn btn-dark btn-lg px-5 rounded-pill mt-5"
                      type="submit"
                      onClick={() => {
                        setStep(1);
                      }}
                    >
                      Next
                    </button>
                    <Link to="/login" class="small mb-5 pb-lg-2 mt-4 d-flex">
                      <div class="text-muted mx-auto fs-5 text-decoration-underline">
                        Existing Account? Log in
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div class="me-0 d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="loginCard border-0 card">
                <div class="card-body text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <div class="form-outline form-white mb-4 loginBox">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="form-control form-control-lg pt-3 border-0"
                      />
                    </div>
                    <div class="form-outline form-white mb-4 loginBox">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        class="form-control form-control-lg pt-3 border-0"
                      />
                    </div>
                    <button
                      class="btn btn-dark btn-lg px-5 rounded-pill mt-5 mx-2"
                      type="submit"
                      onClick={() => {
                        setStep(0);
                      }}
                    >
                      Prev
                    </button>
                    <button
                      class="btn btn-dark btn-lg px-5 rounded-pill mt-5"
                      type="submit"
                      onClick={() => {
                        setStep(2);
                      }}
                    >
                      Next
                    </button>
                    <Link to="/login" class="small mb-5 pb-lg-2 mt-4 d-flex">
                      <div class="text-muted mx-auto fs-5 text-decoration-underline">
                        Existing Account? Log in
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return "NoHiBye";
    }
  };
  const renderLabel = (step) => {
    switch (step) {
      case 0:
        return <h1>Step 1. Create Account</h1>;
      case 1:
        return <h1>Step 2. Create Your Profile</h1>;
      default:
        return <h1>Step None. Default</h1>;
    }
  };
  return (
    <div className="dashBody w-100">
      <div className="dashBoardHome">
        <div className="d-flex justify-content-center my-5">
          {renderLabel(step)}
        </div>
        <div className="progressOutline my-4">
          <div className="progressFill bg-dark rounded-pill mx-auto">Hello</div>
        </div>
        <div className="container-fluid">{renderForm(step)}</div>
      </div>
    </div>
  );
};
