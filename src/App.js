import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import "./App.css";
import AddGoalList from "./components/AddGoalList/AddGoalList";

const App = () => {
  const [courseGoals,setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);
  const addNewGoalHandler = (goal) => {
    // setCourseGoals(courseGoals.concat(goal));
    setCourseGoals((prevCourseGoals)=> prevCourseGoals.concat(goal))
    console.log(courseGoals);
  }
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
      <AddGoalList addGoal = {addNewGoalHandler}/>
    </div>
  );
};

export default App;
