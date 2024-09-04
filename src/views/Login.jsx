import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarFormulario = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert('Contraseña incorrecta');
            return false;
        }

        if (password.length < 6) {
            alert('Contraseña incorrecta')
            return false;
        }

        alert('Contraseña incorrecta');

    }
  return (
    <div>
      <form className="col-md-7 mx-auto my-5">
        <h1>Login</h1>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico" onChange={(event) => setEmail(event.target.value)} />
          </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => validarFormulario(e)}>Login</button>
      </form>
    </div>
  );
}
 
export default Register;
