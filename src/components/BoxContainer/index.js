import { MdBrush, MdCheck, MdTimeline } from "react-icons/md";
import "./styles.css";
import Task from "../Task";
function BoxContainer({ taskList, taskIdList }) {
  return (
    <div className="box-container">
      <div className="box">
        <div className="box-title start">
          <MdBrush size="20px" />
          <h2>Sin empezar</h2>
        </div>
        <div className="box-tasks">
          {taskIdList[0].map((id) => {
            return <Task key={id} data={taskList.get(id)} />;
          })}
        </div>
      </div>
      <div className="box">
        <div className="box-title process">
          <MdTimeline size="20px" />
          <h2>En proceso</h2>
        </div>
        <div className="box-tasks">
          {taskIdList[1].map((id) => {
            return <Task key={id} data={taskList.get(id)} />;
          })}
        </div>
      </div>
      <div className="box">
        <div className="box-title finished">
          <MdCheck size="20px" />
          <h2>Completado</h2>
        </div>
        <div className="box-tasks">
          {taskIdList[2].map((id) => {
            return <Task key={id} data={taskList.get(id)} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BoxContainer;
