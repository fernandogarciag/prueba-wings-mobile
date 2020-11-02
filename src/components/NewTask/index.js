import Task from "../Task";
import "./styles.css";
import RedirectButtom from "../RedirectButtom";
import Form from "../Form";

function NewTask({ data, handleForm, fetchData }) {
  return (
    <div className="container-new">
      <div className="half-container">
        <Form
          htitle="Ingrese los datos de la tarea"
          data={data}
          handleForm={handleForm}
        />
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
