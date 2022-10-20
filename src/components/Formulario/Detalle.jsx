import { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Detalle = () => {

  const { valueGlobalForm, setValueGlobalForm } = useContext(FormContext)

  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  const sendValue = () => {
    alert("Solicitud enviada :)")
    setValueGlobalForm('')
  }

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {valueGlobalForm.nombre}</p>
          <p>Apellido: {valueGlobalForm.apellido}</p>
          <p>Email: {valueGlobalForm.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {valueGlobalForm.nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={sendValue}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
