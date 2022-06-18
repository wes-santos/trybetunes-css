import styled from 'styled-components';
// import filledHeart from './filledHeart.svg';

export const Container = styled.div`
  align-items: center;
  display: flex;
  color: white;
  padding: 1em 2em;
  margin-left: 3em;
  justify-content: space-between;
  border-top: 1px solid #04D9C4;
  border-bottom: 1px solid #04D9C4;

  @media (max-width: 1152px) {
    margin: 0 2em;
  }

  @media (max-width: 870px) {
   padding: 0.5em 1em;
   width: 80vw;
   margin: 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 25px;
  width: 25px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 870px) {
   height: 20px;
   width: 20px; 
  }
`;

export const MusicTime = styled.p`
  /* margin-right: 20px; */
`;

export const MusicContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;

  img {
    border-radius: 10px;
    height: 50px;
  }

  label {
    cursor: pointer;
  }

  label img {
    height: 35px;
  }

  input {
    display: none;
  }

  @media (max-width: 870px) {
    gap: 1em;

    img {
      height: 40px;
      border-radius: 5px;

    }

    label img {
      height: 20px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Player = styled.div`
  margin-left: 12em;

  @media (max-width: 614px) {
    margin-left: 8em;
  }
  @media (max-width: 870px) {
    margin-left: 0.5em;
  }

`;
