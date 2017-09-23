import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import SocialIcon from './SocialIcon';
import Button from './Button';

import { spacing, colors } from '../styles';
import fledglinkBg from '../assets/code-bg.jpg';
import fledglinkIcon from '../assets/fledglink_logomark.png';
import fledglinkText from '../assets/fledglink_hero-wordmark.png';

const Background = styled.div`background: url(${fledglinkBg});`;

const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    padding: 0 ${spacing()};
`;

const HeroContainer = styled.div`
    display: flex;
    align-items: center;

    padding: ${spacing(2)};
`;

const HeroContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Logo = styled.img`width: 202px;`;

const Wordmark = styled.img`width: 460px;`;

const HeroText = styled.span`
    color: ${colors.white};
    font-size: 20px;

    ${props => props.bold && css`font-weight: bold;`};
`;

const ButtonContainer = styled.div`margin: ${spacing()} 0;`;

const ExtendedButton = styled(Button)`margin-right: 20px;`;

export default class HeroHeader extends Component {
    render() {
        return (
            <Background>
                <SocialIconsContainer>
                    <SocialIcon
                        social="email"
                        href="mailto:fledglink@gmail.com"
                    />
                    <SocialIcon
                        social="twitter"
                        target="_blank"
                        href="https://twitter.com/fledglink"
                    />
                    <SocialIcon
                        social="facebook"
                        target="_blank"
                        href="https://www.facebook.com/Fledglink-1192218404196656/"
                    />
                </SocialIconsContainer>
                <HeroContainer>
                    <Logo src={fledglinkIcon} alt="Fleglink logo" />
                    <HeroContentContainer>
                        <Wordmark src={fledglinkText} alt="Fledglink" />
                        <HeroText bold>
                            A podcast for people who think code is neat but
                            don't know what they're doing with their lives...
                        </HeroText>
                        <HeroText>
                            ...starring two guys who think code is neat but
                            don't know what they're doing with their lives
                        </HeroText>
                        <ButtonContainer>
                            <ExtendedButton inverse>Subscribe</ExtendedButton>
                            <Button>Listen</Button>
                        </ButtonContainer>
                    </HeroContentContainer>
                </HeroContainer>
            </Background>
        );
    }
}
