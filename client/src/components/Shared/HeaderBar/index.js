import React from 'react';
import { Container, Header, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)`
  padding: 30px;
`;

const HeaderBar = () => (
  <StyledContainer text>
    <Header
      as="h1"
      content="Not Another Bus App"
      inverted
      style={{
        fontSize: '2em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as="h2"
      content="Again with the apps."
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Link to="/search">
      <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button>
    </Link>
  </StyledContainer>
);

export default HeaderBar;
