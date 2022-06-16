import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import play from './play.png';
import pause from './pause.png';
import * as Style from './styles';

export default class MusicCard extends React.Component {
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
    const { music, AddFavoriteSong, favorites } = this.props;
    const { isPlaying } = this.state;
    return (
      <Style.Container>
        <p>
          {
            ((music.trackTimeMillis / 1000) / 60)
              .toFixed(2)
              .toString()
              .replace('.', ':')
          }
        </p>
        <label htmlFor={`favorite-${music.trackId}`}>
          {/* <input
            name="favorite"
            id={`favorite-${music.trackId}`}
            value={music.trackId}
            type="checkbox"
            checked={favorites.some((s) => s.trackId === music.trackId)}
            onChange={AddFavoriteSong}
          /> */}
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
          {music.trackName}
        </p>
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
      </Style.Container>
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
};
