"use client";
import React, { useState } from "react";
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
  return (
    <MainLayout>
      <div className={budgetStyled}>
        {budget ? (
          <BudgetSummary budget={budget} />
        ) : (
          <BudgetForm onSetBudget={handleSetBudget} />
        )}

        <Outputs />
      </div>
    </MainLayout>
  );
}
