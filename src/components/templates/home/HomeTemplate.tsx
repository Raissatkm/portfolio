import React, { FC } from 'react';
import styled from 'styled-components';
import { Props } from './interfaces'

const Container = styled.div`
`;

const Header = styled.header`
`;

const Main = styled.main`
`;

const Footer = styled.footer`
`;

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