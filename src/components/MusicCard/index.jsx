import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import play from './play.png';
import pause from './pause.png';
import * as Style from './styles';
import emptyHeart from './emptyHeart.svg';
import filledHeart from './filledHeart.svg';

class MusicCard extends React.Component {
  state = {
    isPlaying: false,
  };

  // eslint-disable-next-line class-methods-use-this
  lalala = ({ target }) => {
    const { isPlaying } = this.state;
    const audio = target.parentElement.previousSibling;
    if (!isPlaying) {
      audio.play();
      this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
    } else {
      audio.pause();
      this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
    }
  };

  render() {
    const {
      music, AddFavoriteSong, favorites, history, artwork,
    } = this.props;
    const { isPlaying } = this.state;
    return (
      window.innerWidth > 320
        ? (
          <Style.Container>
            <Style.MusicContainer>
              { history.location.pathname.includes('favorites') ? (
                <img src={artwork} alt="album artwork" />
              ) : '' }
              <Style.MusicTime>
                {
                ((music.trackTimeMillis / 1000) / 60)
                  .toFixed(2)
                  .toString()
                  .replace('.', ':')
              }
              </Style.MusicTime>
              <label htmlFor={`favorite-${music.trackId}`}>
                {favorites.some((s) => s.trackId === music.trackId)
                  ? <img src={emptyHeart} alt="empty heart" />
                  : <img src={filledHeart} alt="filled heart" />}
                <input
                  name="favorite"
                  id={`favorite-${music.trackId}`}
                  value={music.trackId}
                  type="checkbox"
                  checked={favorites.some((s) => s.trackId === music.trackId)}
                  onChange={AddFavoriteSong}
                />
              </label>
              <p>
                {music.trackName.length > 67
                  ? `${music.trackName.substring(0, 67)}...`
                  : music.trackName}
              </p>
            </Style.MusicContainer>
            <Style.Player>
              <audio
                data-testid="audio-component"
                src={music.previewUrl}
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
              <Style.Button
                onClick={this.lalala}
                type="button"
              >
                { !isPlaying
                  ? <img src={play} alt="play button" />
                  : <img src={pause} alt="pause button" />}
              </Style.Button>
            </Style.Player>
          </Style.Container>
        )
        : (
          <Style.Container>
            <Style.MusicContainer>
              { history.location.pathname.includes('favorites') ? (
                <img src={artwork} alt="album artwork" />
              ) : '' }
              <p>
                {music.trackName.length > 67
                  ? `${music.trackName.substring(0, 67)}...`
                  : music.trackName}
              </p>
              <label htmlFor={`favorite-${music.trackId}`}>
                {favorites.some((s) => s.trackId === music.trackId)
                  ? <img src={emptyHeart} alt="empty heart" />
                  : <img src={filledHeart} alt="filled heart" />}
                <input
                  name="favorite"
                  id={`favorite-${music.trackId}`}
                  value={music.trackId}
                  type="checkbox"
                  checked={favorites.some((s) => s.trackId === music.trackId)}
                  onChange={AddFavoriteSong}
                />
              </label>
            </Style.MusicContainer>
            <Style.Player>
              <audio
                data-testid="audio-component"
                src={music.previewUrl}
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
              <Style.Button
                onClick={this.lalala}
                type="button"
              >
                { !isPlaying
                  ? <img src={play} alt="play button" />
                  : <img src={pause} alt="pause button" />}
              </Style.Button>
            </Style.Player>
          </Style.Container>
        )
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackTimeMillis: PropTypes.number.isRequired,
  }).isRequired,
  AddFavoriteSong: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      trackName: PropTypes.string.isRequired,
      previewUrl: PropTypes.string.isRequired,
      trackId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  artwork: PropTypes.string.isRequired,
};

export default withRouter(MusicCard);
