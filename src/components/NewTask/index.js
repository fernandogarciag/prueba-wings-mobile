import Task from "../Task";
import "./styles.css";
import RedirectButtom from "../RedirectButtom";

function NewTask({ data, handleForm, fetchData }) {
  const handleChange = ({ target }) => {
    const { id, value } = target;
    handleForm(value, id);
  };
  const date = new Date();
  return (
    <div className="container">
      <div className="half-container">
        <form className="form">
          <h3>Ingrese los datos de la tarea</h3>
          <label htmlFor="title">
            <span>Titulo:</span>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="mail">
            <span>Correo:</span>
            <input type="email" id="mail" name="mail" onChange={handleChange} />
          </label>
          <label htmlFor="priority">
            <span>Prioridad:</span>
            <select
              value="0"
              id="priority"
              name="priority"
              onChange={handleChange}
            >
              <option value="1">Baja</option>
              <option value="0">Normal</option>
              <option value="2">Alta</option>
            </select>
          </label>
          <label htmlFor="finish_at">
            <span>Terminar el:</span>
            <input
              type="date"
              id="finish_at"
              name="finish_at"
              defaultValue={`${date.getFullYear()}-${
                date.getMonth() > 8
                  ? date.getMonth() + 1
                  : `0${date.getMonth() + 1}`
              }-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <div className="half-container">
        <Task data={data} />
        <RedirectButtom className="button" href="/" onClick={fetchData}>
          Crear Tarea
        </RedirectButtom>
      </div>
    </div>
  );
}

export default NewTask;
