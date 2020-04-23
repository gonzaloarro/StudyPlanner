// React
import React from "react";
// Components
import DoughtnutChart from "../doughnutChart";


export default function TaskCompletionInfo(props) {

  var completedTasks = 0;
  var expiredTasks = 0;
  var todoTasks = 0;

  props.tasks.forEach((task, i) => {
    if (task.completed) {
      completedTasks++;
    }
    else {
      const taskDate = new Date(task.date_and_time);
      const now = new Date();
      if (taskDate.getTime() < now.getTime()) {
        expiredTasks++;
      }
      else {
        todoTasks++;
      }
    }
  });

  let labels = [];
  let data = [];
  let colors = [];

  if (completedTasks > 0) {
    labels.push("Completadas");
    data.push(completedTasks);
    colors.push('green');
  }

  if (expiredTasks > 0) {
    labels.push("Vencidas");
    data.push(expiredTasks);
    colors.push('red');
  }

  if (todoTasks > 0) {
    labels.push("Por hacer");
    data.push(todoTasks);
    colors.push("#033C73");
  }

  return (
    <>
    {
      props.tasks.length > 0 &&
      <DoughtnutChart
        title="Estado de las tareas"
        labels={labels}
        data={data}
        colors={colors}
      />
    }
    </>
  );
}
