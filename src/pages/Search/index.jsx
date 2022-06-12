import React from 'react';
import { Link } from 'react-router-dom';

import * as Style from './styles';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Header from '../../components/Header';
import { LoadingWrapper, Spinner } from '../../components/Loading';

export default class Search extends React.Component {
  state = {
    loading: false,
    artistFormName: '',
    artistName: '',
    artistAlbum: [],
    hasAlbum: true,
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const { artistFormName } = this.state;

    this.setState(
      {
        loading: true,
        artistFormName: '',
        artistName: artistFormName,
      },
      async () => {
        const album = await searchAlbumsAPI(artistFormName);
        const foundAlbum = album.length > 0;

        this.setState({
          loading: false,
          artistAlbum: album,
          hasAlbum: foundAlbum,
        });
      },
    );
  };

  buttonDisabled = () => {
    const MIN_LENGTH_NAME = 2;
    const { artistFormName } = this.state;

    return artistFormName.length >= MIN_LENGTH_NAME;
  };

  render() {
    const {
      artistFormName,
      loading,
      artistAlbum,
      artistName,
      hasAlbum,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <Style.Container>
          <Style.Input
            id="search-artist-input"
            type="text"
            name="artistFormName"
            value={artistFormName}
            data-testid="search-artist-input"
            onChange={this.handleChangeForm}
            placeholder="Nome do artista"
          />
          <Style.Button
            type="submit"
            data-testid="search-artist-button"
            disabled={!this.buttonDisabled()}
            onClick={this.onButtonClick}
          >
            Procurar
          </Style.Button>
        </Style.Container>

        { loading
          ? (
            <LoadingWrapper>
              <Spinner />
            </LoadingWrapper>
          )
          : (
            <div className="album-list">
              {artistAlbum.length > 0 && (
                <Style.SearchResults>
                  <Style.Subtitle>
                    Resultado para álbuns de:
                    {' '}
                    {artistName}
                  </Style.Subtitle>
                  <Style.AlbumsContainer>
                    { artistAlbum.map(({
                      collectionId, collectionName, artworkUrl100, artistName: ArtistName,
                    }) => (
                      <Style.Album
                        key={collectionId}
                      >
                        <Style.AlbumImageWrapper><img src={artworkUrl100.replace('100x100', '600x600')} alt="album-artwork" /></Style.AlbumImageWrapper>
                        <Link
                          to={`/album/${collectionId}`}
                          data-testid={`link-to-album-${collectionId}`}
                        >
                          {collectionName}
                        </Link>
                        <Style.ArtistName>{ArtistName}</Style.ArtistName>
                      </Style.Album>
                    ))}
                  </Style.AlbumsContainer>
                </Style.SearchResults>
              )}
              <Style.SearchResults>
                { hasAlbum ? null : <Style.Subtitle>Nenhum álbum foi encontrado</Style.Subtitle> }
              </Style.SearchResults>
            </div>
          )}
      </div>
    );
  }
}
