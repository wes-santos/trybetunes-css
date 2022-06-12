import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
          <Style.VRow />
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <Style.VRow />
          <Link to="/profile" data-testid="link-to-profile">Meu Perfil</Link>
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
