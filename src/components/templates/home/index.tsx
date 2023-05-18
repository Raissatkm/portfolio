import React from 'react';
import * as Style from './styles';
import { HomeInterface } from './interfaces';

const HomeTemplate: React.FC<HomeInterface> = ({ ButtonProps, ImageProps, TextProps }) => {
  return (
    <Style.Container>
      <Style.Logo>{ }</Style.Logo>
      <Style.Navbar>{ }</Style.Navbar>
      <Style.Main>{ }</Style.Main>
      <Style.SocialMedia>{ }</Style.SocialMedia>
      <Style.ImageContainer>{ }</Style.ImageContainer>
    </Style.Container>
  );
};

export default HomeTemplate;
