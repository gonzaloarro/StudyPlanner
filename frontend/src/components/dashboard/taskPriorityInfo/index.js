// React
import React from "react";
// Components
import DoughtnutChart from "../doughnutChart";


export default function TaskPriorityInfo(props) {

  const highPriorityTasks = props.tasks.filter((task) => !task.completed && task.priority === 'High');
  const mediumPriorityTasks = props.tasks.filter((task) => !task.completed && task.priority === 'Medium');
  const lowPriorityTasks = props.tasks.filter((task) => !task.completed && task.priority === 'Low');

  let labels = [];
  let data = [];
  let colors = [];

  if (highPriorityTasks.length > 0) {
    labels.push('Alta');
    data.push(highPriorityTasks.length);
    colors.push('red');
  }

  if (mediumPriorityTasks.length > 0) {
    labels.push('Media');
    data.push(mediumPriorityTasks.length);
    colors.push('orange');
  }

  if (lowPriorityTasks.length > 0) {
    labels.push('Baja');
    data.push(lowPriorityTasks.length);
    colors.push('green');
  }

  return (
    <DoughtnutChart
      title="Prioridad de las tareas pendientes"
      labels={labels}
      data={data}
      colors={colors}
    />
  );
}
