import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EditTask from "../components/EditTask";
import api from "../api";
import emailjs from "emailjs-com";

function Edit(props) {
  let history = useHistory();
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${
    date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`;
  const completeDate = `${currentDate} ${date.getHours()}:${date.getMinutes()}`;
  const id = props.match.params.taskId;
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [state, setState] = useState("");
  const [priority, setPriority] = useState("");
  const [created_at, setCreatedAt] = useState("");
  const [finish_at, setFinishAt] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.tasks.read(id);
        setTitle(data.title);
        setMail(data.mail);
        setState(data.state);
        setPriority(data.priority);
        setCreatedAt(data.created_at);
        setFinishAt(data.finish_at);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, [id]);
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
  const fetchEditData = async (e) => {
    e.preventDefault();
    const data = {
      title,
      mail,
      state,
      priority,
      created_at,
      finish_at,
    };
    const historyData = {
      action: "1",
      date: completeDate,
      data,
    };
    const serviceID = "gmail";
    const templateID = "template_irctc2z";
    const userID = "user_D9qtGdNuCwSyRj6JhOrIe";
    const templateParams = {
      title,
      mail,
      state: "Editada",
    };
    try {
      await api.tasks.update(id, data);
      await api.history.create(historyData);
      await emailjs.send(serviceID, templateID, templateParams, userID);
    } catch (error) {
      console.log("error");
    }
    history.push("/");
  };
  const fetchDeleteData = async (e) => {
    e.preventDefault();
    const data = {
      title,
      mail,
      state,
      priority,
      created_at,
      finish_at,
    };
    const historyData = {
      action: "2",
      date: completeDate,
      data,
    };
    const serviceID = "gmail";
    const templateID = "template_irctc2z";
    const userID = "user_D9qtGdNuCwSyRj6JhOrIe";
    const templateParams = {
      title,
      mail,
      state: "Eliminada",
    };
    try {
      await api.tasks.remove(id);
      await api.history.create(historyData);
      await emailjs.send(serviceID, templateID, templateParams, userID);
    } catch (error) {
      console.log("error");
    }
    history.push("/");
  };
  return (
    <EditTask
      data={{ title, mail, state, priority, finish_at }}
      handleForm={handleForm}
      fetchEditData={fetchEditData}
      fetchDeleteData={fetchDeleteData}
    />
  );
}

export default Edit;
