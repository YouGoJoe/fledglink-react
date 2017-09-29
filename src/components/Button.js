import React from 'react';
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
  }

  &:active {
    background-color: rgba(0, 150, 136, 0.5);
  }

  ${props =>
    props.inverse &&
    css`
      background-color: transparent;
      color: ${colors.white};
    `};

  ${props =>
    props.clear &&
    css`
      padding: ${spacing(0.5)} ${spacing(2.5)};

      border: none;
      background-color: transparent;
      color: ${colors.teal};

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    `};
`;

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;
