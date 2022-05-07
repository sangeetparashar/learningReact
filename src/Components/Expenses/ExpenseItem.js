import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (expense) => {
  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title name</button>
    </Card>
  );
};

export default ExpenseItem;
