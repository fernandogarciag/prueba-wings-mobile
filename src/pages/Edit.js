import React, { useEffect, useState } from "react";

import EditTask from "../components/EditTask";
import api from "../api";

function Edit(props) {
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
  const fetchEditData = async () => {
    const data = {
      title,
      mail,
      state,
      priority,
      created_at,
      finish_at,
    };
    try {
      await api.tasks.update(id, data);
    } catch (error) {
      console.log("error");
    }
  };
  const fetchDeleteData = async () => {
    try {
      await api.tasks.remove(id);
    } catch (error) {
      console.log("error");
    }
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
