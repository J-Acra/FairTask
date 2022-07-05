import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import FairTaskIcon from "../../img/FairTaskIcon.png";
import leftIcon from "../../img/Icon-Left.png";

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
  const [progress, setProgress] = useState("progress1");
  const [fileName, setFileName] = useState("Upload Profile Image");
  const [partnerEmail, setPartnerEmail] = useState("");

  if (logStatus != null) {
    history.push("/home");
  }

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="me-0 d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="loginCard border-0 card ">
                <div className="card-body text-center ">
                  <div className={""}>
                    <div className="form-outline form-white mb-4 loginBox">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="form-control form-control-lg pt-3 border-0 "
                      />
                    </div>
                    <div className="form-outline form-white mb-4 loginBox">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        s
                        placeholder="Password"
                        className="form-control form-control-lg pt-3 border-0 "
                      />
                    </div>
                    <img className="img-fluid mt-3 Icon" src={FairTaskIcon} />
                    <br />
                    <button
                      className="btn btn-dark btn-lg px-5 rounded-pill mt-4"
                      type="submit"
                      onClick={() => {
                        setStep(1);
                        setProgress("progress2");
                      }}
                    >
                      Next
                    </button>
                    <Link
                      to="/login"
                      className="small mb-3 pb-lg-2 mt-4 d-flex"
                    >
                      <div className="text-muted mx-auto fs-5 text-decoration-underline">
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
          <div className="me-0 d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="loginCard border-0 card">
                <div className="card-body text-center">
                  <div className={""}>
                    <div className="form-outline form-white mb-4 loginBox">
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="UserName"
                        className="form-control form-control-lg pt-3 border-0"
                      />
                    </div>
                    <div className="form-outline form-white mb-4 loginBox">
                      <label
                        for="file-upload"
                        className="btn mt-2 mx-1 text-muted fs-5 w-100 text-start"
                      >
                        {fileName}
                      </label>
                      <input
                        onChange={(e) => setFileName(e.target.value)}
                        id="file-upload"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                    <img className="img-fluid mt-3 Icon" src={FairTaskIcon} />
                    <br />
                    <button
                      className="btn btn-dark btn-lg px-5 rounded-pill mt-4 mx-2"
                      type="submit"
                      onClick={() => {
                        setStep(0);
                        setProgress("progress1");
                      }}
                    >
                      Prev
                    </button>
                    <button
                      className="btn btn-dark btn-lg px-5 rounded-pill mt-4"
                      type="submit"
                      onClick={() => {
                        setStep(2);
                        setProgress("progress3");
                      }}
                    >
                      Next
                    </button>
                    <Link
                      to="/login"
                      className="small pb-lg-2 mb-3 mt-4 d-flex"
                    >
                      <div className="text-muted mx-auto fs-5 text-decoration-underline">
                        Existing Account? Log in
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="me-0 d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="loginCard border-0 card">
                <div className="card-body text-center">
                  <div className={""}>
                    <div className="form-outline form-white mb-4 loginBox">
                      <input
                        type="email"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        placeholder="Partner Email"
                        className="form-control form-control-lg pt-3 border-0"
                      />
                    </div>
                    <img className="img-fluid mt-3 Icon" src={FairTaskIcon} />
                    <br />
                    <button
                      className="btn btn-dark btn-lg px-5 rounded-pill mt-4 mx-2"
                      type="submit"
                      onClick={() => {
                        setStep(1);
                        setProgress("progress2");
                      }}
                    >
                      Prev
                    </button>
                    <button
                      className="btn btn-dark btn-lg px-5 rounded-pill mt-4"
                      type="submit"
                      onClick={async () => {
                        try {
                          const payload1 = await actions.createUser(
                            email,
                            password,
                            userName
                          );
                          const payload2 = await actions.createNewSession(
                            email,
                            password
                          );
                          history.push("/tasks");
                        } catch {}
                      }}
                    >
                      Submit
                    </button>
                    <Link
                      to="/login"
                      className="small pb-lg-2 mb-3 mt-4 d-flex"
                    >
                      <div className="text-muted mx-auto fs-5 text-decoration-underline">
                        Existing Account? Log in
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  const renderLabel = (step) => {
    switch (step) {
      case 0:
        return (
          <h1>
            Step 1. Create Account <i class="fas fa-user-circle"></i>
          </h1>
        );
      case 1:
        return (
          <h1>
            Step 2. Profile Setup <i className="fas fa-camera"></i>
          </h1>
        );
      case 2:
        return (
          <h1>
            Send Partner Invite <i class="fas fa-hands-helping"></i>{" "}
          </h1>
        );
    }
  };
  return (
    <div className="dashBody w-100">
      <div className="dashBoardHome">
        <div className="d-flex justify-content-center mt-5 mb-3">
          {renderLabel(step)}
        </div>
        <div className="mb-4">
          <div className="progress bg-dark mx-auto">
            <div className={progress}></div>
          </div>
        </div>
        <div className="container-fluid">{renderForm(step)}</div>
      </div>
    </div>
  );
};
