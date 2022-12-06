import React from "react";
import { TempGrid, Monthheader, MonthLineChart } from "../../components";
import Header from "../../components/common/Header";
import { useStateContext } from "../../context/UserContext";
const HourlyTemperature = () => {
  return (
    <>
      <div className="m-4 md:m-2 mt-24 p-5 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl h-40">
        <Header category="온도" title="월별 온도현황" />
        <Monthheader />
      </div>
      <div className="m-4 md:m-2 mt-24 p-5 bg-white rounded-3xl dark:bg-secondary-dark-bg">
<<<<<<< HEAD
        {/* <LineChart /> */}
=======
        <MonthLineChart />
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
        <TempGrid />
      </div>
    </>
  );
};

export default HourlyTemperature;
