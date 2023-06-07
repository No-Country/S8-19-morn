"use client";

import React, { useState } from "react";
import ExpenseForm from "../expenseForm/ExpenseForm";
import ExpenseList from "../expenseList/ExpenseList";
import IncomeForm from "../incomeForm/IncomeForm";
import styles from "../../scss/globals.module.scss";
import ProgresiveBar from "../progresiveBar/ProgresiveBar";

const { outputs, totalAmount } = styles;

export default function Ouputs({ budgetAmount, onSetBudget }) {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleAddIncome = (newIncome) => {
    setIncomes([...incomes, newIncome]);
  };

  const setBudgetAmount = (newBudgetAmount) => {
    onSetBudget(newBudgetAmount);
  };

  const handleSetBudget = (newBudgetAmount) => {
    // Actualiza el estado del presupuesto
    setBudgetAmount(newBudgetAmount);
  };

  return (
    <div className={outputs}>
      <IncomeForm
        onAddIncome={handleAddIncome}
        budget={budgetAmount}
        handleSetBudget={handleSetBudget}
      />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} incomes={incomes} />
    </div>
  );
}
