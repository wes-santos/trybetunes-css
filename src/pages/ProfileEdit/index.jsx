import React from 'react';
import PropTypes from 'prop-types';

import { getUser, updateUser } from '../../services/userAPI';
import Header from '../../components/Header';
import { LoadingWrapper, Spinner } from '../../components/Loading';
import * as Style from './styles';
import profileImage from './profileImage.png';

export default class ProfileEdit extends React.Component {
  state = {
    loading: true,
    user: {
      name: '',
      description: '',
      email: '',
      image: '',
    },
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  handleChangeForm = ({ target: { name, value } }) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };

  isButtonDisabled = () => {
    const VALIDADE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const { user } = this.state;

    const hasEmail = VALIDADE_EMAIL.test(String(user.email).toLowerCase());
    const notEmpty = (user.name !== ''
      && user.description !== ''
      && user.image !== '');

    return hasEmail && notEmpty;
  };

  isSubmitted = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { history } = this.props;

    this.setState(
      { loading: true },
      async () => {
        await updateUser(user);
        this.setState(
          { loading: false },
          () => history.push('/profile'),
        );
      },
    );
  };

  render() {
    const { loading, user } = this.state;

    return (
      <Style.Wrapper data-testid="page-profile-edit">
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
                <Style.Form>
                  <Style.FormContainer>
                    <label htmlFor="edit-input-image">
                      <Style.NameContainer>
                        <img src={user.image ? user.image : profileImage} alt="profile" />
                        <div>
                          <h3>Insira um link</h3>
                          <input
                            id="edit-input-image"
                            type="text"
                            name="image"
                            data-testid="edit-input-image"
                            value={user.image}
                            placeholder="URL de sua imagem"
                            onChange={this.handleChangeForm}
                          />
                        </div>
                      </Style.NameContainer>
                    </label>

                    <label htmlFor="edit-input-name">
                      <h3>Nome</h3>
                      <p>Fique à vontade para usar seu nome social</p>
                      <input
                        id="edit-input-name"
                        type="text"
                        name="name"
                        data-testid="edit-input-name"
                        value={user.name}
                        placeholder="Digite seu nome aqui"
                        onChange={this.handleChangeForm}
                      />
                    </label>

                    <label htmlFor="edit-input-email">
                      <h3>E-mail</h3>
                      <p>Escolha seu melhor e-mail para utilizar aqui</p>
                      <input
                        id="edit-input-email"
                        type="text"
                        name="email"
                        data-testid="edit-input-email"
                        value={user.email}
                        placeholder="usuario@usuario.com"
                        onChange={this.handleChangeForm}
                      />
                    </label>

                    <label htmlFor="edit-input-description">
                      <h3>Descrição</h3>
                      <p>Conte um pouco sobre quem é você</p>
                      <input
                        id="edit-input-description"
                        type="text"
                        name="description"
                        data-testid="edit-input-description"
                        value={user.description}
                        placeholder="Sobre você"
                        onChange={this.handleChangeForm}
                      />
                    </label>

                    <Style.Button
                      type="submit"
                      data-testid="edit-button-save"
                      disabled={!this.isButtonDisabled()}
                      onClick={this.isSubmitted}
                    >
                      Salvar
                    </Style.Button>
                  </Style.FormContainer>
                </Style.Form>
              )
          }
        </Style.Container>
      </Style.Wrapper>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
