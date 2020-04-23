// React
import React from "react";
//  Charts JS
import {Line} from "react-chartjs-2";
// Styled Components
import {
  Wrapper,
  ChartTitle,
  Info
} from "./style";

import { withTheme } from 'styled-components';

export default withTheme(LastWeekInfo);

function LastWeekInfo(props) {
  const daysOfTheWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const today = new Date();
  today.setHours(0,0,0,0);
  const now = new Date();
  const sevenDaysAgo = new Date(new Date().setTime(today.getTime()-(7*24*60*60*1000)));

  var labels = [];
  var i;
  for (i = 0; i < 6; i++) {
    labels.push(daysOfTheWeek[(i+1+today.getDay())%7]);
  }
  labels.push("Hoy");

  const lastWeekCompletedTasks = props.tasks.filter((task) => {
    const task_date = new Date(task.completed_at);
    return  task_date.getTime() > sevenDaysAgo.getTime() &&
            task_date.getTime() <= now.getTime() &&
            task.completed;
  });

  var data =[0, 0, 0, 0, 0, 0, 0];
  lastWeekCompletedTasks.forEach((task, i) => {
    const task_date = new Date(task.completed_at);
    var difOnDays = Math.ceil((today - task_date)/(1000*60*60*24));
    if (task_date.getTime() > today.getTime()) {
      difOnDays = 0;
    }
    data[6 - difOnDays]++;
  });

  const average = parseFloat(data.reduce((previous, current) => current += previous) / 7).toFixed(2);

  return (
    <Wrapper>
      <ChartTitle>Tareas completadas en los últimos 7 días</ChartTitle>
        <LineChart
          title="Tareas completadas"
          labels={labels}
          data={data}
          color={props.theme.colors.lighterDominantColor2}
        />
      <Info>{average} tareas completadas por día en la última semana.</Info>
    </Wrapper>
  );
}

function LineChart(props) {

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.title,
        fill: false,
        lineTension: 0.1,
        backgroundColor: props.color,
        borderColor: props.color,
        pointBorderColor: props.color,
        pointBorderWidth: 4,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: props.color,
        pointHoverBorderColor: props.color,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.data
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 1,
        }
      }]
    }
  };

  return (
    <Line data={data} options={options}/>
  );
}
