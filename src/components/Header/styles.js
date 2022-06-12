import styled from 'styled-components';

export const Header = styled.header`
  background-color: #023E73;
  color: #F1F0FF;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding: 35px 60px;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;

  a {
    color: #F1F0FF;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
  }

  a:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const VRow = styled.div`
  background-color: #F1F0FF;
  padding: 1px;
  width: 1px;
  height: 100%;
  margin: 0 30px;
`;

export const NavUser = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;
