import React from "react";
import styles from "../../scss/globals.module.scss";

const { expenseCtn, styledExpense } = styles;

export default function ExpenseList({ expenses }) {
  return (
    <div className={expenseCtn}>
      {expenses.length > 0 &&
        expenses.map((expense, index) => (
          <p key={index} className={styledExpense}>
            {expense.name} - {expense.amount}
          </p>
        ))}
    </div>
  );
}
