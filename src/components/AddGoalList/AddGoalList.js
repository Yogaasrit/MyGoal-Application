import React, { useState } from 'react'
import './AddGoalList.css';
const AddGoalList = (props) => {

  const [enteredText,setEnteredText]=useState('');
  const addGoalHandler = (event) => {
    event.preventDefault();
    
    const goal =  {
      id : Math.random().toString(),
      text : enteredText
    }
    setEnteredText('');
    props.addGoal(goal);
  }

  const textChangeHandler = event =>{
     setEnteredText(event.target.value);
  }
  return (
    <div>
      <form className = "form-style" onSubmit={addGoalHandler}>
        <input type = "text" value = {enteredText} onChange = {textChangeHandler}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddGoalList