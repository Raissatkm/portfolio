import styled from 'styled-components';
import { ButtonProps } from './interfaces';
import {
  smallButtonStyles,
  mediumButtonStyles,
  largeButtonStyles,
} from './styles';

const Button = styled.button<ButtonProps>`
  ${(props) => {
    switch (props.size) {
      case 'small':
        return smallButtonStyles;
      case 'medium':
        return mediumButtonStyles;
      case 'large':
        return largeButtonStyles;
    }
  }}
`;

export default Button;
