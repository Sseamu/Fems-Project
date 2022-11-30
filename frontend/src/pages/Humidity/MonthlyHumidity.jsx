import React from "react";

import { Header, ElectricPr, HumidityGrid } from "../../components";

const MonthlyHumidity = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="습도" title="월별 습도현황" />
      <ElectricPr />
      <HumidityGrid />
    </div>
  );
};

export default MonthlyHumidity;
