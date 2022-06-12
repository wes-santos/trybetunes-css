import styled from 'styled-components';
import searchIcon from './searchIcon.svg';

export const Container = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Input = styled.input`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  border: 2px solid grey;
  border-radius: 10px;
  color: grey;
  font-size: 18px;
  padding: 20px;
  width: 700px;

  &::placeholder {
    font-size: 18px;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #0597F2;
  border: none;
  border-radius: 10px;
  color: #F1F0FF;
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  padding: 20px 60px;
`;

export const Subtitle = styled.h2`
  color: grey;
  font-size: 24px;
  margin: 20px 0;
`;

export const SearchResults = styled.div`
  margin: 0 auto;
  width: 57.5%;
`;

export const AlbumsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Album = styled.div`
  background-color: #023E73;
  border-radius: 10px;
  /* padding: 10px; */
  width: 31%;

  a {
    color: white;
    text-decoration: none;
    font-weight: 700;
    padding: 10px;
  }
`;

export const ArtistName = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 14px;
  padding: 10px;
`;

export const AlbumImageWrapper = styled.div`
  margin-bottom: 8px;  
  
  img {
    width: 100%;
    height: 100%;
    border-bottom: 2px solid white;
    border-radius: 10px 10px 0 0;
  }
`;
