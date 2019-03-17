import React, { Component } from 'react';
import {
  Responsive,
  Visibility,
  Segment,
  Menu,
  Container,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeaderBar from '../../Shared/HeaderBar';

class Heading extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Link to='/'>
                  <Menu.Item as='a' active={true}>
                    Homepage
                  </Menu.Item>
                </Link>
                <Link to='/search'>
                  <Menu.Item as='a' >
                    Search
                  </Menu.Item>
                </Link>
                <Link to='/bookmark'>
                  <Menu.Item as='a' >
                    Bookmarks
                  </Menu.Item>
                </Link>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HeaderBar />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

export default Heading;