// FormularioPopup.js
import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import './FormularioPopup.css';
emailjs.init('rl3xQXDjaL9G1rjPO');
const FormularioPopup = ({ mostrar, cerrarPopup }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: 'John Doe',  
      to_name: 'Mary',
      message: 'Hello World!'
    };
  
    emailjs.send('service_kqujybo', 'template_5n1sapc', templateParams)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  return (
   
        mostrar && (
      <div className="popup-background">
        <div className="popup-content">
          <button className="cerrar-btn" onClick={cerrarPopup}>
            <span className="cerrar-icon">x</span>
          </button>
          <h2>Formulario</h2>
          <form>
            <div className="campo-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <input className="campo-formulario"
  name="nombre"
  value={formData.nombre}
  onChange={handleChange}
/>
            </div>
            <div className="campo-formulario">
              <label htmlFor="email">Email:</label>
              <input 
  name="email"
  value={formData.email}
  onChange={handleChange}
/>
            </div>
            <div className="campo-formulario">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea name="mensaje" rows="3"  value={formData.mensaje}
  onChange={handleChange}></textarea>
            </div>
            <button onClick={handleSubmit} type="submit" className="enviar-btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
    )


    );
};

export default FormularioPopup;
