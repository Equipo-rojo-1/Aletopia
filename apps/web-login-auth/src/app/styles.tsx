import styled from 'styled-components';

export const LoginStyle = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background: linear-gradient(
    43deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );

  h1 {
    font-size: 25px;
    pointer-events: none;
  }

  img {
    height: 100px;
    pointer-events: none;
  }
`;

export const MyForm = styled.form`
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #000000a3;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 50px 50px;

  button {
    text-shadow: 2px 2px 2px rgba(1, 1, 1, 0.2);
    background-color: #2cabff;
    border-radius: 8px;
    padding: 8px 8px;
    margin: 20px;
    cursor: pointer;
    font-size: 12px;
    color: white;
    outline: none;
    border: none;

    &:hover {
      background-color: #2e93d6;
    }
    &:active {
      background-color: #69c3ff;
      font-weight: bolder;
    }
  }

  label {
    grid-template-columns: auto 1fr;
    place-content: center;
    align-items: center;
    display: grid;
  }

  span {
    font-size: calc(7px + 1vmin);
    pointer-events: none;
  }

  a {
    color: #22c1ff;
    text-decoration: none;
    pointer-events: auto !important;
    padding-left: 6px;

    &:hover {
      color: #6bd8ff;
    }

    &:active {
      color: #8ce0ff;
    }
  }
`;

interface AjustHeight {
  adjust: number;
}

export const ImgInput = styled.img<AjustHeight>`
  background-color: white;
  padding: 3.1px 5px;
  margin-left: 2px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(1, 1, 1, 0.2);
  background: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  height: ${(props) => props.adjust}px !important;
  width: 40px;
`;


export const InputStyle = styled.input`
  border: 0px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-bottom-left-radius: 0%;
  border-top-left-radius: 0%;
  margin-top: 10px;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 50px;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 10px rgba(63, 194, 255, 1) !important;
    transition: box-shadow 0.3s ease;
  }

  ::placeholder {
    color: #555;
  }

  &:focus::placeholder {
    color: #999;
  }

  &:invalid {
    box-shadow: 0px 0px 10px #ff3f3f !important;
    transition: box-shadow 0.3s ease;
  }

  &:not(:focus):not(:valid) {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2) !important;
    transition: box-shadow 0.3s ease;
  }
`;