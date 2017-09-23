import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { spacing, colors, fontFamily } from '../styles';

const StyledButton = styled.button`
    padding: ${spacing()} ${spacing(5)};

    ${fontFamily};
    font-size: 14px;
    color: ${colors.white};
    background-color: ${colors.teal};
    cursor: pointer;

    border: 1px solid ${colors.teal};
    border-radius: 5px;

    &:focus {
        outline: none;
    };

    &:active {
        background-color: rgba(0,150,136,0.5);
    };

    ${props => props.inverse && css`
        background-color: transparent;
        color: ${colors.white};
    `};
`;

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;
