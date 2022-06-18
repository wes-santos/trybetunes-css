import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(90deg, #470587 0%, #55099f 50%, #470587 100%);
`;

export const Container = styled.div`
  background-image: linear-gradient(90deg, #470587 0%, #55099f 50%, #470587 100%);
`;

export const EditProfile = styled.div`

`;

export const Profile = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 3% auto;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 60px;

  @media (max-width: 800px) {
    background-color: transparent;
    flex-direction: column;
    width: 100%;
    color: white;
    justify-content: center;

    padding: 30px;

    img {
      height: 180px;
      align-self: center;
      margin-bottom: 30px;
    }

    h3 {
      color: #04D9C4;
      font-size: 18px;
    }

    p {
      font-size: 14px;
      margin-top: 6px;
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
      text-align: center;
      color: #54f2e2;
      font-size: 14px;
      font-weight: 700;
      border: solid 2px #54f2e2;
      border-radius: 10px;
      padding: 10px;
      transition: all 0.2s ease-in-out;
      display: block;
      width: 100%;
      margin-top: 20px;
    }

    a:hover {
      color: #04d9c4;
      border: solid 2px #04d9c4;
    }
  }

  @media (min-width: 801px) and (max-width: 1142px) {
    width: 80%;
  }
`;

export const ProfileLeftContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 120px;
  width: 50%;

  a {
    text-decoration: none;
    color: #54f2e2;
    font-size: 24px;
    font-weight: 700;
    border: solid 2px #54f2e2;
    border-radius: 10px;
    padding: 14px 80px;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: #04d9c4;
    border: solid 2px #04d9c4;

  }

  @media (max-width: 1752px) {
    a {
      padding: 14px 60px;
    }
  }

  @media (max-width: 1619px) {
    a {
      padding: 14px 40px;
    }
  }

  @media (max-width: 1480px) {
    a {
      padding: 14px 20px;
    }
  }

  @media (min-width: 801px) {
    width: 100%;

    a {
      display: block;
      font-size: 16px;
      padding: 10px 20px;
      width: 100%;
    }

    gap: 80px;
  }
  
  @media (max-width: 800px) {
    width: 100%;
    gap: 0;

    a {
      display: block;
      font-size: 16px;
      padding: 10px 20px;
      width: 100%;
    }
  }
`;

export const ProfileRightContainer = styled.div`
  h3 {
    color: #04D9C4;
  }

  p {
    color: white;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;
