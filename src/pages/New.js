import React, { useState } from "react";
import NewTask from "../components/NewTask";
import { Redirect } from "react-router-dom";
import api from "../api";

function New() {
  const [title, setTitle] = useState("Titulo");
  const [mail, setMail] = useState("Correo");
  const [priority, setPriority] = useState("0");
  const [finish_at, setFinishAt] = useState("Fecha");
  const handleForm = (data, object) => {
    switch (object) {
      case "title":
        setTitle(data);
        break;
      case "mail":
        setMail(data);
        break;
      case "finish_at":
        setFinishAt(data);
        break;
      default:
        switch (data) {
          case "Baja":
            setPriority("1");
            break;
          case "Alta":
            setPriority("2");
            break;
          default:
            setPriority("0");
            break;
        }
    }
  };
  const fetchData = async () => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${
      date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    }-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`;
    const finishDate = finish_at !== "Fecha" ? finish_at : currentDate;
    const data = {
      title,
      mail,
      priority,
      created_at: currentDate,
      finish_at: finishDate,
      state: 0,
    };
    try {
      await api.tasks.create(data);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <NewTask
      data={{ title, mail, priority, finish_at }}
      handleForm={handleForm}
      fetchData={fetchData}
    />
  );
}

export default New;
