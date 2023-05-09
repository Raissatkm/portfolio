import { css } from 'styled-components';

export const buttonStyles = css`
  position: absolute;
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  background-color: #3C8267;
  color: #FFFFFF;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const primaryButtonStyles = css`
  ${buttonStyles};
  background-color: #3C8267;
  color: #FFFFFF;
`;

export const smallButtonStyles = css`
  ${buttonStyles};
  padding: 8px 16px;
  font-size: 12px;
`;

export const mediumButtonStyles = css`
  ${buttonStyles};
  padding: 12px 24px;
  font-size: 16px;
`;

export const largeButtonStyles = css`
  ${buttonStyles};
  padding: 16px 32px;
  font-size: 20px;
`;
