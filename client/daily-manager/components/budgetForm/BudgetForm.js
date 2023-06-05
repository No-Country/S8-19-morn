import React, { useState } from "react";
import styles from "../../scss/globals.module.scss";

const { budgetForm } = styles;

export default function BudgetForm({ onSetBudget }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetBudget = () => {
   
    

    const budgetData = {
      type: "personal",
      currentAmount: parseInt(inputValue),
    };

    fetch("http://localhost:8080/budget/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(budgetData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onSetBudget(data);
      })
      .catch((error) => {
        // Manejo de errores
        console.error(error);
      });

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
