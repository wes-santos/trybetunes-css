import React from 'react';

import MusicCard from '../../components/MusicCard';
import Header from '../../components/Header';
import {
  getFavoriteSongs,
  addSong,
  removeSong,
} from '../../services/favoriteSongsAPI';
import { LoadingWrapper, Spinner } from '../../components/Loading';
import * as Style from './styles';

export default class Favorites extends React.Component {
  state = {
    loading: true,
    favoriteSongs: [],
  };

  componentDidMount() {
    getFavoriteSongs().then((favoriteSongs) => {
      this.setState({
        loading: false,
        favoriteSongs,
      });
    });
  }

  onFavoriteChange = ({ target }) => {
    const { favoriteSongs } = this.state;
    const { checked, value } = target;
    const song = favoriteSongs.find((m) => m.trackId === parseInt(value, 10));

    const updateFunction = checked ? addSong : removeSong;

    this.setState({
      loading: true,
    });

    updateFunction(song)
      .then(() => getFavoriteSongs())
      .then((favSongs) => this.setState({ favoriteSongs: favSongs, loading: false }));
  };

  render() {
    const { favoriteSongs, loading } = this.state;
    return (
      <Style.Main data-testid="page-favorites">
        <Header />
        <Style.Wrapper>
          <h2>Músicas Favoritas</h2>
          <Style.MusicsContainer>
            {loading
              ? (
                <LoadingWrapper>
                  <Spinner />
                </LoadingWrapper>
              )
              : (
                favoriteSongs.map((song) => (
                  <MusicCard
                    key={song.trackId}
                    music={song}
                    AddFavoriteSong={this.onFavoriteChange}
                    favorites={favoriteSongs}
                    artwork={song.artworkUrl100}
                  />
                ))
              )}
          </Style.MusicsContainer>
        </Style.Wrapper>
      </Style.Main>
    );
  }
}
