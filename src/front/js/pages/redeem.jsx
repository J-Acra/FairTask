import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
// import StarIcon from "../../img/StarIcon.png";

export const Redeem = () => {
  const [points, setPoints] = useState("45");
  const [reward, setReward] = useState("Massage");
  const [userName, setUserName] = useState("Marry Berry");
  const [rewardTime, setRewardTime] = useState("30");
  const [rewardPoints, setRewardPoints] = useState("140");
  return (
    <div className="heading text text-center h4 font-weight-bold my-4">
      Time to redeem into some fun!
      <div className="imgContainer">
        {/* <img src={StarIcon} className="starIcon img-fluid"></img> */}
      </div>
      <div className="balanceContent d-flex justify-content-center mt-3 h3">
        <div className="text balanceText my-3 text-left h2">
          Balance: {points} points
        </div>
      </div>
      <div className="taskContent">
        <div className="sTaskContent d-flex flex-column justify-content-center">
          <div className="subTaskContent text border bg-white d-grid mt-2 mx-auto align-items-center">
            <div className="rewardImgContainer">Img1</div>
            <div className="rewardAndRequired d-flex flex-column">
              <div className="rewardDescription">Home Cooked Meal</div>
              <div className="requiredDescription">Required: 45 points</div>
            </div>
            <div className="pointsIcon">
              <button
                class="btn claimBtn btn-sm text-white rounded-pill"
                type="submit"
              >
                Claim
              </button>
            </div>
          </div>
          <div className="subTaskContent text border bg-white d-grid mt-2 mx-auto align-items-center">
            <div className="rewardImgContainer">Img2</div>
            <div className="rewardAndRequired d-flex flex-column">
              <div className="rewardDescription">30 minute massage</div>
              <div className="requiredDescription">Required: 45 points</div>
            </div>
            <div className="pointsIcon">
              {" "}
              <div className="pointsIcon">
                <button
                  class="btn claimBtn btn-sm text-white rounded-pill"
                  type="submit"
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
