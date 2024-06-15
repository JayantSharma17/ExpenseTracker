import React, { useState } from "react";
import "./CSS/AddIncome.css";

const AddIncome = ({ setIsFormOpen }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Select");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    
 
    } catch (error) {
      console.error("Error adding income:", error);
    }

    setIsFormOpen(false);
  };

  return (
    <div className="form">
      <div className="formDiv">
        <div className="heading">
          <h1>Add Income</h1>
          <p onClick={() => setIsFormOpen(false)}>X</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="health">Health</option> 
            <option value="personal">Personal</option>
            <option value="education">Education</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
          </select>
          <button className="addBtn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
