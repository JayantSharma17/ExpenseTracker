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
      
        <select> {/* Use the <select> tag for dropdown menus */}
            <option value="Select">Select</option>
            <option value="health">Health</option>
            <option value="personal">Personal</option> {/* Corrected spelling */}
            <option value="education">Education</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
        </select>
        <button className="addBtn" >Add</button>
      </div>
    </div>
  );
};

export default AddIncome;
