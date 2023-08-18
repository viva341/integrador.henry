const validation = (userData) => {
  const errors = {};

  if (!userData.username) {
    errors.username = "Por favor completa este campo";
  } else if (userData.username.length > 35) {
    errors.username = "No puede superar los 35 caracteres";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)) {
    errors.username = "Email inválido";
  }

  return errors;
};

const passwordValidation = (password) => {
  const errors = {};

  if (!password) {
    errors.password = "Por favor completa este campo";
  } else if (password.length < 6 || password.length > 10) {
    errors.password = "Por favor completa este campo";
  }

  return errors;
};

export { validation, passwordValidation };




  
 
  