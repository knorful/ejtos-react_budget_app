import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState("");

  useEffect(() => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency,
    });
  }, [newCurrency, dispatch]);

  return (
    <div
      style={{
        backgroundColor: "rgb(161 223 145)",
        padding: "11px",
        borderRadius: "8px",
      }}
    >
      <div className="input-group">
        <select
          style={{ backgroundColor: "rgb(161 223 145)", color: "white" }}
          className="form-select"
          id="inputGroupSelect01"
          onChange={(event) => setNewCurrency(event.target.value)}
        >
          <option defaultValue>Currency ($ Dollar)</option>
          <option style={{ color: "black" }} value="$" name="dollar">
            $ Dollar
          </option>
          <option style={{ color: "black" }} value="&pound;" name="pound">
            &pound; Pound
          </option>
          <option style={{ color: "black" }} value="&euro;" name="euro">
            &euro; Euro
          </option>
          <option style={{ color: "black" }} value="&#8377;" name="ruppee">
            &#8377; Ruppee
          </option>
        </select>
      </div>
    </div>
  );
};

export default Currency;
