import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";


const Input = ({ name, label, type = "text" }) => {
  
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const {valueGlobalForm, setValueGlobalForm} = useContext(FormContext)

  // También, utilizaremos un estado local para manejar el estado del input.
  const [changeValue, setChangeValue] = useState('')

  const onChangeValue = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setChangeValue(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    setValueGlobalForm({
      ...valueGlobalForm,
      [name]: changeValue,
    })
  };
  

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={changeValue}
        onChange={onChangeValue}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
