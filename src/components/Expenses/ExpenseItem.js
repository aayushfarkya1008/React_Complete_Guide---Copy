//component is just javascript or html code in react.js
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  //let title = props.title;
  const clickHandler = () => {
    // console.log("Clicked!");
    setTitle("Updated!");
    console.log("Title");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

//you should one return elemennt inside DIV
// so you should wrap inside one more DIV parent DIV
// in react use divclassname instead of div class
//Card is custom component Card here and value of children is between opening and closing custom component Card in our case
// when button is clicked i want to change props.title all built in html elements has access ,for event listener which is prop
//on click code should be executed which is a function as a value

//How react parses jsx code

// returnns jsx code so no functions are getting called here in listener
//use state is a function and it should be called inside in compnent funtcion
//use state wants a defaut value;
//title is simple a pointer whose value returned is props.title and second value is a function which we can use later to setThevalue
// output of use state is an array so we destructure it

// const in only used in useSTate
