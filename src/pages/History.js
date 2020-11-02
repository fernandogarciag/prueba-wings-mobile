import React, { useState, useEffect } from "react";
import HistoryView from "../components/HistoryView";
import api from "../api";

function History() {
  const [historyData, setHistoryData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataEntry = await api.history.list();
        setHistoryData(dataEntry);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);
  return <HistoryView historyData={historyData} />;
}
export default History;
