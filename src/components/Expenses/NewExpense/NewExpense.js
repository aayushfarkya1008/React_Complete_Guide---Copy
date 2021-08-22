import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseDataHandler) => {
    const expenseData = {
      ...enteredExpenseDataHandler,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    //console.log(expenseData);
  };
  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add new button</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;

//so as first we are passing data to newexpense from expense js component
// on SaveExpenseData we are naming when form is submitted in expense form this onSaveExpenseData will get trigerred.
// name can be anything doesnt need to  start with name mentioned
// now we can communicate to app same thing
