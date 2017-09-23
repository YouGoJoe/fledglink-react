import React, { Component } from 'react';
import styled from 'styled-components';

import SocialIcon from './SocialIcon';

import fledglinkBg from '../assets/code-bg.jpg';

const Background = styled.div`
    height: 400px;
    background: url(${fledglinkBg});
`;

export default class HeroHeader extends Component {
    render() {
        return <Background>
            <SocialIcon social="email" href="mailto:fledglink@gmail.com" />
            <SocialIcon social="twitter" target="_blank" href="https://twitter.com/fledglink" />
            <SocialIcon social="facebook" target="_blank" href="https://www.facebook.com/Fledglink-1192218404196656/" />
        </Background>;
    }
}
