import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { colors, spacing } from '../styles';

const EpisodeContainer = styled.div`
  ${props => props.isGrey && css`background-color: ${colors.grey};`};
`;

const CollapsedEpisode = styled.div`
  color: ${colors.teal};
  font-weight: bold;
  padding: ${spacing()};
`;

const ExpandedEpisode = styled.div`
  display: flex;
  flex-direction: column;
`;

const EpisodeLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EpisodeLink = styled.li`margin: ${spacing(1.5)} ${spacing(2)};`;

export default class Episode extends Component {
  render() {
    const {
      podcast: { title, description, notes, source, id },
      isSelected,
      onEpisodeClick,
      ...rest
    } = this.props;
    return (
      <EpisodeContainer {...rest}>
        {isSelected ? (
          <ExpandedEpisode>
            <h2>{title}</h2>
            <p>{description}</p>

            {notes.length !== 0 && (
              <span>
                <strong>Episode Links</strong>
                <EpisodeLinkList>
                  {notes.map((note, index) => (
                    <EpisodeLink key={index}>
                      <a href={note.link} target="_blank">
                        {note.name}
                      </a>
                    </EpisodeLink>
                  ))}
                </EpisodeLinkList>
              </span>
            )}
          </ExpandedEpisode>
        ) : (
          <CollapsedEpisode onClick={() => onEpisodeClick(id)}>{title}</CollapsedEpisode>
        )}
      </EpisodeContainer>
    );
  }
}
