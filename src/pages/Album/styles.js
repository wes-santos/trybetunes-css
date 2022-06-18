import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(90deg, #470587 0%, #55099f 50%, #470587 100%);
`;

export const Title = styled.h2`
  color: #04D9C4;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 12px;

  @media (max-width: 398px) {
   font-size: 16px;
   margin-bottom: 4px; 
  }
`;

export const Subtitle = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 300;

  @media (max-width: 398px) {
    font-size: 14px; 
  }
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 10px;
    height: 22em;
    margin-bottom: 10px;
    box-shadow: 6px 6px 15px rgba(33, 3, 140, 0.1);
  }

  @media (max-width: 398px) {
   img {
    height: 10em;
   } 
  }
`;

export const ImageWrapper = styled.div`
  @media (max-width: 1152px) {
    margin-bottom: 20px;
  }

  @media (max-width: 360px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MusicsWrapper = styled.div`

`;

export const Lala = styled.div`
  align-items: start;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 2em;
  overflow: auto;

  @media (max-width: 1152px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 835px) {
    padding: 1em;
  }

  @media (max-width: 360px) {
    padding: 1em 0.1em;
    /* overflow: none; */
  }
`;
