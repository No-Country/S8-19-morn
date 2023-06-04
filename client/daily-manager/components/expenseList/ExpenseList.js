import React from "react";
import styles from "../../scss/globals.module.scss";

const { expenseCtn, styledExpense, styledIncome } = styles;

export default function ExpenseList({ expenses , incomes }) {
  return (
    <div className={expenseCtn}>
      {expenses.length > 0 &&
        expenses.map((expense, index) => (
          <p key={index} className={styledExpense}>
            {expense.name} - {expense.amount}
          </p>
        ))}
      {incomes.length > 0 &&
        incomes.map((incomes, index) => (
          <p key={index} className={styledIncome}>
            {incomes.name} - {incomes.amount}
          </p>
        ))}
    </div>
  );
}
