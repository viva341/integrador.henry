import React, { useState } from "react";
import { validation, passwordValidation } from "./validation";
import style from "./Form.module.css"; // Asegúrate de importar tus estilos CSS

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los datos del usuario
    const usernameErrors = validation({ username: userData.username });
    const passwordErrors = passwordValidation(userData.password);

    // Actualizar el estado de errores con los resultados de la validación
    setErrors({
      username: usernameErrors.username || "",
      password: passwordErrors.password || "",
    });

    // Si no hay errores, puedes enviar el formulario
    if (!usernameErrors.username && !passwordErrors.password) {
      alert("Formulario enviado con éxito!");
      // Aquí podrías enviar los datos a tu servidor o realizar otra acción
    } else {
      alert("El formulario tiene errores, no puede ser enviado.");
    }
  };

  const submiHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style["form-container"]}> {/* Contenedor para centrar */}
      <form onSubmit={submiHandler}>
        <div>
          <label className={style.label} htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.username && <span>{errors.username}</span>}
          {!errors.username && <span>&nbsp;</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span>{errors.password}</span>}
          {!errors.password && <span>&nbsp;</span>}
        </div>
        <button className={style["login-button"]} type="submit">
          ENTRAR
        </button>
      </form>
    </div>
  );
};

export default Form;
