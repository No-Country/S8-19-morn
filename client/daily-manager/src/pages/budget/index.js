"use client";
import React, { useState} from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../scss/globals.module.scss";
import Outputs from "../../../components/outputs/Ouputs";
import BudgetForm from "../../../components/budgetForm/BudgetForm";
import BudgetSummary from "../../../components/budgetSummary/BudgetSummary";

const { budgetStyled } = styles;

export default function Budget() {
  const [budget, setBudget] = useState("");

  const handleSetBudget = (value) => {
    setBudget(value);
  };

  // Si no hay un presupuesto establecido, mostrar el formulario para establecerlo
  if (!budget) {
    return (
      <MainLayout>
        <div className={budgetStyled}>
          <BudgetForm onSetBudget={handleSetBudget} />          
        </div>
      </MainLayout>
    );
  }
  // Si hay un presupuesto establecido, mostrar el resumen del presupuesto
  return (
    <MainLayout>
      <div className={budgetStyled}>
        <BudgetSummary budget={budget} />
        <Outputs budgetAmount={budget} onSetBudget={handleSetBudget} />
      </div>
    </MainLayout>
  );
}
