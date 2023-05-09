import styled from 'styled-components';
import {
  primaryButtonStyles,
  smallButtonStyles,
  mediumButtonStyles,
  largeButtonStyles,
} from './styles';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

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
