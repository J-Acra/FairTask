import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import FairTaskIcon from "../../img/FairTaskIcon.png";

export const Login = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const logStatus = JSON.parse(localStorage.getItem("session"));

  if (logStatus != null) {
    history.push("/home");
  }

  return (
    <div className="dashBody w-100">
      <div className="dashBoardHome">
        <div className="container-fluid mt-5">
          <div className="Header-Bar d-flex justify-content-center">
            <div className="display-1 text-center">
              <img
                src={FairTaskIcon}
                className="img-fluid col-3 col-sm-2 me-3"
              ></img>
              FAIRTASK
            </div>
          </div>
          <div className="fs-3 d-flex justify-content-center mb-5 mt-4">
            <div className="mx-auto fs-1">Login to your Account</div>
          </div>
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
                        className="form-control form-control-lg border-0"
                      />
                    </div>

                    <div class="form-outline form-white mb-5 mt-5 loginBox">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        class="form-control form-control-lg border-0"
                      />
                    </div>
                    <button
                      class="btn btn-dark btn-lg mt-4 px-5 rounded-pill"
                      type="submit"
                      onClick={() => {
                        actions
                          .createNewSession(email, password)
                          .then(() => {
                            history.push("/home");
                          })
                          .catch((e) => {
                            toast.error(e.message, { position: "top-center" });
                          });
                      }}
                    >
                      Login
                    </button>
                    <Link to="/register" class="small pb-lg-2 mt-4 d-flex">
                      <div class="text-muted mx-auto fs-5 text-decoration-underline">
                        Create an Account
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
