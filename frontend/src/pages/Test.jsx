import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateContext } from "../context/UserContext";
import { Toggleheader } from "../components";

const Test = () => {
  const { StartDate } = useStateContext();

  const [tempDt, setTempDt] = useState([]);

  const SERVER_URL = "/Get_AHU_temp_Hourly_Data";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(typeof StartDate.ahu_id);
    const response = await axios.get(SERVER_URL, {
      params: {
        ahu_id: `${StartDate.ahu_id}`,
        runDate: `${StartDate.runDate}`,
      },
    });
    setTempDt(response.data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const inv_id = e.target.inv_id.value;
    const runDate = e.target.runDate.value;
    const response = await axios({
      url: SERVER_URL,
      method: "GET",
      params: {
        inv_id,
        runDate,
      },
    });
    setTempDt(response.data);
  };

  //   fetchData();
  return (
    <div className="Test">
      <Toggleheader />
      <form onSubmit={onSubmitHandler}>
        <input name="inv_id" />
        <br />
        <input name="runDate" />
        <br />
        <input type="submit" value="추가" />
      </form>

      {tempDt.map((todo) => (
        <div key={todo.rundate} style={{ display: "flex" }}>
          <div>
            <p>
              공조기 ID : {todo.ahu_id}
              <br />
              실행시간 : {todo.rundate}
              <br />
              설정온도 : {todo.ahu_set_temp}
              <br />
              리턴온도 : {todo.ahu_ret_temp}
              <br />
              공급온도 : {todo.ahu_sup_temp}
              <br />
              설비 외부온도 : {todo.ahu_out_temp}
            </p>
            <p>{todo.inv_kWh}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Test;