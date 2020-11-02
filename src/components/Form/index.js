import "./styles.css";

function Form({ htitle, data, handleForm }) {
  const { title, mail, state, priority, finish_at } = data;
  return (
    <form className="form">
      <h3>{htitle}</h3>
      <label htmlFor="title">
        <span>Titulo:</span>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleForm}
        />
      </label>
      <label htmlFor="mail">
        <span>Correo:</span>
        <input
          type="email"
          id="mail"
          name="mail"
          value={mail}
          onChange={handleForm}
        />
      </label>
      <label htmlFor="state">
        <span>Estado:</span>
        <select id="state" name="state" value={state} onChange={handleForm}>
          <option value="0">Sin empezar</option>
          <option value="1">En proceso</option>
          <option value="2">Completado</option>
        </select>
      </label>
      <label htmlFor="priority">
        <span>Prioridad:</span>
        <select
          id="priority"
          name="priority"
          value={priority}
          onChange={handleForm}
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
          value={finish_at}
          onChange={handleForm}
        />
      </label>
    </form>
  );
}

export default Form;
