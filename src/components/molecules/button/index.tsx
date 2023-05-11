import styled from 'styled-components';
import { ButtonProps } from './interfaces';
import {
  primaryButtonStyles,
  smallButtonStyles,
  mediumButtonStyles,
  largeButtonStyles,
} from './styles';

const Button = styled.button<ButtonProps>`
  ${(props) => {
    if (props.primary) {
      return primaryButtonStyles;
    }
    switch (props.size) {
      case 'small':
        return smallButtonStyles;
      case 'medium':
        return mediumButtonStyles;
      case 'large':
        return largeButtonStyles;
      default:
        return mediumButtonStyles;
    }
  }}
`;

export default Button;
