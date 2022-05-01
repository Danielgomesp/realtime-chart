import GlobalContainer from 'components/GlobalContainer';
import React from 'react';

import { Container, SubTitle, Title } from './styles';

function Header() {
  return (
    <Container>
      <GlobalContainer>
        <Title>
          Wiliot
          <SubTitle>
            Test
          </SubTitle>
        </Title>
      </GlobalContainer>
    </Container>
  );
}

export default Header;
