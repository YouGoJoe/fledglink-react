import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Links from './Links';
import Button from './Button';

import { colors, spacing } from '../styles';

const MAX_DESCRIPTION_LENGTH = 65;

const episodeContainerCss = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 0 ${spacing(20)};
  padding: ${spacing()};
`;

const EpisodeContainer = styled.div`
  ${props => props.isGrey && css`background-color: ${colors.grey};`};
`;

const ExpandedEpisodeContainer = styled.div`${episodeContainerCss};`;

const CollapsedEpisodeContainer = styled.div`
  ${episodeContainerCss};
  
  color: ${colors.teal};
  font-weight: bold;
  cursor: pointer;
`;

const ExpandedEpisode = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ExtendedButton = styled(Button)`margin: 0 ${spacing()};`;

const EpisodeContentContainer = styled.span`margin: ${spacing(1.5)} 0;`;

const MaterialIcon = styled.i`
  color: ${colors.teal};
  flex-basis: 20%;
`;

const TitleText = styled.span`flex-grow: 1;`;

export default class Episode extends Component {
  constructor() {
    super();
    this.state = { isCollapsed: true };
  }

  toggleCollapsed() {
    this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
  }

  render() {
    const {
      podcast: { title, description, notes, source, id },
      isSelected,
      onEpisodeClick,
      ...rest
    } = this.props;
    const { isCollapsed } = this.state;
    return (
      <EpisodeContainer {...rest}>
        {isSelected ? (
          <ExpandedEpisodeContainer>
            <MaterialIcon className="material-icons">play_circle_filled</MaterialIcon>
            <ExpandedEpisode>
              <h2>{title}</h2>
              {isCollapsed ? (
                <p>
                  <span>{`${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`}</span>
                  <ExtendedButton clear onClick={() => this.toggleCollapsed()}>
                    More Info
                  </ExtendedButton>
                </p>
              ) : (
                <EpisodeContentContainer>
                  <p>{description}</p>
                  <Links notes={notes} />
                  <ExtendedButton clear onClick={() => this.toggleCollapsed()}>
                    Less Info
                  </ExtendedButton>
                </EpisodeContentContainer>
              )}
            </ExpandedEpisode>
          </ExpandedEpisodeContainer>
        ) : (
          <CollapsedEpisodeContainer onClick={() => onEpisodeClick(id)}>
            <MaterialIcon className="material-icons">play_circle_filled</MaterialIcon>
            <TitleText>{title}</TitleText>
          </CollapsedEpisodeContainer>
        )}
      </EpisodeContainer>
    );
  }
}
