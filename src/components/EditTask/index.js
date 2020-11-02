import "./styles.css";
import Task from "../Task";
import RedirectButtom from "../RedirectButtom";
import Form from "../Form";

function EditTask({ data, handleForm, fetchEditData, fetchDeleteData }) {
  return (
    <div className="container-edit">
      <div className="half-container">
        <Form
          htitle="Ingrese los datos de la tarea"
          data={data}
          handleForm={handleForm}
        />
      </div>
      <div className="half-container">
        <Task data={data} />
        <RedirectButtom className="button" href="/" onClick={fetchEditData}>
          Editar Tarea
        </RedirectButtom>
        <RedirectButtom className="button" href="/" onClick={fetchDeleteData}>
          Borrar Tarea
        </RedirectButtom>
      </div>
    </div>
  );
}

export default EditTask;
