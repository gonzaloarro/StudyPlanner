import React from "react";

import { buildStyles } from 'react-circular-progressbar';

import { withTheme } from 'styled-components';

import {
  Progress,
  ProgressInfo
} from './style';

export default withTheme(ProgressInformation);

function ProgressInformation(props) {
  const numberOfTasks = props.tasks.length;
  const numberOfCompletedTasks = props.tasks.filter((task) => task.completed).length;
  const progress = numberOfTasks > 0 ? parseInt(((numberOfCompletedTasks * 100) / numberOfTasks).toFixed(2)) : 0;

  return (
    <>
      <Progress
        value={progress}
        text={progress+"%"}
        styles={buildStyles({
          textSize: "1rem",
          pathColor: props.theme.colors.lighterDominantColor2,
          textColor: props.theme.colors.lighterDominantColor2,
          trailColor: "gray"
        })}
      />
      <ProgressInfo>{numberOfCompletedTasks} de {numberOfTasks} tareas realizadas.</ProgressInfo>
    </>
  )
}
