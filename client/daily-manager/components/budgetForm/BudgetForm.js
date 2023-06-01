import React, { useState } from "react";
import styles from "../../scss/globals.module.scss";

const { budgetForm } = styles;

export default function BudgetForm({ onSetBudget }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetBudget = () => {
    onSetBudget(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h5>¿Cuál es tu presupuesto de este mes?</h5>
      <div className={budgetForm}>
        <input
          type="number"
          placeholder="$"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSetBudget}>Establecer Presupuesto</button>
      </div>
    </>
  );
}
