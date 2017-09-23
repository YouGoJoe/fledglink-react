import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { spacing, media } from '../styles';

import EmailIcon from '../assets/email icon.png';
import TwitterIcon from '../assets/Twitter icon.png';
import FacebookIcon from '../assets/Facebook icon.png';

const Image = styled.img`
    padding: ${spacing(1.5)} ${spacing()};

    width: 24px;
    height: 24px;
`;

const SocialMedias = {
    email: EmailIcon,
    twitter: TwitterIcon,
    facebook: FacebookIcon
};

const SocialIcon = ({ social, ...rest }) => (
    <a {...rest}>
        <Image src={SocialMedias[social]} />
    </a>
);

export default SocialIcon;
