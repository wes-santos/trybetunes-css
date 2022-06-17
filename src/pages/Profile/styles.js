import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Container = styled.div`

`;

export const EditProfile = styled.div`

`;

export const Profile = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 3% auto;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 60px;
`;

export const ProfileLeftContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 120px;

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
