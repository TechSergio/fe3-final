import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length < 6) {
      setError(' Por favor verifique su información nuevamente');
    } else if (!isValidEmail(formData.email)) {
      setError('Por favor verifique su información nuevamente');
    } else {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos pronto vía correo electrónico.`);
      setError('');
      console.log("Informacion enviada.")
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };


  return (
    <div >
      <form >
        <div >
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{marginLeft: '5px' }}
          />
        </div>
        <div >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{marginLeft: '25px' }}
          />
        </div>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Form;
