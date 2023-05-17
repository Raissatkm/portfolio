import React from 'react';
import * as Style from './styles';
import { HomeInterface } from './interfaces';

export default function HomeTemplate({ ButtonProps, ImageProps, TextProps }: HomeInterface) {
  return (
    <Style.HomeComponent>
      {ButtonProps && <Style.ButtonComponent {...ButtonProps} />}
      {ImageProps && <Style.ImageComponent {...ImageProps} />}
      {TextProps && <Style.TextComponent {...TextProps} />}
    </Style.HomeComponent>
  );
}
