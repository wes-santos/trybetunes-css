import styled from 'styled-components';

export const Header = styled.header`
  background: linear-gradient(141deg, rgba(188,61,242,1) 0%, rgba(4,217,196,1) 100%);
  color: #F1F0FF;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding: 35px 60px;

  @media (max-width: 488px) {
    padding: 25px 30px;
    justify-content: center;
  }

  @media (max-width: 707px) {
    justify-content: center;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .active {
    color: white;
    text-decoration: underline;
  }

  @media (max-width: 488px) {
    a {
      font-size: 14px;
      margin-right: 0;
    }
  }
  
  @media (min-width: 530px) {
    a {
      margin-right: 5px;
      font-size: 16px;
    }
  }
`;

export const VRow = styled.div`
  background-color: #F1F0FF;
  padding: 1px;
  width: 1px;
  height: 50%;
  margin: 0 30px;

  @media (min-width: 530px) {
    margin: 0 15px;
  }

  @media (max-width: 488px) {
    margin: 0 10px;
  }
`;

export const NavUser = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;

  @media (max-width: 707px) {
    display: none;
  }
`;
