import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (prop) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={prop.item[0].title}
        amount={prop.item[0].amount}
        date={prop.item[0].date}
      />
      <ExpenseItem
        title={prop.item[1].title}
        amount={prop.item[1].amount}
        date={prop.item[1].date}
      />
      <ExpenseItem
        title={prop.item[2].title}
        amount={prop.item[2].amount}
        date={prop.item[2].date}
      />
    </Card>
  );
};

export default Expenses;
