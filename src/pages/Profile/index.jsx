import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../../services/userAPI';
import Header from '../../components/Header';
import { LoadingWrapper, Spinner } from '../../components/Loading';
import * as Style from './styles';
import profileImage from './profileImage.png';

export default class Profile extends React.Component {
  state = {
    loading: true,
    user: {},
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <Style.Wrapper data-testid="page-profile">
        <Header />
        <Style.Container>
          {
            loading
              ? (
                <LoadingWrapper>
                  <Spinner />
                </LoadingWrapper>
              )
              : (
                <Style.Profile className="profile">
                  <Style.ProfileLeftContainer>
                    <img src={user.image || profileImage} alt="user" />
                    <Style.EditProfile>
                      <img data-testid="profile-image" src={user.image} alt="" />
                      <Link to="profile/edit">Editar Perfil</Link>
                    </Style.EditProfile>
                  </Style.ProfileLeftContainer>
                  <Style.ProfileRightContainer>
                    <h3>
                      Nome
                    </h3>
                    <p>{user.name}</p>
                    <h3>
                      Email
                    </h3>
                    <p>{user.email || 'Funcionalidade em construção'}</p>
                    <h3>
                      Descrição
                    </h3>
                    <p>{user.description || 'Funcionalidade em construção'}</p>
                  </Style.ProfileRightContainer>
                </Style.Profile>
              )
          }
        </Style.Container>
      </Style.Wrapper>
    );
  }
}
