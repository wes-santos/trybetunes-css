import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 58px;
  line-height: 61px;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 28px;
  padding: 15px 185px;
  color: white;
  background-color: #D705F2;
  border: none;
  border-radius: 10px;
  margin-top: 25px;

  &:hover {
    background-color: #a003b5;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;

  img {
    width: 90%;
    height: 90%;
  }

`;

export const FormWrapper = styled.div`
  align-items: center;
  background-color: #023E73;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  padding: 20px;
  width: 60%;

  label {
    color: #F1F0FF;
    font-size: 18px;
    opacity: 0.75;
  }

  input {
    background-color: transparent;
    border: solid 2px #F1F0FF;
    border-radius: 10px;
    color: #F1F0FF;
    font-size: 22px;
    margin-top: 8px;
    padding: 20px;
    width: 100%;
  }

  input::placeholder {
    color: #F1F0FF;;
    font-size: 22px;
    text-align: left;
  }

  input:focus {
    color: white;
    font-size: 22px;
    outline: none;
  }
`;
