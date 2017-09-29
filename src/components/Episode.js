import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Links from './Links';
import Button from './Button';

import { colors, spacing } from '../styles';

const MAX_DESCRIPTION_LENGTH = 65;

const EpisodeContainer = styled.div`
  ${props => props.isGrey && css`background-color: ${colors.grey};`};
`;

const CollapsedEpisode = styled.div`
  display: flex;
  align-items: center;

  color: ${colors.teal};
  font-weight: bold;
  padding: ${spacing()};
`;

const ExpandedEpisode = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExtendedButton = styled(Button)`margin: 0 ${spacing()};`;

const EpisodeContentContainer = styled.span`margin: ${spacing(1.5)} 0;`;

const MaterialIcon = styled.i`color: ${colors.teal};`;

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
        ) : (
          <CollapsedEpisode onClick={() => onEpisodeClick(id)}>
            <MaterialIcon className="material-icons">play_circle_filled</MaterialIcon>
            <span>{title}</span>
          </CollapsedEpisode>
        )}
      </EpisodeContainer>
    );
  }
}
