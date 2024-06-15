import React from "react";
import "./CSS/AddIncome.css";

const AddIncome = ({setIsFormOpen}) => {
  return (
    <div className="form">
      <div className="formDiv">
        <div className="heading">
        <h1>Add Income</h1>
        <p onClick={() => setIsFormOpen(false)}>X</p>
        </div>
        <input type="number" placeholder="Amount" />
        <input type="number" placeholder="Source of income" />
        <button className="addBtn" >Add</button>
      </div>
    </div>
  );
};

export default AddIncome;
