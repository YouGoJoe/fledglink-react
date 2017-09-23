import React, { Component } from 'react';
import styled from 'styled-components';

import HeroHeader from './components/HeroHeader';

import { fontFamily } from './styles';

const Container = styled.div`${fontFamily};`;

class App extends Component {
    render() {
        return (
            <Container>
                <HeroHeader />
            </Container>
        );
    }
}

export default App;
