import styled from 'styled-components';
import { IconProps } from './interfaces';

export const IconSize = {
  small: '16px',
  medium: '24px',
  large: '32px',
};

export const IconColor = {
  red: '#FF4136',
  blue: '#0074D9',
  green: '#2ECC40',
  white: '#FFFFFF',
  black: '#111111',
};

export const StyledIcon = styled.span<IconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => IconColor[color]};
  font-size: ${({ size }) => IconSize[size]};
`;
