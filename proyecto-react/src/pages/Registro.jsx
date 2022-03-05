import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DJANGO from "../utils/DJANGO";

const Registro = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddres] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const signup = (event) => {
    event.preventDefault();
    const body = {
      email: email,
      name: name,
      last_name: lastName,
      second_last_name: lastName2,
      username: username,
      dni: dni,
      city: city,
      address: address,
      phone: phone,
      password: password,
      password2: password2,
    };
    console.log(body);
    DJANGO.post("/auth/signup/", body)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="formulario w-75 m-auto">
        <h1 className="text-center mt-5 mb-5">Registrate</h1>
        <form className="mb-5">
          <div className="form-row d-flex justify-content-between">
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Nombres</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Nombres"
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="inputApellidos">Apellido paterno</label>
              <input
                type="text"
                className="form-control"
                id="inputApellidos"
                placeholder="Apellidos"
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
              />
            </div>
          </div>
          <div className="form-row d-flex justify-content-between">
            <div className="form-group col-md-6">
              <label htmlFor="inputApellidos">Apellidos materno</label>
              <input
                type="text"
                className="form-control"
                id="inputApellidos2"
                placeholder="Apellidos"
                value={lastName2}
                onChange={(event) => setLastName2(event.currentTarget.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="dni">DNI</label>
              <input
                type="text"
                className="form-control"
                id="dni"
                placeholder="Numero de documento"
                value={dni}
                onChange={(event) => setDni(event.currentTarget.value)}
              />
            </div>
          </div>
          <div className="form-row d-flex justify-content-between">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Ejemplo: ecologoneitor"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputContraseña">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="inputContraseña"
              placeholder="Contraseña"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputContraseña">Repita la Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="inputContraseña2"
              placeholder="Contraseña"
              value={password2}
              onChange={(event) => setPassword2(event.currentTarget.value)}
            />
          </div>

          <div
            className="form-col d-flex justify-content-between mt-4"
            style={{ height: "40px" }}
          >
            <select
              className="form-select"
              aria-label="Default select example"
              value={city}
              onChange={(event) => setCity(event.currentTarget.value)}
            >
              <option selected>Departamento</option>
              <option value="1">Amazonas</option>
              <option value="2">Áncash</option>
              <option value="3">Apurímac</option>
              <option value="4">Arequipa</option>
              <option value="5">Ayacucho</option>
              <option value="6">Cajamarca </option>
              <option value="7">Callao</option>
              <option value="8">Cusco</option>
              <option value="9">Huancavelica</option>
              <option value="10">Huánuco</option>
              <option value="11">Ica</option>
              <option value="12">Junín</option>
              <option value="13">La Libertad </option>
              <option value="14">Lambayeque</option>
              <option value="15">Lima Metropolitana </option>
              <option value="16">Loreto</option>
              <option value="17">Madre de Dios </option>
              <option value="18">Moquegua</option>
              <option value="19">Pasco </option>
              <option value="20">Piura</option>
              <option value="21">Puno</option>
              <option value="22">San Martín</option>
              <option value="23">Tacna</option>
              <option value="24">Tumbes</option>
              <option value="25">Ucayali</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputDireccion">Direccion</label>
            <input
              type="text"
              className="form-control"
              id="inputDireccion"
              placeholder="Apartment, studio, or floor"
              value={address}
              onChange={(event) => setAddres(event.currentTarget.value)}
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputTelefono">Telefono</label>
            <input
              type="number"
              className="form-control"
              id="inputTelefono"
              value={phone}
              onChange={(event) => setPhone(event.currentTarget.value)}
            />
            <button
              type="submit"
              className="btn btn-primary bg-success mt-3"
              onClick={signup}
            >
              Registrar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Registro;
