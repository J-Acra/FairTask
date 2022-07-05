import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import FairTaskIcon from "../../img/FairTaskIcon.png";

export const Tasks = () => {
  return (
    <div className="taskContainer w-100">
      <div class="taskTitleContainer d-grid">
        <h3 className="title m-auto h3">Tasks</h3>
        <i class="iconContainer fas fa-plus-circle m-auto"></i>
      </div>
      <div className="teamTextContainer ps-4">The A team!</div>
      <div className="teamContainer mt-3 d-flex justify-content-sm-start">
        <div className="photoContainer d-flex flex-row ms-4">
          <div className="boxContainer  me-3">
            <div className="person"></div>
            <div className="personText text-center">Mary</div>
          </div>
          <div className="boxContainer ">
            <div className="person"></div>
            <div className="personText text-center">Kevin</div>
          </div>
        </div>
      </div>

      <div className="toDoList border w-100 bg-$gradient shadow">
        <div className="toDoText text-white h3 mx-auto">To - Do</div>
      </div>

      <div className="greenText toDo">
        <div className="toDoListContent d-flex flex-column justify-content-between">
          <div className="oneToDoList d-grid">
            <div className="toDoListName">Fold Laundry</div>
            <div className="toDoListPoints text-right">35 points</div>
            {/* <hr className="line" /> */}
          </div>
          <div className="oneToDoList d-grid">
            <div className="toDoListName">Get Quote </div>
            <div className="toDoListPoints">25 points</div>
          </div>
        </div>
      </div>

      <div className="upcoming border w-100 bg-$gradient shadow">
        <div className="upcomingText h3 mx-auto">Upcoming</div>
      </div>

      <div className="greenText toDo">
        <div className="upcomingContent d-flex flex-column justify-content-between">
          <div className="oneToDoList d-grid">
            <div className="toDoListName">Calculate Month Expenses</div>
            <div className="toDoListPoints text-right">35 points</div>
          </div>
        </div>
      </div>
    </div>
  );
};
