// Imports
import React from 'react';

import { Doughnut } from 'react-chartjs-2';

import {
  Title,
  InfoItem,
  Data
} from './style';

export default function TasksInfo(props) {

  var total_time = 0;
  props.tasks.forEach((item, i) => {
      total_time += item.duration;
  });
  total_time /= 60;

  const today = new Date();


  const todo_tasks = props.tasks.filter((task) => {
    return !task.completed;
  });

  var time_left = 0;
  todo_tasks.forEach((item, i) => {
    time_left += item.duration;
  });
  time_left /= 60;

  var time_completed = total_time - time_left;


  const completed_tasks = props.tasks.filter((task) => {
    return task.completed;
  });

  const today_tasks = props.tasks.filter((task) => {
    var task_date = new Date(task.date_and_time);
    return task_date.getDate() === today.getDate() && task_date.getMonth() === today.getMonth() && task_date.getFullYear() && today.getFullYear();
  });

  const expired_tasks = props.tasks.filter((task) => {
    var task_date = new Date(task.date_and_time);
    return task_date < today && !task.completed;
  });

  var expired_tasks_time = 0;
  expired_tasks.forEach((item, i) => {
    expired_tasks_time += item.duration;
  });
  expired_tasks_time /= 60;

  const data = {
  	labels: [
  		'Tareas por hacer',
  		'Tareas completadas'
  	],
  	datasets: [{
  		data: [todo_tasks.length, completed_tasks.length],
  		backgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		],
  		hoverBackgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		]
  	}]
  };

  const data2 = {
    labels: [
      'Tareas para hoy',
      'Tareas futuras',
      'Tareas vencidas'
    ],
    datasets: [{
      data: [today_tasks.length, todo_tasks.length - today_tasks.length, expired_tasks.length],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };

  return (
    <>
      <Doughnut data={data} />
      <Doughnut data={data2} />
    </>
  );
}
