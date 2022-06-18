import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(90deg, #470587 0%, #55099f 50%, #470587 100%);
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(90deg, #470587 0%, #55099f 50%, #470587 100%);
  /* min-height: 80vh; */
  /* max-height: 100vh; */
`;

export const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 34em;
  gap: 27px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
  }

  label {
    color: white;
  }

  label p {
    margin: 6px 0 10px 0;
  }

  h3 {
    color: rgba(4,217,196,1);
  }

  input {
    border: 1px solid white;
    border-radius: 10px;
    padding: 16px 10px;
    width: 100%;
    margin-bottom: 27px;
    transition: all 0.2s ease-in-out;
  }

  input:focus {
    outline: none;
    border-color: rgba(4,217,196,1);
  }
`;

export const NameContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  margin-bottom: 14px;
  width: 100%;

  h3 {
    margin-bottom: 10px;
  }

  input {
    width: 100%;
  }

  @media (max-width: 356px) {
    flex-direction: column;
    gap: 20px;

    h3 {
      margin-bottom: 0;
    }
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
`;

export const Button = styled.button`
  display: block;
  padding: 12px 60px;
  border-radius: 10px;
  border: 2px solid white;
  background-color: transparent;
  color: rgba(4,217,196,1);
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    color: white;
    border-color: rgba(4,217,196,1);
  }

  &:active {
    background-color: rgba(4,217,196,1);
    color: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    color: rgba(4,217,196,1);
    border-color: white;
    background-color: transparent;
  }
`;
