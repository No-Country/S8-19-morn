import React, { useState } from "react";
import styles from "../../scss/globals.module.scss";

const {styledForm, incomeBtn} = styles;

export default function IncomeForm({ onAddIncome, budget , handleSetBudget}) {
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const handleChangeName = (event) => {
    setIncomeName(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setIncomeAmount(event.target.value);
  };

  const handleAddIncome = () => {

    const newIncome = {
      name: incomeName,
      amount: incomeAmount,
    };



    onAddIncome(newIncome);

    handleSetBudget(parseFloat(budget) + parseFloat(incomeAmount))

    // Limpiar los campos del formulario después de agregar un ingreso
    setIncomeName("");
    setIncomeAmount("");
  };

  return (
    <div className={styledForm}>
      <input
        type="text"
        placeholder="Introduce tu ingreso"
        onChange={handleChangeName}
        value={incomeName}
      />
      <input
        type="number"
        placeholder="Valor"
        value={incomeAmount}
        onChange={handleChangeAmount}
      />
      <button onClick={handleAddIncome} className={incomeBtn}>Agregar nuevo ingreso</button>
    </div>
  );
}
