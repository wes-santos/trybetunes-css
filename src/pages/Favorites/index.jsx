import React from 'react';

import MusicCard from '../../components/MusicCard';
import Header from '../../components/Header';
import {
  getFavoriteSongs,
  addSong,
  removeSong,
} from '../../services/favoriteSongsAPI';
import { LoadingWrapper, Spinner } from '../../components/Loading';

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
      <div data-testid="page-favorites">
        <Header />

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
              />
            ))
          )}
      </div>
    );
  }
}
