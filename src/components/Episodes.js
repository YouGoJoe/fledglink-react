import React, { Component } from 'react';

import Episode from './Episode';

import podcasts from '../podcasts.json';

export default class Episodes extends Component {
  constructor() {
    super();

    this.state = {
      selectedEpisodeId: podcasts[0].id,
    };

    this.boundSelectEpisode = this.selectEpisode.bind(this);
  }
  selectEpisode(selectedEpisodeId) {
    this.setState({ selectedEpisodeId });
  }

  render() {
    const { selectedEpisodeId } = this.state;
    return (
      <div>
        {podcasts.map((podcast, index) => (
          <Episode
            podcast={podcast}
            key={podcast.id}
            onEpisodeClick={this.boundSelectEpisode}
            isSelected={podcast.id === selectedEpisodeId}
            isGrey={index % 2 === 0}
          />
        ))}
      </div>
    );
  }
}
