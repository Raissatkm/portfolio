import React, { FC } from 'react';
import { Props } from './interfaces';
import { Container, Header, Main, Footer } from './styles';

const HomeTemplate: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header>{ }</Header>
      <Main>{children}</Main>
      <Footer>{ }</Footer>
    </Container>
  );
};

export default HomeTemplate;
