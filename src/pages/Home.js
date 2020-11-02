import React, { useState, useEffect } from "react";
import BoxContainer from "../components/BoxContainer";
import api from "../api";

function Home() {
  const [taskList, setTaskList] = useState([]);
  const [taskIdList, setTaskIdList] = useState([[], [], []]);
  useEffect(() => {
    let data = [];
    const fetchData = async () => {
      try {
        data = await api.tasks.list();
      } catch (error) {
        console.log("error");
      }
      console.log(data);
      setTaskList(
        data.reduce((list, task) => {
          list.set(task.id, task);
          return list;
        }, new Map())
      );
      setTaskIdList(
        data.reduce(
          (list, task) => {
            switch (task.state) {
              case 0:
              case "0":
                list[0].push(task.id);
                break;
              case 1:
              case "1":
                list[1].push(task.id);
                break;
              default:
                list[2].push(task.id);
                break;
            }
            return list;
          },
          [[], [], []]
        )
      );
    };
    fetchData();
  }, []);
  return <BoxContainer taskList={taskList} taskIdList={taskIdList} />;
}

export default Home;
