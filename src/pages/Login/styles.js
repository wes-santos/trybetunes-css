import styled from 'styled-components';
// import loginBackground from './loginBackground.svg';
import party from './party.png';

export const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 5em;
  line-height: 61px;
  transition: 0.4s ease-in-out;
  margin-bottom: 0.4em;

  &:hover {
    color: #ACF2EB;
  }

  @media (max-width: 545px) {
   font-size: 3.5em; 
  }

  @media (max-width: 421px) {
   font-size: 3em; 
  }

  @media (max-width: 347px) {
    font-size: 2.5em;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 28px;
  padding: 15px 185px;
  color: white;
  background: linear-gradient(141deg, rgba(188,61,242,1) 0%, rgba(4,217,196,1) 100%);
  border: none;
  border-radius: 10px;
  margin-top: 25px;
  transition: 0.4s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active {
    opacity: 0.3;
  }

  @media (max-width: 545px) {
    padding: 15px 150px;
    font-size: 18px;
  }

  @media (max-width: 421px) {
    padding: 15px 120px; 
  }

  @media (max-width: 347px) {
    padding: 15px 90px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 545px) {
    align-items: center;
  }
`;

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: rgba(42,8,89,1);
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;
  background-image: url(${party});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1077px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  align-items: center;
  background: linear-gradient(141deg, rgba(76,21,130,1) 0%, rgba(42,8,89,1) 100%);
  border-right: solid 3px rgba(188, 61, 242, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 60%;

  label {
    color: white;
    font-size: 18px;
  }

  input {
    background-color: transparent;
    border: 2px solid #973DF2;
    border-radius: 10px;
    color: white;
    font-size: 22px;
    margin-top: 8px;
    padding: 20px;
    width: 100%;
    transition: 0.3s ease-in-out;
  }

  input:hover {
    border-color: #04D9C4;
  }

  input::placeholder {
    color: white;
    font-size: 22px;
    text-align: left;
  }

  input:focus {
    color: white;
    font-size: 22px;
    outline: none;
    border-color: #04D9C4;
  }

  input:active {
    background-color: black;
  }

  @media (max-width: 1077px) {
    border: none;
    width: 100%;
  }

  @media (max-width: 545px) {
    label {
      font-size: 16px;
    }

    input {
      font-size: 16px;
      text-align: center;
      border-width: 1px;
      padding: 15px;
    }

    input::placeholder {
      font-size: 16px;
      text-align: center;
      opacity: 0.5;
    }

    input:focus {
      font-size: 16px;
    }
  }
`;
