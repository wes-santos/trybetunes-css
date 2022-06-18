import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import * as Style from './styles';
import { getUser } from '../../services/userAPI';
import profileIcon from './profileIcon.png';

export default class Header extends React.Component {
  state = {
    user: undefined,
  };

  async componentDidMount() {
    const user = await getUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <Style.Header data-testid="header-component">
        <Style.Nav>
          <NavLink
            to="/search"
            data-testid="link-to-search"
            // style={(isActive) => ({
            //   color: isActive ? '#2E0259' : '#fff',
            // })}
          >
            Pesquisar
          </NavLink>
          <Style.VRow />
          <NavLink
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritas
          </NavLink>
          <Style.VRow />
          <NavLink
            to="/profile"
            data-testid="link-to-profile"
          >
            {window.innerWidth > 320 ? 'Meu Perfil' : 'Perfil'}
          </NavLink>
        </Style.Nav>
        <Style.NavUser>
          <img src={profileIcon} alt="profile-icon" />
          {user
            ? <p data-testid="header-user-name">{user.name}</p>
            : <p>Carregando...</p>}
        </Style.NavUser>
      </Style.Header>
    );
  }
}
