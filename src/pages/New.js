import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NewTask from "../components/NewTask";
import api from "../api";
import emailjs from "emailjs-com";

function New() {
  let history = useHistory();
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${
    date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`;
  const completeDate = `${currentDate} ${date.getHours()}:${date.getMinutes()}`;
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
  const fetchData = async (e) => {
    e.preventDefault();
    const data = {
      title,
      mail,
      state,
      priority,
      created_at: currentDate,
      finish_at,
    };
    const historyData = {
      action: "0",
      date: completeDate,
      data,
    };
    const serviceID = "gmail";
    const templateID = "template_irctc2z";
    const userID = "user_D9qtGdNuCwSyRj6JhOrIe";
    const templateParams = {
      title,
      mail,
      state: "Creada",
    };
    try {
      await api.tasks.create(data);
      await api.history.create(historyData);
      await emailjs.send(serviceID, templateID, templateParams, userID);
    } catch (error) {
      console.log("error");
    }
    history.push("/");
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
