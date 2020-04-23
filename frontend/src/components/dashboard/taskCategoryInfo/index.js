// React
import React from "react";
// Styled Components
import { withTheme } from "styled-components";
// Components
import DoughtnutChart from "../doughnutChart";
// Constants
import * as TASK_CATEGORY from "../../../constants/tasks";


export default withTheme(TaskCategoryInfo);

function TaskCategoryInfo(props) {

  var task_map = new Map();
  props.tasks.forEach((task, i) => {
    if (!task.completed) {
      if (task_map.has(task.category)) {
        task_map.set(task.category, task_map.get(task.category) + 1);
      }
      else {
        task_map.set(task.category, 1);
      }
    }
  });

  let colors = [];
  for (var key of task_map.keys()) {
    switch(key) {
      case(TASK_CATEGORY.READING):
        colors.push(props.theme.colors.taskCategory.reading); break;
      case(TASK_CATEGORY.PROBLEM_SOLVING):
        colors.push(props.theme.colors.taskCategory.problemSolving); break;
      case(TASK_CATEGORY.SUMMARIZE):
        colors.push(props.theme.colors.taskCategory.summarize); break;
      case(TASK_CATEGORY.GROUP_STUDY):
        colors.push(props.theme.colors.taskCategory.groupStudy); break;
      case(TASK_CATEGORY.EXAM_SIMULATION):
        colors.push(props.theme.colors.taskCategory.examSimulation); break;
      case(TASK_CATEGORY.TOPIC_REVIEW):
        colors.push(props.theme.colors.taskCategory.topicReview); break;
      case(TASK_CATEGORY.CONCEPT_MAP):
        colors.push(props.theme.colors.taskCategory.conceptMap); break;
      default: colors.push("blue");
    }
  }

  return (
    <DoughtnutChart
      title="Categoría de las tareas pendientes"
      labels={[...task_map.keys()]}
      data={[...task_map.values()]}
      colors={colors}
    />
  );
}
