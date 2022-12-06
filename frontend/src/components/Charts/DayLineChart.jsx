import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  LineSeries,
  Tooltip,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import { Resize } from "@syncfusion/ej2-react-grids";
import {
<<<<<<< HEAD
  DayLinePrimaryXAxis,
  lineCustomSeries,
=======
  lineCustomSeries,
  LinePrimaryXAxis,
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
  LinePrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../context/UserContext";

const DayLineChart = () => {
  const { currentMode, tempDt } = useStateContext();

  // console.log(tempDt);

  // const tempDt = [{ date: "date", d1: 1, d2: 2, d3: 3, d4: 4 }];
  const TempDataSource = [];

  // 설정온도
  let tempArray = [];
  tempDt.forEach((item) => {
    let year = item.rundate.slice(0, 4);
    let month = item.rundate.slice(4, 6);
    let day = item.rundate.slice(6, 8);
    let hour = item.rundate.slice(8, 10);
<<<<<<< HEAD
    let minute = item.rundate.slice(10, 12);
    tempArray.push({
      x: new Date(year, month, day, hour, minute),
=======
    // let minute = item.rundate.slice(10, 12);/
    tempArray.push({
      x: new Date(year, month, day, hour),
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
      y: item.ahu_set_temp * 1,
    });
  });
  TempDataSource.push([...tempArray]);

  // 리턴온도
  tempArray = [];
  tempDt.forEach((item) => {
    let year = item.rundate.slice(0, 4);
    let month = item.rundate.slice(4, 6);
    let day = item.rundate.slice(6, 8);
    let hour = item.rundate.slice(8, 10);
    let minute = item.rundate.slice(10, 12);

    tempArray.push({
      x: new Date(year, month, day, hour, minute),
      y: item.ahu_ret_temp * 1,
    });
  });
  TempDataSource.push([...tempArray]);

  // 공급온도
  tempArray = [];
  tempDt.forEach((item) => {
    let year = item.rundate.slice(0, 4);
    let month = item.rundate.slice(4, 6);
    let day = item.rundate.slice(6, 8);
    let hour = item.rundate.slice(8, 10);
    let minute = item.rundate.slice(10, 12);

    tempArray.push({
      x: new Date(year, month, day, hour, minute),
      y: item.ahu_sup_temp * 1,
    });
  });
  TempDataSource.push([...tempArray]);

  // 외부온도
  tempArray = [];
  tempDt.forEach((item) => {
    let year = item.rundate.slice(0, 4);
    let month = item.rundate.slice(4, 6);
    let day = item.rundate.slice(6, 8);
    let hour = item.rundate.slice(8, 10);
    let minute = item.rundate.slice(10, 12);

    tempArray.push({
      x: new Date(year, month, day, hour, minute),
      y: item.ahu_out_temp * 1,
    });
  });
  TempDataSource.push([...tempArray]);

  const LineTempData = [
    {
      dataSource: TempDataSource[0],
      xName: "x",
      yName: "y",
      name: "설정온도",
      width: "2",
      marker: { visible: false, width: 10, height: 10 },
      type: "Line",
    },

    {
      dataSource: TempDataSource[1],
      xName: "x",
      yName: "y",
      name: "공급온도",
      width: "2",
      marker: { visible: false, width: 10, height: 10 },
      type: "Line",
    },

    {
      dataSource: TempDataSource[2],
      xName: "x",
      yName: "y",
      name: "리턴온도",
      width: "2",
      marker: { visible: false, width: 10, height: 10 },
      type: "Line",
    },
    {
      dataSource: TempDataSource[3],
      xName: "x",
      yName: "y",
      name: "외부온도",
      width: "2",
      marker: { visible: false, width: 10, height: 10 },
      type: "Line",
    },
  ];

  // console.log(lineChartData[0]);
  console.log(lineCustomSeries);
  console.log(LineTempData);

  return (
    <ChartComponent
      id="line-chart"
      height="480px"
      width="auto"
<<<<<<< HEAD
      primaryXAxis={DayLinePrimaryXAxis}
=======
      primaryXAxis={LinePrimaryXAxis}
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{
        enable: true,
        shared: true,
        // format: "${point.x} : <b>${point.y}",
        // header: "<b>Electric Prediction</b>",
      }}
      crosshair={{ enable: true, lineType: "Vertical" }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime, Tooltip, Crosshair, Resize]} />
      <SeriesCollectionDirective>
        {LineTempData.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default DayLineChart;
