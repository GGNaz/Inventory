import React from 'react';


const TaskCount = (props) =>{

  const unfinishedFirstTask = {
    color: 'red'
  }

  const finishedFirstTask = {
    color: 'green'
  }

  return (
    <div>
      <h3>The number of tasks completed are {props.children}</h3>
      <h4 style={props.firstTask?.completed? finishedFirstTask: unfinishedFirstTask}>The first tasks is {props.firstTask?.title? props.firstTask.title : null}</h4>
    </div>
  )

}

export default TaskCount;
