import styled from 'styled-components';
// import filledHeart from './filledHeart.svg';

export const Container = styled.div`
  align-items: center;
  display: flex;
  color: white;
  padding: 1em 0.8em;
  margin-left: 3em;
  justify-content: space-between;
  border-top: 1px solid #04D9C4;
  border-bottom: 1px solid #04D9C4;
`;

export const FavoriteCheckbox = styled.input`
  border: 8px solid red;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MusicTime = styled.p`
  /* margin-right: 20px; */
`;

export const MusicContainer = styled.div`
  display: flex;
  gap: 2em;
`;

export const Player = styled.div`
  margin-left: 12em;
`;
