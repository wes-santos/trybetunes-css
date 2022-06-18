import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    color: white;
    font-weight: 700;
    margin: 60px 0 36px 0;
    font-size: 32px;
    text-align: center;
  }

  background-image: linear-gradient(90deg, #470587 0%, #55099f 50%, #470587 100%);

  @media (max-width: 870px) {
    h2 {
      margin: 20px 0;
    }
  }

`;

export const Container = styled.div`

`;

export const MusicsContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  overflow: auto;

  @media (max-width: 870px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
`;

export const TrackContainer = styled.div`
  img {
    border-radius: 6px;
  }
`;

export const Main = styled.div`
  height: 100vh;
`;
