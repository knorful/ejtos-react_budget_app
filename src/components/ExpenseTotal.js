import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseTotal = () => {
  const { budget, remaining, currency } = useContext(AppContext);
  return (
    <div className="alert alert-primary">
      <span>
        Spent so far: {currency}
        {budget - remaining}
      </span>
    </div>
  );
};
export default ExpenseTotal;
