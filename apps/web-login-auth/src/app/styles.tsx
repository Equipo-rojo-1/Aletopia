import styled from 'styled-components';

export const MyTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-left: 10px;
  font-size: 30px;
  display: grid;
  
  img {
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin-left: 10px;
    height: auto;
    width: 50px;
  }
`;

export const MyHeadr = styled.header`
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
  background-color: #333;
  text-decoration: none;
  color: white;
  padding: 10px;
`;

export const LoginStyle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(228, 247, 253);
  justify-content: center;
  flex-direction: column;
  text-justify: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  display: flex;

  button {
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.6);
    background-color: #3aa3e9;
    border-radius: 6px;
    padding: 15px 10px;
    margin: 5px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    outline: none;
    border: none;

    &:hover {
      background-color: #2d80b8;
    }
    &:active {
      background-color: #1a567e;
    }
  }
  input {
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
    border: 2px solid #cccddd;
    margin-bottom: 20px;
    border-radius: 6px;
    font-size: 16px;
    padding: 10px 30px;
    outline: none;
    margin: 20px;

    &:focus {
      box-shadow: 0px 4px 2px rgba(121, 189, 231, 0.1);
      border-color: #3498db;
    }
  }

  label {
    grid-template-columns: 20px 0.4fr;
    place-content: center;
    align-items: center;
    display: grid;
  }

  img {
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #ffffff;
    border-right: 30px;
    height: auto;
    width: 35px;
  }
`;

export const GroupIcon = styled.img`
  background: none !important;
  outline: none !important;
  border: 0 !important;
`;

export const FooterStyle = styled.footer`
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.15);
  justify-content: space-between;
  background-color: #333;
  align-items: center;
  flex-direction: row;
  display: flex;

  a {
    text-decoration: none;
    font-variant: bold;
    color: #427deb;

    &:hover {
      text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.4);
      color: #7aafff;
    }
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    padding: 10px;
  }

  p {
    color: white;
    padding-right: 20px;
  }
`;

export const MyDiv = styled.div`
  padding: 0;
  margin: 0;
`;

export const MyForm = styled.form`
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  min-height: 70vh;
  min-width: 60vh;
  padding: 10px;
  margin: 10px;
  height: 80%;
  width: 50%;

  a {
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0);
    text-decoration: none;
    color: #266cee;

    &:hover {
      color: #7aafff;
    }
  }

  div {
    font-size: 15px;
    padding: 20px;
    margin-top: 20px;
  }

  span {
    padding-right: 10px;
  }
`;
