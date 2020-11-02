import React, { useState } from "react";
import NewTask from "../components/NewTask";
import api from "../api";

function New() {
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${
    date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`;
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [state, setState] = useState("0");
  const [priority, setPriority] = useState("0");
  const [finish_at, setFinishAt] = useState(currentDate);
  const handleForm = ({ target }) => {
    const { id, value } = target;
    switch (id) {
      case "title":
        setTitle(value);
        break;
      case "mail":
        setMail(value);
        break;
      case "state":
        setState(value);
        break;
      case "finish_at":
        setFinishAt(value);
        break;
      default:
        setPriority(value);
    }
  };
  const fetchData = async () => {
    const data = {
      title,
      mail,
      state,
      priority,
      created_at: currentDate,
      finish_at,
    };
    try {
      await api.tasks.create(data);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <NewTask
      data={{ title, mail, state, priority, finish_at }}
      handleForm={handleForm}
      fetchData={fetchData}
    />
  );
}

export default New;
