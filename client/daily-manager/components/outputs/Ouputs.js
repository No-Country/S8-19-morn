"use client";

import React, { useState } from "react";
import ExpenseForm from "../expenseForm/ExpenseForm";
import ExpenseList from "../expenseList/ExpenseList";
import styles from '../../scss/globals.module.scss';

const {outputs, totalAmmount} = styles;



export default function Ouputs() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const calculateTotalAmount = () => {
    const totalAmount = expenses.reduce(
      (accumulator, currentExpense) => accumulator + +currentExpense.amount,
      0
    );
    return totalAmount;
  };

  return (
    <div className={outputs}>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <p className={totalAmmount}>Tus gastos son: {parseInt(calculateTotalAmount(), 10)}</p>
    </div>
  );
}
