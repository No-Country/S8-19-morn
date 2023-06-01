"use client";

import React, { useState } from "react";
import ExpenseForm from "../expenseForm/ExpenseForm";
import ExpenseList from "../expenseList/ExpenseList";
import IncomeForm from "../incomeForm/IncomeForm";
import styles from "../../scss/globals.module.scss";

const { outputs, totalAmount } = styles;

export default function Ouputs() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleAddIncome = (newIncome) => {
    setIncomes([...incomes, newIncome]);
  };

  const calculateTotalAmount = (data) => {
    const totalAmount = data.reduce(
      (accumulator, item) => accumulator + +item.amount,
      0
    );
    return totalAmount;
  };

  return (
    <div className={outputs}>
      <IncomeForm onAddIncome={handleAddIncome} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} incomes={incomes} />
      <p className={totalAmount}>
        Tus gastos son: {parseInt(calculateTotalAmount(expenses), 10)}
      </p>
      <p className={totalAmount}>
        Tus ingresos son: {parseInt(calculateTotalAmount(incomes), 10)}
      </p>
    </div>
  );
}
