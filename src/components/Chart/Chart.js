import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

//we will render in this component all chart bars
// inside of the div we are importing bars and it would contain logic of chart
// we will output array of data point dynamically and map it in the chart
