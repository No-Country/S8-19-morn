"use client";
import React, { useState } from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../scss/globals.module.scss";

const { budgetStyled } = styles;

export default function Budget() {
  const [budget, setBudget] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetBudget = () => {
    setBudget(inputValue);
  };

  return (
    <MainLayout>
      <div className={budgetStyled}>
        {budget ? (
          <h5>Tu presupuesto es $ {budget} </h5>
        ) : (
          <>
            <h5>¿Cuál es tu presupuesto de este mes?</h5>
            <input
              type="number"
              placeholder="$"
              value={inputValue}
              onChange={handleChange}
            />
            <button onClick={handleSetBudget}>Establecer Presupuesto</button>
          </>
        )}
      </div>
    </MainLayout>
  );
}
