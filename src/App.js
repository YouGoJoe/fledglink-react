import React, { Component } from 'react';
import styled from 'styled-components';

import HeroHeader from './components/HeroHeader';
import Episodes from './components/Episodes';

import { fontFamily, colors, spacing } from './styles';

const Container = styled.div`${fontFamily};`;

const EpisodeDivider = styled.div`
    padding: ${spacing(2)};

    background-color: ${colors.teal};
    color: ${colors.white};
    text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <HeroHeader />
        <EpisodeDivider>Latest Episodes</EpisodeDivider>
        <Episodes />
      </Container>
    );
  }
}

export default App;
