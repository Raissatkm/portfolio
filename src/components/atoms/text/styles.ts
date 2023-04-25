import styled from "styled-components";

export const TextSizes = {
  small: '12px',
  medium: '16px',
  large: '24px'
};

export const TextColors = {
  white: '#FFFFFF',
  gray: '#AAAAAA',
  black: '#000000',
  yellow: '#FFFF00'
};

export const Fonts = {
  sansSerif: 'Arial, sans-serif',
  serif: 'Georgia, serif'
};

export interface TextProps {
  as: any;
  className: any;
  text: string;
  size?: keyof typeof TextSizes;
  color?: keyof typeof TextColors;
  fontFamily?: keyof typeof Fonts;
}

export const StyledText = styled.p<TextProps>`
  font-size: ${(props) => TextSizes[props.size || 'medium']};
  color: ${(props) => TextColors[props.color || 'black']};
  font-family: ${(props) => Fonts[props.fontFamily || 'sansSerif']};
`;
