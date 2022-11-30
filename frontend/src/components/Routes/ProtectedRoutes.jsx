import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar, ThemeSettings, Sidebar } from "../";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../../context/UserContext";
import {
  Area,
  Bar,
  Customers,
  Dashboard,
  HourlyElectricAmount,
  Employees,
  Financial,
  Humidity,
  TempLine,
  Orders,
  Stacked,
  DailyTemperature,
  Ecommerce,
  MainPage,
  MonthlyTemperature,
  HourlyTemperature,
  MonthlyHumidity,
  DailyHumidity,
  HourlyHumidity,
  Test,
} from "../../pages";

const ProtectedRoutes = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    // 실행 시 cu
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* =========================================================================== */}
        {/* 세팅 버튼 */}

        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {/*====================== */}
        {activeMenu ? (
          <div className="w-72 fixed dark:bg-secondary-dark-bg bg-gray-300 sidebar">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg  bg-sky-100 min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="md:static bg-gray-100/70 dark:bg-main-dark-bg navbar w-full bg-fixed">
            <Navbar />
          </div>
          <div className="m-5">
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* 전력량 예측 , 메인페이지 */}
              <Route path="/전력 예측" element={<MainPage />} />
              {/* 공조기 정보 및 사용자정보(후순위) , 1~2개남겨둘 예정*/}
              <Route path="/공조기 정보" element={<Customers />} />
              {/* 공조기별 데이터 */}
              {/* 전력량 */}
              <Route path="/시간별 전력량" element={<HourlyElectricAmount />} />
              <Route path="/일별 전력량" element={<Employees />} />
              <Route path="/월별 전력량" element={<Test />} />
              {/* 온도 */}
              <Route path="/시간별 온도" element={<HourlyTemperature />} />
              <Route path="/일별 온도" element={<DailyTemperature />} />
              <Route path="/월별 온도" element={<MonthlyTemperature />} />
              {/* 습도 */}
              <Route path="/시간별 습도" element={<HourlyHumidity />} />
              <Route path="/일별 습도" element={<DailyHumidity />} />
              <Route path="/월별 습도" element={<MonthlyHumidity />} />

              <Route path="*" element={<Navigate replace to="/전력 예측" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
