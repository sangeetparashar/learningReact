import { React, useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return isEditing ? (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    </div>
  ) : (
    <div className="new-expense">
      <button onClick={startEditingHandler}>Add Expense</button>
    </div>
  );
};

export default NewExpense;
