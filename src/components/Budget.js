import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch, totalExpenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const newBudget = Number(event.target.value);

    if (newBudget > 20000) {
      alert("The upper limit is set to 20000");
      setNewBudget(20000);
    } else if (newBudget < totalExpenses) {
      alert("Budget must be greater than or equal to the total expenses.");
      setNewBudget(totalExpenses);
    } else {
      setNewBudget(newBudget);
    }
  };

  useEffect(() => {
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  }, [newBudget, dispatch]);

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
