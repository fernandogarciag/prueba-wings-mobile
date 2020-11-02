import "./styles.css";

function HistoryView({ historyData }) {
  const renderData = () => {
    return Object.entries(historyData).map(([key, value], i) => {
      let { action, date, data, id } = value;
      switch (action) {
        case "0":
          action = "Creado";
          break;
        case "1":
          action = "Editado";
          break;
        default:
          action = "Borrado";
          break;
      }
      let { title, mail, state, priority, created_at, finish_at } = data;
      switch (state) {
        case "0":
          state = "Sin empezar";
          break;
        case "1":
          state = "En proceso";
          break;
        default:
          state = "Completado";
          break;
      }
      switch (priority) {
        case "0":
          priority = "Normal";
          break;
        case "1":
          priority = "Baja";
          break;
        default:
          priority = "Alta";
          break;
      }
      return (
        <div className="history" key={id}>
          <h2>
            {action} el {date}
          </h2>
          <div className="task">
            <h3>Tarea:</h3>
            <p>Titulo: {title}</p>
            <p>Correo: {mail}</p>
            <p>Estado: {state}</p>
            <p>Prioridad: {priority} </p>
            <p>Fecha de vencimiento: {finish_at}</p>
            <p>Fecha de creacion: {created_at} </p>
          </div>
        </div>
      );
    });
  };
  return <div className="container">{renderData()}</div>;
}

export default HistoryView;
