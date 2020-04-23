// React
import React from "react";
// Charts JS
import { Doughnut } from "react-chartjs-2";
// Styled Components
import {
  Wrapper,
  TitleWrapper,
  ChartTitle,
  LegendWrapper,
  Label
} from "./style";


export default function DoughtnutChart(props) {

  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.colors
      }
    ]
  }

  return (
    <Wrapper>
    <TitleWrapper>
      <ChartTitle>{props.title}</ChartTitle>
      </TitleWrapper>
      <LegendWrapper>
        {
          props.labels.map((label, index) => (
            <Label key={index} color={props.colors[index]}>{label}</Label>
          ))
        }
      </LegendWrapper>
      <Doughnut data={data} options={{legend: {display: false}}}/>
    </Wrapper>
  );
}
