import React from 'react';
import PropTypes from 'prop-types';

import * as Style from './styles';
import MusicCard from '../../components/MusicCard';
import getMusics from '../../services/musicsAPI';
import Header from '../../components/Header';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../../services/favoriteSongsAPI';
import { LoadingWrapper, Spinner } from '../../components/Loading';

export default class Album extends React.Component {
  state = {
    musicList: [],
    favoriteSongs: [],
    album: {},
    loading: true,
    loadingFavorites: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const request = await getMusics(id);
    // const favorites = await getFavoriteSongs();
    const album = request[0];
    const musicList = request.filter((item) => item.kind === 'song');

    getFavoriteSongs().then((favoriteSongs) => this.setState({
      favoriteSongs,
      loadingFavorites: false,
    }));

    const root = document.getElementById('root');
    root.style.height = '100vh';

    this.setMusics(musicList, album);
  }

  componentDidUpdate() {
    const root = document.getElementById('root');
    const { loading } = this.state;
    if (loading) {
      root.style.height = '100%';
    }
  }

  setFavoriteSongs = (favoriteSongs) => {
    this.setState({
      favoriteSongs,
      loadingFavorites: false,
    });
  };

  setMusics = (musicList, album) => {
    this.setState({
      musicList,
      album,
      loading: false,
    });
  };

  AddFavoriteSong = async ({ target: { value, checked } }) => {
    const { musicList } = this.state;
    const song = musicList.find((music) => music.trackId === parseInt(value, 10));

    const updateFunction = checked ? addSong : removeSong;
    this.setState({
      loadingFavorites: true,
    });
    updateFunction(song)
      .then(() => getFavoriteSongs())
      .then((favoriteSongs) => this.setFavoriteSongs(favoriteSongs));
  };

  render() {
    const {
      loading, musicList, album, favoriteSongs, loadingFavorites,
    } = this.state;
    return (
      <div>
        <Header />
        <Style.Wrapper data-testid="page-album">
          <Style.Container>
            { loading || loadingFavorites
              ? (
                <LoadingWrapper>
                  <Spinner />
                </LoadingWrapper>
              )
              : (
                <Style.AlbumWrapper>
                  <Style.ImageWrapper>
                    {album && (
                    <>
                      <Style.ImageContainer>
                        <img
                          src={album.artworkUrl100.replace('100x100', '600x600')}
                          alt="album artwork"
                        />
                      </Style.ImageContainer>
                      <Style.Title>
                        {album.artistName.length > 18
                          ? `${album.artistName.substring(0, 18)}...`
                          : album.artistName}
                      </Style.Title>
                      <Style.Subtitle>
                        {album.collectionName.length > 48
                          ? `${album.collectionName.substring(0, 48)}...`
                          : album.collectionName}
                      </Style.Subtitle>
                    </>
                    )}
                  </Style.ImageWrapper>
                  <div className="playlist">
                    {musicList.map((music) => (
                      <Style.MusicsWrapper
                        key={music.trackId}
                      >
                        <MusicCard
                          music={music}
                          AddFavoriteSong={this.AddFavoriteSong}
                          favorites={favoriteSongs}
                        />
                      </Style.MusicsWrapper>
                    ))}
                  </div>
                </Style.AlbumWrapper>
              )}
          </Style.Container>
        </Style.Wrapper>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
