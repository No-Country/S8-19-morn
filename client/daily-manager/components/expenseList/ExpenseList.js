import React from "react";
import styles from "../../scss/globals.module.scss";

const { expenseCtn, styledExpense, styledIncome } = styles;

export default function ExpenseList({ expenses, incomes , budgetAmount}) {
  // Calcula la suma total de ingresos
  const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);

  // Calcula la suma total de egresos
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Calcula el resultado (ingresos - egresos)
  const result = totalIncome - totalExpense;

  const finalResult = budgetAmount - result

  return (
    <div>
      <div className={expenseCtn}>
        {expenses.length > 0 &&
          expenses.map((expense, index) => (
            <p key={index} className={styledExpense}>
              {expense.name} - {expense.amount}
            </p>
          ))}
        {incomes.length > 0 &&
          incomes.map((income, index) => (
            <p key={index} className={styledIncome}>
              {income.name} - {income.amount}
            </p>
          ))}
      </div>
      <p style={{textAlign:'center'}}>Resultado: {finalResult}</p>
    </div>
  );
}
