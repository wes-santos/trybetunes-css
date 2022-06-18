import React from 'react';
import PropTypes from 'prop-types';

import { createUser } from '../../services/userAPI';
import { LoadingWrapper, Spinner } from '../../components/Loading';
import * as Style from './styles';

export default class Login extends React.Component {
  state = {
    formName: '',
    loading: false,
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const { formName } = this.state;
    const { history } = this.props;

    this.setState({ loading: true }, () => createUser({ name: formName }).then(() => history.push('search')));
  };

  buttonDisabled = () => {
    const MIN_LENGTH_NAME = 3;
    const { formName } = this.state;

    return formName.length >= MIN_LENGTH_NAME;
  };

  render() {
    const { formName, loading } = this.state;

    return loading ? (
      <LoadingWrapper>
        <Spinner />
      </LoadingWrapper>
    ) : (
      <Style.Container data-testid="page-login">
        <Style.FormWrapper>
          <Style.Title>TrybeTunes</Style.Title>
          <Style.Form>
            <input
              name="formName"
              id="login-submit-button"
              type="text"
              data-testid="login-name-input"
              value={formName}
              placeholder="Digite seu nome"
              onChange={this.handleChangeForm}
            />
            <Style.Button
              type="submit"
              data-testid="login-submit-button"
              onClick={this.onButtonClick}
              disabled={!this.buttonDisabled()}
            >
              Entrar
            </Style.Button>
          </Style.Form>
        </Style.FormWrapper>
        <Style.ImageWrapper />
      </Style.Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
