import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({theme}) => css`
    background: transparent;
    border: 1px solid ${theme.palette.primary.main};
    font-size: 16px;
    padding: 4px 16px;
    color: ${theme.palette.primary.main};
    border-radius: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: ${theme.palette.primary.main};
      color: #fff;
    }
  `};
`;
