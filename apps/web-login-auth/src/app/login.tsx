import React, { useState } from 'react';
import { environment } from '../environments/environment';
import { GroupIcon, LoginStyle, MyForm, MyHeadr, MyTitle } from './styles';
import { Link } from 'react-router-dom';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form submitted: ${formValues}`);
    // Logica de autenticación aquí :)
  };

  return (
    <>
      <MyHeadr>
        <MyTitle>
          AletopiaZoo
          <img src={environment.imagePaths.logo} alt="logo" />
        </MyTitle>
      </MyHeadr>

      <LoginStyle>
        <MyForm onSubmit={handleSubmit}>
          <GroupIcon src={environment.imagePaths.groupIco} alt="logo" />
          <h4>Iniciar Sesión</h4>
          <label>
            <img src={environment.imagePaths.personalIco} alt="logo" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <label>
            <img src={environment.imagePaths.keyIco} alt="logo" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Iniciar Sesión</button>
          <div>
            <span>Recuperar</span>
            <Link to="/">Contraseña</Link>
          </div>
        </MyForm>
      </LoginStyle>
    </>
  );
};

export default Login;
