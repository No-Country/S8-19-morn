import React, { useState } from "react";
import styles from "../../scss/globals.module.scss";

const { styledForm, expenseBtn } = styles;

export default function ExpenseForm({ onAddExpense, budget, handleSetBudget }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleChangeName = (event) => {
    setExpenseName(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleAddExpense = () => {
    const newExpense = {
      name: expenseName,
      amount: expenseAmount,
    };

    onAddExpense(newExpense);
    handleSetBudget(parseFloat(budget) - parseFloat(expenseAmount));

    // Limpiar los campos del formulario después de agregar un gasto
    setExpenseName("");
    setExpenseAmount("");
  };

  return (
    <div className={styledForm}>
      <input
        type="text"
        placeholder="Introduce tu gasto"
        onChange={handleChangeName}
        value={expenseName}
      />
      <input
        type="number"
        placeholder="Valor"
        value={expenseAmount}
        onChange={handleChangeAmount}
      />
      <button onClick={handleAddExpense} className={expenseBtn}>
        Agregar nuevo egreso
      </button>
    </div>
  );
}
