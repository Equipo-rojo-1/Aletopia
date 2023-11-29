import { Link } from 'react-router-dom';
import Login from './login';
import { FooterStyle, MyDiv } from './styles';

export function App() {
  return (
    <MyDiv>
      <Login />
      <FooterStyle role="navigation">
        <ul>
          <li>
            <Link target="_blank" to="https://Facebook.com">
              Facebook
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://Instagram.com">
              Instagram
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="mailto:equiporojo250@gmail.com"
              rel="noreferrer"
            >
              EquipoRojo@gmail.com
            </a>
          </li>
        </ul>
        <div><p>2023 - DevSoft. AletopiaZoo Versión: 0.1</p></div>
      </FooterStyle>
    </MyDiv>
  );
}

export default App;
