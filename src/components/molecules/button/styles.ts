import { css } from 'styled-components';

export const buttonStyles = css`
  position: absolute;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 0.25rem;
  background-color: #3C8267;
  color: #FFFFFF;
  border: none;
  box-shadow: 0 0.125rem 0.313rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const smallButtonStyles = css`
  ${buttonStyles};
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
`;

export const mediumButtonStyles = css`
  ${buttonStyles};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
`;

export const largeButtonStyles = css`
  ${buttonStyles};
  padding: 1rem 2rem;
  font-size: 1.25rem;
`;
