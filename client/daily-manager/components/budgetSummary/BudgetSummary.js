import React from "react";
import styles from "../../scss/globals.module.scss";


const { budgetSummary, resumeTitle } = styles;

export default function BudgetSummary({ budget }) {
  return (
    <div className={budgetSummary}>
      <h5 className={resumeTitle}>Tu presupuesto es $ {budget}</h5>      
    </div>
  )
}
