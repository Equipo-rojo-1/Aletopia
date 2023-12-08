import { ImgInput, InputStyle, LoginStyle, MyForm } from './styles';
import { environment } from '../environments/environment';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`http://localhost:3000/api/usuario/login`, {
        username: formValues.email,
        password: formValues.password,
      });

      if (!resp?.data?.token) throw new Error('Error al iniciar sesión');

      toast.success('Inicio de sesión correcto!', {
        style: {
          background: 'rgba(255, 255, 255, 0.25)',
          color: 'rgb(5, 90, 20)',
          border: 0,
        },
      });
      setIsLoggedIn(true);
    } catch (error) {
      toast.error('Error al iniciar sesión!', {
        style: {
          background: 'rgba(255, 255, 255, 0.25)',
          border: 0,
        },
      });
    }
  };

  const [refHeight, setRefHeight] = useState(0);

  useEffect(() => {
    const refComponent = document.getElementById('refComponent');
    if (refComponent) {
      setRefHeight(refComponent.clientHeight);
    }
  }, []);

  return (
    <>
      <LoginStyle>
        <MyForm onSubmit={handleSubmit}>
          <img src={environment.imagePaths.logo} alt="logo" />
          <h1>Iniciar Sesión</h1>
          <label>
            <ImgInput
              src={environment.imagePaths.personal}
              alt="logo"
              adjust={refHeight}
            />
            <InputStyle
              type="text"
              id="refComponent"
              name="email"
              placeholder="Correo"
              value={formValues.email}
              onChange={handleInputChange}
              autoComplete="true"
              required
            />
          </label>
          <label>
            <ImgInput
              src={environment.imagePaths.key}
              alt="logo"
              adjust={refHeight}
            />
            <InputStyle
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formValues.password}
              onChange={handleInputChange}
              autoComplete="true"
              required
            />
          </label>
          <button type="submit">ENTRAR</button>
          <div>
            <span>
              Recuperar<Link to="/">contraseña</Link>
            </span>
          </div>
        </MyForm>
      </LoginStyle>
      {isLoggedIn && (window.location.href = './dashboard')}
    </>
  );
};

export default Login;
