import React from 'react';
import styled from 'styled-components';

import { spacing } from '../styles';

const EpisodeLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EpisodeLink = styled.li`margin: ${spacing(1.5)} ${spacing(2)};`;

const Links = ({ notes }) => (
  <span>
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
  </span>
);

export default Links;
