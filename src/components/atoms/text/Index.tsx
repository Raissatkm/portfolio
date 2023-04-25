import React from 'react';
import { StyledText, TextProps } from './styles';

function Text(props: TextProps) {
  return (
    <StyledText {...props}>
      {props.text}
    </StyledText>
  );
}

Text.defaultProps = {
  size: 'medium',
  color: 'black',
  fontFamily: 'sansSerif'
};

export default Text;
