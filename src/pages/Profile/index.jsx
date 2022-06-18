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
        {window.innerWidth > 800 ? (
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
                      <p>{user.email || 'Você ainda não editou o seu e-mail, clique em Editar perfil ao lado para isso'}</p>
                      <h3>
                        Descrição
                      </h3>
                      <p>{user.description || 'Você ainda não editou a sua descrição, clique em Editar perfil ao lado para isso'}</p>
                    </Style.ProfileRightContainer>
                  </Style.Profile>
                )
            }
          </Style.Container>
        ) : (
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
                    <img src={user.image || profileImage} alt="user" />
                    <h3>
                      Nome
                    </h3>
                    <p>{user.name}</p>
                    <h3>
                      Email
                    </h3>
                    <p>{user.email || 'Você ainda não editou o seu e-mail, clique em Editar perfil ao lado para isso'}</p>
                    <h3>
                      Descrição
                    </h3>
                    <p>{user.description || 'Você ainda não editou a sua descrição, clique em Editar perfil ao lado para isso'}</p>
                    <Link to="profile/edit">Editar Perfil</Link>
                  </Style.Profile>
                )
            }
          </Style.Container>
        )}

      </Style.Wrapper>
    );
  }
}
