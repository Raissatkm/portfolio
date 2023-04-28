import styled, { css } from 'styled-components';

interface BorderProps {
  styles?: Record<string, any>;
}

export const Border = styled.div<BorderProps>`
  height: 3px;
  width: 7rem;
  background: linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 98%);
  ${({ styles }) => styles && css`
    ${Object.keys(styles).map(key => `${key}: ${styles[key]};`).join('')}
  `}
`;
