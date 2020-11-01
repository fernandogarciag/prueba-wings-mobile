import "./styles.css";

const getPriority = (priorityId) => {
  switch (priorityId) {
    case "1":
      return "Baja";
    case "2":
      return "Alta";
    default:
      return "Normal";
  }
};

function Task({ data }) {
  const { id, title, mail, priority, finish_at } = data;
  return (
    <div className="box-task" key={id}>
      <h3>{title}</h3>
      <p>Propietario: {mail}</p>
      <p>Prioridad: {getPriority(priority)}</p>
      <p>Finalizar el: {finish_at}</p>
    </div>
  );
}

export default Task;
