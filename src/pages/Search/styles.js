import styled from 'styled-components';
import searchIcon from './searchIcon.svg';

export const ContainerWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 80px;

  @media (max-width: 480px) {
    width: 90%;
  }

  @media(max-width: 1500px) {
    width: 80%;
    margin-bottom: 200px;
  }
`;

export const Container = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  border: none;
  border-radius: 10px;
  color: #21038C;
  font-size: 18px;
  padding: 20px;
  width: 70%;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 1px solid #04D9C4;
  }

  &::placeholder {
    font-size: 18px;
  }

  &:focus {
    outline: none;
    border: 1px solid #04D9C4;
  }

  @media (max-width: 519px) {
    background-image: none;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
    border-radius: 6px;

    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const Button = styled.button`
  background: linear-gradient(141deg, rgba(188,61,242,1) 0%, rgba(4,217,196,1) 100%);
  border: none;
  border-radius: 10px;
  color: #F1F0FF;
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  padding: 20px 60px;
  transition: 0.4s ease-in-out;
  width: 30%;
 
  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5
  }
  
  &:active {
    opacity: 0.3;
  }

  @media (max-width: 1093px) {
    padding: 20px 40px;
    font-size: 18px;
  }

  @media (max-width: 872px) {
    padding: 20px 20px;
    font-size: 18px;
  }

  @media (max-width: 616px) {
    padding: 20px 10px;
    font-size: 18px;
  }

  @media (max-width: 514px) {
    padding: 20px 7px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
    border-radius: 6px;
    width: 40%;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  background: -webkit-linear-gradient(146deg, white 0%, rgba(4,217,196,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  margin: 20px 0;
  margin-left: 10px;

  @media (max-width: 480px) {
    margin: 10px 0;
    font-size: 18px;
  }
`;

export const SearchResults = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const AlbumsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;

export const Album = styled.div`
  background: linear-gradient(146deg, rgba(188,61,242,1) 0%, rgba(4,217,196,1) 100%);
  border-radius: 10px;
  height: 390px;
  width: 31%;
  box-shadow: #2E0259 0 0 20px 4px;
  
  @media(max-width: 784px) {
    width: 100%;
    height: 90%;
  }

  @media(min-width: 785px) and (max-width: 1500px) {
    width: 48%;
  }

  @media (min-width: 794px) {
    height: 410px;
  }

  @media (min-width: 846px) {
    height: 430px;
  }

  @media(min-width: 901px) {
    height: 440px;
  }

  @media (min-width: 945px) {
    height: 450px;
  }

  @media (min-width: 981px) {
    height: 460px;
  }

  @media(min-width: 1544px) {
    height: 470px;
  }

  @media (min-width: 1008px) {
    height: 490px;
  }

  @media (min-width: 1067px) {
    height: 500px;
  }

  @media (min-width: 1140px) {
    height: 530px;
  }

  @media (min-width: 1200px) {
    height: 550px;
  }

  @media (min-width: 1270px) {
    height: 570px;
  }

  @media (min-width: 1333px) {
    height: 590px;
  }

  @media (min-width: 1357px) {
    height: 620px;
  }

  @media (min-width: 1443px) {
    height: 640px;
  }

  @media (min-width: 1497px) {
    height: 380px;
  }

  @media(min-width: 1600px) {
    height: 420px;
  }

  @media(min-width: 1715px) {
    height: 440px;
  }

  @media (min-width: 1878px) {
    height: 460px;
  }

  @media (min-width: 1917px) {
    height: 470px;
  }

  @media (min-width: 2147px) {
    height: 490px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    opacity: 0.8;
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

export const CollectionName = styled.div`
  padding-left: 10px;
`;
