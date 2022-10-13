import React from "react";
import "../CSS/Form.css";

export default function Form() {
  return (
    <div>
      <form>
        <h2>How much do you need?</h2>
        <div className="form-container">
          <div className="form-items-div">
            <label>amount</label>
            <input type="number" className="input-1" />
          </div>
          <div className="form-items-div">
            <label>How Long For</label>
            <input type="number" />
          </div>
          <div className="form-items-divv">
            <label>Repayment</label>
            <input type="number" className="input-3" />
          </div>
          <div className="form-items-div">
            <label>name</label>
            <input type="text" />
          </div>
          <div className="form-items-div">
            <label>email</label>
            <input type="text" />
          </div>
        </div>
        <button type="submit" className="form-btn">
          submit
        </button>
      </form>
    </div>
  );
}
